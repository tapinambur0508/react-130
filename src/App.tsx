import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Button } from "antd";

import Modal from "./components/Modal/Modal";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";
import SearchBox from "./components/SearchBox/SearchBox";

import { useModal } from "./hooks/useModal";

import { getTasks } from "./services/taskService";

import css from "./App.module.css";

function App() {
  const [search, setSearch] = useState("");

  const createTaskModal = useModal(true);
  const changeTaskStatus = useModal();

  const { data, error, isLoading, isSuccess, isError } = useQuery({
    queryFn: () => getTasks(search),
    queryKey: ["tasks", search],
  });

  const handleSearch = (search: string) => {
    setSearch(search);
  };

  return (
    <div className={css.container}>
      <header className={css.header}>
        <Button
          htmlType="button"
          type="primary"
          onClick={createTaskModal.openModal}
        >
          Create task
        </Button>
      </header>

      <SearchBox search={search} onSearch={handleSearch} />
      {isLoading && <p className={css.loading}>Loading...</p>}
      {isError && <p className={css.error}>{error.message}</p>}
      {isSuccess && <TaskList tasks={data} />}

      {createTaskModal.isOpen && (
        <Modal onClose={createTaskModal.closeModal}>
          <TaskForm onSuccess={createTaskModal.closeModal} />
        </Modal>
      )}
    </div>
  );
}

export default App;
