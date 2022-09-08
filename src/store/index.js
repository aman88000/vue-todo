import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    appTitle: process.env.VUE_APP_TITLE,
    searchText: null,
    tasks: [
      {
        id: 1,
        title: 'Wake up',
        done: false,
        dueDate: '2022-09-07'
      },
      {
        id: 2,
        title: 'Go Gym',
        done: false,
        dueDate: '2022-09-08'
      },
      {
        id: 3,
        title: 'Office work',
        done: false,
        dueDate: null
      }
    ],
    snackbar: {
      show: false,
      text: 'testing'
    }
  },
  getters: {
  },
  mutations: {
    setSearchText(state, value) {
      state.searchText = value
    },
    addNewTask(state, newTask) {
      let task = {
        id: Date.now(),
        title: newTask,
        done: false,
        dueDate: null
      }
      state.tasks.push(task)
    },
    doneTask(state, id) {
      const taskItem = state.tasks.filter((task) => task.id === id)[0];
      taskItem.done = !taskItem.done;
    },
    deleteTask(state, id) {
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },
    showSnackBar(state, text) {
      let timeout = 0;
      if (state.snackbar.show) {
        state.snackbar.show = false
        timeout = 300
      }
      setTimeout(() => {
        state.snackbar.text = text
        state.snackbar.show = true
      }, timeout);


    },
    editTask(state, payload) {
      let task = state.tasks.filter(task => task.id === payload.id)[0]
      task.title = payload.text
    },
    dueDateUpdate(state, payload) {
      let task = state.tasks.filter(task => task.id === payload.id)[0]
      task.dueDate = payload.dueDate
    }
  },
  actions: {
    addNewTask({ commit }, newTask) {
      commit('addNewTask', newTask)
      commit('showSnackBar', 'Task added!')
    },
    deleteTask({ commit }, id) {
      commit('deleteTask', id)
      commit('showSnackBar', 'Task deleted!')
    },
    doneTask({ commit }, id) {
      commit('doneTask', id)
      commit('showSnackBar', 'Task selected!')
    },
    editTask({ commit }, payload) {
      commit('editTask', payload)
      commit('showSnackBar', 'Task updated!')
    },
    dueDateUpdate({ commit }, payload) {
      commit('dueDateUpdate', payload)
      commit('showSnackBar', 'Due Date updated!')
    }
  },
  getters: {
    filterSearchTasks(state) {
      if (!state.searchText) {
        return state.tasks
      }
      return state.tasks.filter(task => task.title.toLowerCase().includes(state.searchText.toLowerCase()))

    }

  },
  modules: {
  }
})
