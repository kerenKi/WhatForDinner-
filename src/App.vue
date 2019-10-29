<template>
  <div id="app">
    <a name="top"></a>
    <nav id="nav">
      <span id="headline">The Meal Planner</span>

      <div class="nav-buttons">
        <router-link  to="/" class="nav-links">Home</router-link>
        <router-link  to="/categories" class="nav-links">Categories</router-link>
        <router-link  to="/random" class="nav-links">Random</router-link>
      </div>
    </nav>

    <div class="main">
      <router-view/>
    </div>
    <footer>
      <div>
        <div class="first-list">
          <ul>
            <li><router-link  to="/" class="footer-links">Home</router-link></li>
            <li><router-link  to="/about" class="footer-links">About</router-link></li>
            <li><router-link  to="/contact" class="footer-links">Contact</router-link></li>
          </ul>
        </div>
        <div class="second-list">
          <ul>
            <li><router-link  to="/categories" class="footer-links">Meals categories</router-link></li>
            <li><router-link  to="/random" class="footer-links">Get a random recipe</router-link></li>
          </ul>
        </div>
        <span> Made with ❤️, &#x3C; &#x3E; and ☕ </span>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Fira+Sans+Condensed&display=swap');

#app {
  width: 100%;
  height: auto;
  margin:auto;
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
  padding: 1.5%;
  display: grid;
  grid-template-areas:'nav-buttons headline .';
  width: 100%;
  background-color: rgba(132, 201, 178, 0.9);
  z-index:99999;
  #headline {
    grid-area: headline;
    max-width: 70%;
    color: #2c3e50;
    font-weight: 700;
    font-size: 48px;
    margin-left: 90px;
    position: relative;
    right: 200px;
  }
  .nav-buttons {
    grid-area: nav-buttons;
    width: 70%;
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
  width: 100%;
  grid-area: main;
  margin-top: 20px;
  margin-bottom: 70px;
}

footer {
  grid-area: footer;
  margin: auto;
  padding: 30px;
  background-color: rgba(132, 201, 178, 0.9);
  text-align: center;
  width: 100%;
  .first-list {
    width:10%;
    display: flex;
    float: left;
    justify-content: left;
  
  }
  .second-list {
    width:25%;
    display: flex;
    float: left;
  }
  span {
    display: flex;
    float: right;
    margin:50px;
  }
  .footer-links {
    font-size: 20px;
    font-weight: 400;
    margin: 10px;
    display: block;
  }
  .footer-links:hover {
    color: white;
  }
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
    height: 200px;;
    opacity: 0.3;
    background-color: transparent;
    position: relative;
    opacity: 1;
    cursor: pointer;
    box-shadow: 0px 30px 18px -8px rgba(0, 0, 0,0.1);
    transform: scale(1.10, 1.10);
}

.recipe {
  width:100%;
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
  ul {
    justify-content: left;
    padding-right: 35px;
  }
}

.instructions {
  grid-area: instruction;
  padding: 30px;
  justify-content: center;
}

.extra {
  grid-area: extra;
  margin: auto;
  width: 60%;
}

/* Media Queries */

/* Tablets */
@media screen and (max-width: 770px) {
  #nav {
    #headline {
      width: 100%;
      margin: 10px auto 0;
      font-size: 35px;
      
    }
    .nav-buttons {
      width:40%;
    }
    a {
      display: inline;
      font-size: 16px;
    }
  }

  .main {
    margin-top: 20px;
  }
  .recipe {
    width:100%;
  }
  .extra {
    width: 100%;
  }

  footer {
    .first-list {
    width:30%;
    }
    .second-list {
      margin-left: 15px;
      width:30%;
    }
    span {
      margin: auto;
      width: 50%;
      display: block;
      position: relative;
      right: 20%;
    }
  }

}

/* Mobiles */
@media screen and (max-width: 480px) {
  #nav {
    #headline {
      width: 80%;
      padding: 0.5%;
      margin: 30px 0px 0 200px;
      font-size: 35px;
      
    }
    .nav-buttons {
      width:40%;
    }
    a {
      display: inline;
      font-size: 16px;
    }
  }
  .recipe {
    width:100%;
    display: inline;
    padding:1%;
  }

  .category-ingredients {
    display: inline;
  }

  .extra {
    width: 66%;
    
  }

  footer {
  .second-list {
    margin-left: 15px;
  }
  span {
    margin:70px;
  }
  }
}
</style>
