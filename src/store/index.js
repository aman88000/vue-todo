import Vue from 'vue'
import Vuex from 'vuex'
import Localbase from 'localbase'

let db = new Localbase('db')

db.config.debug = false
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    appTitle: process.env.VUE_APP_TITLE,
    searchText: null,
    tasks: [
      // {
      //   id: 1,
      //   title: 'Wake up',
      //   done: false,
      //   dueDate: '2022-09-07'
      // },
      // {
      //   id: 2,
      //   title: 'Go Gym',
      //   done: false,
      //   dueDate: '2022-09-08'
      // },
      // {
      //   id: 3,
      //   title: 'Office work',
      //   done: false,
      //   dueDate: null
      // }
    ],
    snackbar: {
      show: false,
      text: 'testing'
    },
    sorting: false
  },
  mutations: {
    setSearchText(state, value) {
      state.searchText = value
    },
    addNewTask(state, newTask) {
      state.tasks.push(newTask)
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
    },
    toggleSort(state) {
      state.sorting = !state.sorting
    },
    setList(state, tasks) {
      state.tasks = tasks
    }
  },
  actions: {
    addNewTask({ commit }, newTask) {
      let task = {
        id: Date.now(),
        title: newTask,
        done: false,
        dueDate: null
      }
      db.collection('tasks').add(task)
        .then(() => {
          commit('addNewTask', task)
          commit('showSnackBar', 'Task added!')
        })

    },
    deleteTask({ commit }, id) {
      db.collection('tasks').doc({ id: id }).delete().then(() => {
        commit('deleteTask', id)
        commit('showSnackBar', 'Task deleted!')
      })


    },
    doneTask({ state, commit }, id) {
      let task = state.tasks.filter(task => task.id === id)[0]
      db.collection('tasks').doc({ id: id }).update({
        done: !task.done
      }).then(() => {
        commit('doneTask', id)
      })

    },
    editTask({ commit }, payload) {
      db.collection('tasks').doc({ id: payload.id }).update({
        title: payload.text
      }).then(() => {
        commit('editTask', payload)
        commit('showSnackBar', 'Task updated!')
      })


    },
    dueDateUpdate({ commit }, payload) {

      db.collection('tasks').doc({ id: payload.id }).update({
        dueDate: payload.dueDate
      }).then(() => {
        commit('dueDateUpdate', payload)
        commit('showSnackBar', 'Due Date updated!')
      })


    },
    getTasks({ commit }) {
      db.collection('tasks').get().then(tasks => {
        commit('setList', tasks)
      })
    },
    setList({ commit }, tasks) {
      commit('setList', tasks)
      db.collection('tasks').set(tasks)
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
