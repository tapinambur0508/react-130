import axios from "axios";

import type { Task, CreateTask, UpdateTask } from "../types/task";

const API = axios.create({
  baseURL: "https://62584f320c918296a49543e7.mockapi.io",
});

export const getTasks = async (): Promise<Task[]> => {
  const { data } = await API.get<Task[]>("/tasks");
  return data;
};

export const createTask = async (payload: CreateTask): Promise<Task> => {
  const { data } = await API.post<Task>("/tasks", payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return data;
};

export const deleteTask = async (taskId: Task["id"]): Promise<void> => {
  await API.delete(`/tasks/${taskId}`);
};

export const updateTask = async ({
  taskId,
  payload,
}: {
  taskId: Task["id"];
  payload: UpdateTask;
}): Promise<Task> => {
  const { data } = await API.put<Task>(`/tasks/${taskId}`, payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return data;
};
