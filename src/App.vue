<template>
  <div id="app">
    <TopScreen/>
    <CreateArticleScreen/>
    <EditArticleScreen/>
    <ArticleDetailScreen/>
  </div>
</template>

<script>
import TopScreen from './components/TopScreen.vue';
import CreateArticleScreen from './components/CreateArticleScreen.vue';
import EditArticleScreen from './components/EditArticleScreen.vue';
import ArticleDetailScreen from './components/ArticleDetailScreen.vue';

export default {
  name: 'App',
  components: {
    TopScreen,
    CreateArticleScreen,
    EditArticleScreen,
    ArticleDetailScreen
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
