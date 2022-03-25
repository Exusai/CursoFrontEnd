<template>
  <div align="left" id="nav">
    <router-link to="/">
      <img class="logo" src="@/assets/icon.png" alt="logo" height="30">
       SpaceBake 
    </router-link>  
    <router-link :to="{ name: 'Pedido'}">Pedido</router-link>   
    <router-link to="/pastelero">Pastelero</router-link>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  /* margin-left: 10px;
  margin-right: 10px; */
}

body{
  margin: 0;
  background: #eee;
}

#nav {
  /* padding: 0; */
  /* align-items: center; */
  /* justify-content: center; */
  padding-left: 10px;
  padding-bottom: 15px;
}

#nav a {
  font-weight: lighter;
  color: #2c3e50;
  text-decoration: none;
  font-size: 15px;
  padding: 10px;
  border-radius: 4px;
}

#nav a.router-link-exact-active {
  color: rgb(0, 0, 0);
  /* font-weight: bold; */
  background: rgba(61, 61, 61, 0.13);
}

img.logo{
  position: relative;
  /* Adjust these values accordingly */
  top: 8px;
  left: 0px;
}

::-webkit-scrollbar {
  width: 0px;
  background: transparent; /* make scrollbar transparent */
}
</style>
