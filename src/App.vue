<template>
  <div id="app">
    <a name="top"></a>
    <nav id="nav">
      <div class="nav-buttons">
        <router-link to="/" class="nav-links">Home</router-link>
        <router-link to="/categories" class="nav-links">Categories</router-link>
        <router-link to="/random" class="nav-links">Random</router-link>
      </div>
      <span id="headline">The Meal Planner</span>
    </nav>
    <div class="main">
      <div class="buffer"></div>
    <router-view/>
    </div>
    <footer>
      <div>
        <p> Made with ❤️, &#x3C; &#x3E; and ☕ </p>
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
  display: grid;
  grid-template-areas: 
  'navbar'
  'main'
  'footer'; 
}

#nav {
  grid-area: navbar;
  padding: 30px;
  position: fixed;
  top: 0;
  display: grid;
  grid-template-areas:'nav-buttons headline .';
  margin-bottom: 20px; 
  width: 100%;
  background-color: rgba(132, 201, 178, 0.9);
  z-index:99999;
  #headline {
    grid-area: headline;
    color: #2c3e50;
    font-weight: 700;
    font-size: 48px;
    position: relative;
    right: 200px;
  }
  .nav-buttons {
    grid-area: nav-buttons;
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

.buffer{
  padding: 60px;
}

.main {
  grid-area: main;
  margin-bottom: 70px;
}

footer {
  grid-area: footer;
  padding: 30px;
  background-color: rgba(132, 201, 178, 0.9);
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: center;
}

a {
    text-decoration: none;
    color: rgb(63, 63, 63);
}

ul {
    list-style: none;
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
      bottom: 35px;
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

.recipe {
  display: grid;
  grid-template-areas:
    '. title title .'
    'category-ingredients category-ingredients instruction instruction'
    'extra extra extra extra';
}

.title {
  grid-area: title;
  grid-column: 1 / span 4;
  grid-row: 1;
  justify-content: center; 

}

.category-ingredients {
  grid-area: category-ingredients;
  padding: 15px;
  display: grid;
  grid-template-areas:
    'image-category ingredients'
    '. ingredients';
}

.image-category {
  grid-area: image-category;
  padding: 20px;
  img {
    width: 300px;
    height: 350px;
    padding: 10px;
    background-color: rgb(200, 214, 200);
  }
}

.ingredients {
  grid-area: ingredients;
  padding: 10px;
  background-color: rgb(200, 214, 200);
}

.instructions {
  grid-area: instruction;
  padding: 30px;
  justify-content: center;
}

.extra {
  grid-area: extra;
}

</style>
