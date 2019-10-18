<template>
  <div id="app-default">
    <aside>
        <ul>
            <li @click="onGo()"><span><i class="fa fa-chevron-left" aria-hidden="true"></i></span><span></span></li>
            <li @click="navigate('/')"><span>Welcome</span><span></span></li>
            <li @click="navigate('/user')"><span>Home</span><span></span></li>
            <li @click="navigate('/user')"><span>User</span><span></span></li>
            <li @click="navigate('/balloon')"><span>Smart Dump</span><span></span></li>
            <!-- <li @click="navigate('/journal')"><span>Journal</span><span></span></li> -->
        </ul>
    </aside>
    <div class="app-default-content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'header-1',
  components: {
    
  },
  methods: {
      navigate(url) {
        this.$router.push(url);
      },
      onGo() {
        this.$router.go(-1);
      }
  }
}
</script>

<style lang="scss" scoped>
#app-default {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #4CAF50;
  background: #2c3e50;
  display: flex;
  height: 100vh;
  width: 100vw;
  &-content {
    width: calc(100vw - 300px);
  }
}
#app-default .title {
  color: #ffffff;
  background: #8a8248;
}
/*ADD THEME */
body {
    width:100%;
    height:100%;
    margin:0;
    padding:0;
    font-family:'Roboto slab', serif;
    position:absolute;
    background:#ff0000;
}

ul li, ul li span:last-child {
    transition:all 500ms;
}
aside {
    width:300px;
    background:#111;
    height:100%;
    // Position:fixed;
    top:0;
    left:0;
    bottom:0;
}
ul {
    margin:0;
    padding:0;
    counter-reset:li;
}
ul li {
    list-style:none;
    border-bottom:1px solid #222;
    height:52px;
    color:#666;
    position:relative;
    overflow:hidden;
}
ul li:hover {
    color:#fff;
    cursor:pointer;
}
ul li span {
    display:block;
    padding:15px;
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
}
ul li span:first-child:before {
    /* content:"Prakash."counter(li)""; */
    counter-increment:li;
}
ul li span:first-child {
    z-index:2;
}
ul li span:last-child {
    padding:0;
    display:block;
    background:#ff6600;
    z-index:1;
    position:absolute;
    top:0;
    left:-300px;
    bottom:0;
    width:300px;
    height:52px;
}
ul li:hover > span:last-child {
    left:0;
}
</style>
