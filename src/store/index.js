import Vue from 'vue'
import Vuex from 'vuex'

import DixeService from '@/services/dexie.service';

let db_service = new DixeService()

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    userSelected: null,
    isInternetConnection: {
      status: true,
      text: 'Online'
    }
  },
  mutations: {
    create_user(state, payload) {
      state.userSelected = null;
      payload.id = db_service.generateUserId();
      db_service.insertUser(payload)
        .then(function (res) {
          if (!res) { return; }
          const isUser = state.users.find(item => item.id == res.id);
          if (!isUser) {
            state.users.push(payload);
          }
        })
        .catch(function (err) {
          console.log('store insert error: ', err);
        })
    },
    delete_user(state, id) {
      if (id > -1) {
        let users = state.users.filter(item => item.id != id)
        users.map(function(item, index) {
          item.id = index;
        })
        state.users = users;

        db_service.deleteUser(id)
          .then(function (res) {
            console.log('deleted: ', res)
          })
          .catch(function (err) {
            console.log('delete error: ', err)
          })

      }
    },
    edit_user(state, payload) {
      db_service.insertOrUpdateUser(payload)
      .then(function(res) {
        console.log('updated: ', res);
        state.users.map(function (item, index) {
          if (item.id === payload.id) {
            item.first_name = payload.first_name;
            item.last_name = payload.last_name;
            item.country = payload.country;
          }
        })
      })
      .catch(function(error) {
        console.log('update error', error);
      })
    },
    user_selected(state, payload) {
      if (payload && payload.first_name) {
        let user = state.users.find(user => user.id == payload.id);
        state.userSelected = user;
      } else {
        state.userSelected = null;
      }
    },
    add_users_to_state(state, payload) {
      state.users = payload;
    },
    update_internet_status(state, payload) {
      state.isInternetConnection = payload;
    }
  },
  actions: {
    createUser({ commit }, payload) {
      commit('create_user', payload);
    },
    deleteUser({ commit }, payload) {
      commit('delete_user', payload.id);
    },
    editUser({ commit }, payload) {
      commit('edit_user', payload);
    },
    userSelect({ commit }, payload) {
      commit('user_selected', payload);
    },
    addUsersToState({ commit }, payload) {
      commit('add_users_to_state', payload);
    },
    updateInternetStatus({ commit }, payload) {
      commit('update_internet_status', payload);
    }
  },
  getters: {
    gt_internet_status: state => {
      return state.isInternetConnection
    }
  },
  modules: {
  }
})
