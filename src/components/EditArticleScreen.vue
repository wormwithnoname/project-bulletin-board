<template>
  <div class="hello">
    <h1>Edit an Article</h1>
    <input type="text" placeholder="Article Title" id="title">
    <input type="text" placeholder="Article Content" id="content">
    <button>UPDATE</button>
  </div>
</template>

<script>
export default {
  name: 'EditArticleScreen',
  props: {
    msg: String
  }
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
