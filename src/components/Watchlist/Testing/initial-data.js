const initialData = {
  tasks: {
    "task-1": { id: "task-1", content: "Task1" },
    "task-2": { id: "task-2", content: "Task2" },
    "task-3": { id: "task-3", content: "Task3" },
    "task-4": { id: "task-4", content: "Task4" }
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "Watchlist",
      taskIds: ["task-1", "task-2", "task-3", "task-4"]
    },
    "column-2": {
      id: "column-2",
      title: "Finished Watching",
      taskIds: []
    }
  },
  columnOrder: ["column-1", "column-2"]
};

export default initialData;
