<template>
  <div id="app">
    <i-layout>
      <i-layout-header>
        <Header></Header>
        <NavBar></NavBar>
      </i-layout-header>

      <i-layout vertical>
        <i-layout-content>
          <router-view></router-view>
        </i-layout-content>
      </i-layout>

      <i-layout-footer>
        Just for fun!
      </i-layout-footer>
    </i-layout>
  </div>
</template>

<script>
    import Vue from 'vue';
    import '@inkline/inkline/dist/inkline.css';
    import Inkline from '@inkline/inkline';

    Vue.use(Inkline);

    import Header from "./components/Header";
    import NavBar from "./components/NavBar";


    export default {
        name: 'app',
        components: {
            NavBar,
            Header

        }
    }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .layout-content {
    min-height: 65vh;
  }
</style>
