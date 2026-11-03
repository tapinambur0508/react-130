import { useMutation, useQueryClient } from "@tanstack/react-query";

import { Checkbox, Button } from "antd";

import { deleteTask, updateTask } from "../../services/taskService";

import type { Task } from "../../types/task";

import css from "./TaskList.module.css";

interface TaskListProps {
  tasks: Task[];
}

function TaskList({ tasks }: TaskListProps) {
  const queryClient = useQueryClient();

  const deleteTaskM = useMutation({
    mutationFn: deleteTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  const updateTaskM = useMutation({
    mutationFn: updateTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  const handleDelete = (taskId: Task["id"]) => {
    deleteTaskM.mutate(taskId);
  };

  const handleUpdate = (taskId: Task["id"], completed: boolean) => {
    updateTaskM.mutate({ taskId, payload: { completed } });
  };

  return (
    <ul className={css.list}>
      {tasks.map((task) => (
        <li key={task.id}>
          <Checkbox
            checked={task.completed}
            onChange={(event) => handleUpdate(task.id, event.target.checked)}
          />
          <span className={css.text}>{task.text}</span>
          <Button
            color="danger"
            variant="outlined"
            onClick={() => handleDelete(task.id)}
          >
            Delete
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
