import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "antd";

import { createTask } from "../../services/taskService";

import css from "./TaskForm.module.css";

interface TaskFormProps {
  onSuccess: () => void;
}

function TaskForm({ onSuccess }: TaskFormProps) {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: createTask,
    onSuccess: (createdTask, payload) => {
      console.log({ createdTask, payload });
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      onSuccess();
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const handleSubmit = (formData: FormData) => {
    const text = formData.get("text") as string;

    if (text.trim() !== "") {
      mutate({ text });
    }
  };

  return (
    <form className={css.form} action={handleSubmit}>
      <label className={css.label}>
        Task text
        <textarea name="text" className={css.input} rows={5} />
      </label>

      <Button htmlType="submit" type="primary" loading={isPending}>
        Create
      </Button>
    </form>
  );
}

export default TaskForm;
