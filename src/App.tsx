import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Button } from "antd";

import Modal from "./components/Modal/Modal";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";

import { getTasks } from "./services/taskService";

import css from "./App.module.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const { data, error, isLoading, isSuccess, isError } = useQuery({
    queryFn: getTasks,
    queryKey: ["tasks"],
  });

  return (
    <div className={css.container}>
      <header className={css.header}>
        <Button
          htmlType="button"
          type="primary"
          onClick={() => setIsModalOpen(true)}
        >
          Create task
        </Button>
      </header>

      {isLoading && <p className={css.loading}>Loading...</p>}
      {isError && <p className={css.error}>{error.message}</p>}
      {isSuccess && <TaskList tasks={data} />}

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <TaskForm onSuccess={() => setIsModalOpen(false)} />
        </Modal>
      )}
    </div>
  );
}

export default App;
