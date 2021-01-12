import { configureStore, createSlice } from "@reduxjs/toolkit";
const initialData = [
  { id: "1", title: "Something", state: "TASK_INBOX" },
  { id: "2", title: "Something more", state: "TASK_INBOX" },
  { id: "3", title: "Something else", state: "TASK_INBOX" },
  { id: "4", title: "Something again", state: "TASK_INBOX" },
];
const allTasksSlice = createSlice({
  name: "allTasks",
  initialState: initialData,
  reducers: {
    addTask: (state: any, action) => {
      let obj = {
        title: action.payload,
        id: Math.floor(Math.random() * 100),
        state: "TASK_INBOX",
      };
      return (state = [...state, obj]);
    },
    archiveTask: (state: any, action) => {
      return state.map((task: any) =>
        task.id === action.payload ? { ...task, state: "TASK_ARCHIVED" } : task
      );
    },
    pinTask: (state, action) => {
      console.log("Pinned");
      return state.map((task) =>
        task.id === action.payload ? { ...task, state: "TASK_PINNED" } : task
      );
    },
  },
});
const store = configureStore({
  reducer: allTasksSlice.reducer,
});
export default store;
export const { archiveTask, pinTask, addTask } = allTasksSlice.actions;
export { allTasksSlice };
