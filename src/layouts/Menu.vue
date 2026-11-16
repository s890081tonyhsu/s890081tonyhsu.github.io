<script setup lang="ts">
import { ref } from 'vue';
import { Menu as MenuIcon } from 'lucide-vue-next';

type Props = {
  path: string;
};

const { path } = defineProps<Props>();

const isMenuVisible = ref(false);

const toggleMenu = () => (isMenuVisible.value = !isMenuVisible.value);
</script>

<template>
  <button
    type="button"
    class="menu-btn"
    aria-label="Toggle navigation"
    aria-controls="nav"
    :aria-expanded="isMenuVisible"
    @click="toggleMenu()"
  >
    <MenuIcon :size="28" aria-hidden="true" />
  </button>
  <nav id="nav" :class="isMenuVisible ? 'show' : 'hide'" @click="toggleMenu()">
    <h2>
      <a :class="path === '/' ? 'active' : ''" href="/">About me</a>
      <span>|</span>
      <a :class="path === '/resume' ? 'active' : ''" href="/resume">Resume</a>
      <span>|</span>
      <a :class="path === '/collections' ? 'active' : ''" href="/collections">Collections</a>
    </h2>
  </nav>
</template>
