<template>
    <div class="collection-display">
      <img :src="(collectionArticleData as CollectionData).image" alt=""  />
      <vue-markdown :source="article" />
      <ul>
        <li v-if="(collectionArticleData as CollectionData).projectLink"
            class="collection-links">
          Source Code:
          <a v-bind:href="(collectionArticleData as CollectionData).projectLink"
             target="_blank">
              {{ (collectionArticleData as CollectionData).projectLink }}
          </a>
        </li>
        <li v-if="(collectionArticleData as CollectionData).demoLink"
            class="collection-links">
              Demo:
              <a v-bind:href="(collectionArticleData as CollectionData).demoLink"
                 target="_blank">
                  {{ (collectionArticleData as CollectionData).demoLink }}
              </a>
        </li>
      </ul>
      <h4>
        <RouterLink :to="`/collection`">Back</RouterLink>
      </h4>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import VueMarkdown from 'vue-markdown-render'
import type { CollectionData } from '@/data/collections.data'

const CollectionArticle = defineComponent({
  props: {
    collectionArticleData: Object as () => CollectionData
  },
  components: {
    VueMarkdown
  },
  data: () => {
    return {
      article: ''
    }
  },
  mounted: async function () {
    const url = (this.collectionArticleData as CollectionData).article || ''
    if (url.length === 0) return
    await fetch(url).then(response => response.text()).then(text => {
      this.article = text
    })
  }
})

export default CollectionArticle
</script>

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
  transition: all .25s cubic-bezier(1, 0.5, 0.8, 1);
  animation: .5s 1 normal collection_slideIn_directionTop;
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
    color: #AAA;
  }
}
</style>
