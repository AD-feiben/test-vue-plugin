<template>
  <div id="app">
    <h1>Vue Plugin Demo</h1>
    <ul>
      <li class="button" @click="showToast('top')">top</li>
      <li class="button" @click="showToast('middle')">middle</li>
      <li class="button" @click="showToast('bottom')">bottom</li>
      <li class="button" @click="showToast()">default</li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    showToast (type) {
      if (type) {
        this.$toast[type](`${type} clicked`)
      } else {
        this.$toast('default clicked')
      }
    }
  }
}
</script>

<style>
html,body{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  text-align: center;
}

ul {
  padding: 0;
  list-style: none;
}

.button{
  display: inline-block;
  width: 70px;
  margin: 8px;
  line-height: 40px;
  border-radius: 5px;
  color: #fff;
  background-color: #008cff;
  cursor: pointer;
  transition: all .5s;
}
.button:hover{
  background-color: #0070ff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, .5);
}
</style>
