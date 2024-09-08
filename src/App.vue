<script setup>
import { ref } from 'vue';
import { Menu } from 'lucide-vue-next';

const isMenuVisible = ref(false);

const toggleMenu = () => (isMenuVisible.value = !isMenuVisible.value);
</script>

<template>
  <div class="menu-btn" @click="toggleMenu()">
    <Menu />
  </div>
  <div class="container">
    <router-view />
  </div>
  <div id="nav" :class="isMenuVisible ? 'show' : 'hide'" @click="toggleMenu()">
    <h2>
      <router-link to="/">About me</router-link>
      <span>|</span>
      <router-link to="/resume">Resume</router-link>
      <span>|</span>
      <router-link to="/collection">Collection</router-link>
    </h2>
  </div>
</template>

<style lang="scss">
@import './assets/scss/animations.scss';

* {
  box-sizing: border-box;
}

body {
  background-color: black;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.25rem;
}

.container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.menu-btn {
  display: none;
  position: fixed;
  top: 0.5em;
  left: 0.5em;
  background-color: black;
  padding: 0.25em;
  cursor: pointer;
  z-index: 99;
}

#nav {
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), black 50%);
  z-index: 99;
  pointer-events: none;

  h2 {
    display: flex;
    justify-content: space-around;
    align-items: center;
    pointer-events: auto;

    span {
      font-size: 0.8em;
      margin: 0 20px 0;
    }
  }

  a {
    color: white;
    text-decoration: none;
    display: flex;
    position: relative;

    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 0%;
      height: 3px;
      background-color: white;
      transition: all 0.25s ease-in-out;
    }

    &.router-link-exact-active:after {
      left: 0%;
      width: 100%;
    }
  }
}

@media (max-width: 959px) {
  .menu-btn {
    display: block;
    text-align: left;
    font-size: 2em;
  }

  #nav {
    bottom: 0;
    top: 0;
    width: 100%;
    height: 0%;
    opacity: 0;
    overflow-y: hidden;
    background: rgba(0, 0, 0, 0.65);
    flex-direction: column;
    transition: opacity 0.5s ease-in-out;
    pointer-events: auto;

    &.show {
      height: 100%;
      opacity: 1;
    }

    h2 {
      width: 100%;
      height: auto;
      flex-direction: column;

      a {
        margin: 0.5em 0 0.5em;
      }

      span {
        display: none;
      }
    }
  }
}

h1 span {
  font-size: 0.75em;
  color: #aaa;
}

.blank {
  height: 100px;
}
</style>
