<script setup lang="ts">
import { ref } from 'vue';
import { Menu as MenuIcon } from 'lucide-vue-next';

type Props = {
  path: String;
};

const { path } = defineProps<Props>();

const isMenuVisible = ref(false);

const toggleMenu = () => (isMenuVisible.value = !isMenuVisible.value);
</script>

<template>
  <div class="menu-btn" @click="toggleMenu()">
    <MenuIcon />
  </div>
  <div id="nav" :class="isMenuVisible ? 'show' : 'hide'" @click="toggleMenu()">
    <h2>
      <a :class="path === '/' ? 'active' : ''" href="/">About me</a>
      <span>|</span>
      <a :class="path === '/resume' ? 'active' : ''" href="/resume">Resume</a>
      <span>|</span>
      <a :class="path === '/collections' ? 'active' : ''" href="/collections">Collections</a>
    </h2>
  </div>
</template>
