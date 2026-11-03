export interface Task {
  id: string;
  text: string;
  completed: boolean;
  createdAt: number;
}

export interface CreateTask {
  text: string;
}

export interface UpdateTask {
  completed: boolean;
}
