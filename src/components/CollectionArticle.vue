<script setup lang="ts">
import { MDXProvider } from '@mdx-js/vue';
import type { CollectionData } from '../types/collection';

type CollectionArticleProps = {
  data: CollectionData;
};

const { data } = defineProps<CollectionArticleProps>();
</script>

<template>
  <div class="collection-display">
    <UnLazyImage
      v-if="data.image"
      :blurhash="data.image.blurhash"
      :src="data.image.default"
      :alt="data.title"
      width="250px"
      height="250px"
    />
    <div v-else class="no-preview">
      <Image />
      <p>No Preview</p>
    </div>
    <MDXProvider>
      <component :is="data.article?.default" />
    </MDXProvider>
    <ul>
      <li v-if="data.projectLink" class="collection-links">
        Source Code:
        <a :href="data.projectLink" target="_blank">
          {{ data.projectLink }}
        </a>
      </li>
      <li v-if="data.demoLink" class="collection-links">
        Demo:
        <a :href="data.demoLink" target="_blank">
          {{ data.demoLink }}
        </a>
      </li>
    </ul>
    <h4>
      <RouterLink :to="`/collection`">Back</RouterLink>
    </h4>
  </div>
</template>

<style lang="scss">
.collection-display {
  max-width: 960px;
  line-height: 2.25rem;
  /* position: fixed;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 999;*/
  background: rgba(0, 0, 0, 0.65);
  transition: all 0.25s cubic-bezier(1, 0.5, 0.8, 1);
  animation: 0.5s 1 normal collection_slideIn_directionTop;
  animation-fill-mode: backwards;

  img {
    width: 95%;
    height: auto;
    object-fit: contain;
  }

  h1 {
    font-size: 3rem;
    line-height: 3.5rem;
  }

  a {
    color: #aaa;
  }
}
</style>
