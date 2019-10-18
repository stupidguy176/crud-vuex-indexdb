<template>
    <div id="content">
        <div class="content-user-info">
            <h2>User List</h2>
            <a><i @click="navigate('/user/create')" class="fa fa-plus-square-o"></i></a>
        </div>
        <p>Num of user: {{users.length}}</p>
        <p class="alert-creat-user" v-if="users.length < 1">Tap <i @click="navigate('/user/create')" class="fa fa-plus-square-o"></i> to create user</p>
        <div class="user-list" v-for="(item, index) in users" :key="'user-list'+index">
            <p>{{item.first_name}} - {{item.last_name}} - {{item.country}}</p>
            <div class="user-options">
                <a @click="selectUser(item)"><i class="fa fa-pencil"></i></a>
                <a @click="deleteUser(item)"><i class="fa fa-trash-o"></i></a>
            </div>
        </div>
    </div>
</template>

<script>
import DixeService from '@/services/dexie.service';
let db_service = new DixeService()

export default {
  name: 'user',
  components: {
    
  },
  created: function() {
      this.loadUsers()
  },
  methods: {
      navigate(url) {
          this.$store.dispatch('userSelect', null);
          this.$router.push(url);
      },
      deleteUser(user) {
          this.$store.dispatch('deleteUser',user);
      },
      selectUser(user) {
          this.$store.dispatch('userSelect',user);
          this.$router.push('/user/create');
      },
      loadUsers() {
        let store = this.$store;
        db_service.getAllUser()
        .then(function(users) {
            if(!users) return;
            store.dispatch('addUsersToState', users);
        })
        .catch()
      }
  },
  computed:{
      users(){
          return this.$store.state.users;
      }
  },
  watch: {}
}
</script>

<style lang="scss" scoped>
    #content {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: left;
        background: #2c3e50;
        padding: 10px;
        width: calc(100vw - 300px);
        height: 100%;
        .alert-creat-user {
            width: 40vw;
            text-align: center;
            border-top: solid 1px #ffffff;
            padding: 20px;
        }
        .user-list {
            display: flex;
            justify-content: space-between;
            border-top: #ffff solid 1px;
            width: 40vw;
            .user-options {
                display: flex;
                justify-content: space-between;
                align-items: center;
                a {
                    color: #90c5b7;
                    width: 30px;
                    .fa-trash-o {
                        color: red;
                    }
                }
                button{
                    background: white;
                    padding: 0;
                    color: #2c3e50;
                    border-radius: 4px;
                    width: 50px;
                    height: 30px;
                    margin-right: 8px;
                }
            }
        }
        .content-user-info {
            width: 40vw;
            display: flex;
            justify-content: space-between;
            a {
                text-decoration: none;
                font-size: 23px;
                color: antiquewhite;
            }
        }
    }
    button {
        border: none;
        background: rgba(91, 174, 223, 0.933);
        color: #ffffff;
        padding: 10px;
        border-radius: 7px;
        margin-left: 10px;
        margin-bottom: 10px;
        font-size: 18px;
    }
</style>