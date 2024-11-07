import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    tasks: [],
    user: {
      email: "anonymous@mail.com",
      role: "user",
      rating: 10,
    },
  },
  mutations: {
    setTasks(
      state: {
        tasks: any[];
        user: { email: string; role: string; rating: number };
      },
      tasks: any[]
    ) {
      state.tasks = tasks;
    },
  },
  actions: {
    async fetchTasks({ commit }: { commit: Function }) {
      const response = await axios.get("http://localhost:3000/api/tasks");
      commit("setTasks", response.data);
    },
  },
  modules: {},
});
