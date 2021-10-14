<template>
  <router-view/>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/works">Works</router-link> |
    <router-link to="/about">About</router-link>
  </div>
</template>

<style lang="scss">
body {
  background-color: black;
  background-image: url('./assets/background.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center top;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

#nav {
  overflow: hidden;
  width: 100vw;
  padding: 2em;
  background: rgba(0, 0, 0, 0.65);
  box-shadow: 0 1px 1rem rgba(10, 10, 25, 0.3);

  a {
    font-weight: bold;
    color: white;

    &.router-link-exact-active {
      color: lighten(#42b983, 40%);
    }
  }
}
</style>
