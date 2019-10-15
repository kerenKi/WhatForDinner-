<template>
  <div id="app">
    <nav id="nav">
      <router-link to="/" class="nav-links">Home</router-link>
      <router-link to="/categories" class="nav-links">Categories</router-link>
      <router-link to="/random" class="nav-links">Random</router-link>
      <span id="headline">The Meal Planner</span>
    </nav>
    <div class="main">
    <router-view/>
    </div>
    <footer>
      <div >
        <p>Made with ❤️, &#x3C; &#x3E; and ☕ </p>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Fira+Sans+Condensed&display=swap');
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  position: fixed;
  top: 0;
  margin-bottom: 20px; 
  width: 100%;
  background-color: rgba(132, 201, 178, 0.9);
  #headline {
    color: #2c3e50;
    font-weight: 700;
    font-size: 48px;
    position: relative;
    right: 160px;
  }
  a {
    float: left;
    display: block;
    font-weight: bold;
    font-size: 20px;
    text-decoration: none;
    padding: 15px;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
  a:hover {
    color: white;
  }  
}
.main {
  margin-top: 150px;
  margin-bottom: 150px;
}

footer {
  padding: 30px;
  background-color: rgba(132, 201, 178, 0.9);
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: center;

}

.cards-container {
  padding-left: 40px;
}

img {
    width: 100%;
    height: 120px;
    border-radius: 3px;
    position: relative;
    bottom: 17px;
  }

.card {
    transition: all .4s cubic-bezier(0.175, 0.885, 0, 1);
    background-color: rgba(188, 254, 232, 0.783);
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0px 13px 10px -7px rgba(0, 0, 0,0.1);
    width: 200px;
    height: 200px;
    display: flex;
    float: left;
    display: -webkit-flex;
    justify-content: center;
    -webkit-justify-content: center;
    margin: 20px;
    h4 {
      padding: 10px;
      position: relative;
      bottom: 20px;
      font-family: 'Fira Sans Condensed', sans-serif;
    }
}

.card:hover {
  box-shadow: 0px 30px 18px -8px rgba(0, 0, 0,0.1);
    transform: scale(1.10, 1.10);
}

.card:hover {
    height: 200px;;
    opacity: 0.3;
    background-color: transparent;
    position: relative;
    opacity: 1;
    cursor: pointer;
}

</style>
