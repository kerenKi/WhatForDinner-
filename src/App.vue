<template>
  <div id="app">
    <nav id="nav">
      <router-link to="/" class="nav-links">Home</router-link> |
      <router-link to="/categories" class="nav-links">Categories</router-link> |
      <router-link to="/random" class="nav-links">Random</router-link>
      <h1>The Meal Planner</h1>
    </nav>
    <router-view/>
    <footer>
      <div class="container">
        <p>here we ganerate map site later</p>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  margin-bottom: 20px; 
  width: 100%;
  background-color: rgba(132, 201, 178, 0.639);
  a {
    font-weight: bold;
    text-decoration: none;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
  a:hover {
    color: white;
  }  
}

footer {
  padding: 30px;
  background-color: rgba(132, 201, 178, 0.639);

}
</style>
