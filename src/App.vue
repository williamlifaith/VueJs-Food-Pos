<template>
  <div id="app">
    <left-nav></left-nav>
    <div class="main">
    <router-view/>
    </div>
  </div>
</template>

<script>
  import leftNav from '@/components/common/leftNav'

  export default {

    components: {
      leftNav
    },

    name: 'app'
  }
</script>

<style>
  #app {
    font-family: 'Microsoft YaHei', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

  }

  .main{
    float:left;
    width:95%;
    background-color: #EFF2F7;
    height:100%;
    overflow: auto;

  }
</style>
