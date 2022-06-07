<template>
  <div class="hello">
    <h1>top screen</h1>
    <button  v:on-click="changeRoute('create-article')">Create New Article</button>
    <button>Edit Article</button>
    <button>Delete Article</button>
  </div>
</template>

<script>
// import router from './router/index.js';
export default { 
  name: 'TopScreen',
  props: {
    msg: String
  },
//   methods:{
//     changeRoute(route){
//     router.push(route);
//     },
//   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
