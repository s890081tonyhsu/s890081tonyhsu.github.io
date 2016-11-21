<script>
  export default {
    name: "Navbar"
  }
</script>

<template>
  <nav id="bt-menu" class="bt-menu">
    <a class="bt-menu-trigger"><span>Menu</span></a>
    <ul>
      <li><a href="#!/home" class="bt-icon">Home</a></li>
      <li><a href="#!/about" class="bt-icon">About</a></li>
      <li><a href="?page=works" class="bt-icon">Works</a></li>
      <li><a href="?page=wiki" class="bt-icon">Wiki</a></li>
      <li><a href="?page=tumblr" class="bt-icon">Tumblr</a></li>
    </ul>
  </nav>
</template>
