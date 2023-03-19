<template>
  <div class="collection-container" v-if="uid.toString().length === 0">
    <div class="collection-header">
      <h1>Collection</h1>
      <p>The following are the projects I have participated. Each project has attached technology tags and a screenshot.<br>Some projects can be linked to the source code or Demo page.</p>
    </div>
    <CollectionRow v-for="(collection, key) in collections" :key="`collection-${key}`" :uid="key" :collectionRowData="collection" />
    <div class="blank"></div>
  </div>
  <div class="collection-container" v-else>
    <CollectionArticle :collectionArticleData="collections[uid]" />
    <div class="blank"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CollectionRow from '@/components/CollectionRow.vue'
import CollectionArticle from '@/components/CollectionArticle.vue'

import collections from '@/data/collections.data'

const CollectionPage = defineComponent({
  props: ['uid'],
  components: {
    CollectionRow,
    CollectionArticle
  },
  data () {
    return {
      collections
    }
  }
})

export default CollectionPage
</script>

<style lang="scss">
  .collection-container {
    width: 100%;
    max-width: 960px;
    display: flex;
    flex-direction: column;
    .collection-header {
      margin-bottom: 50px;
      transition: all .25s cubic-bezier(1, 0.5, 0.8, 1);
      animation: .5s 1 normal collection_slideIn_directionTop;
      animation-fill-mode: backwards;
      p {
        line-height: 1.5;
      }
    }
  }
  @media (max-width: 959px) {
    .collection-container {
      padding-top: 100px;
      .collection-header {
        width: 95%;
      }
      .collection-row {
        width: 95%;
        flex-direction: column;
        align-items: center;
        margin: 20px 0 20px;
        &:before {
          border-radius: 0 300px 0 300px;
        }
        .collection-content {
          width: 100%;
          padding-top: 0;
          z-index: 2;
        }
      }
    }
  }

  @keyframes collection_slideIn_directionTop {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes collection_draw_border {
    from {
      border-radius: 0;
    }

    to {
      border-radius: 0 20% 0 20%;
    }
  }
</style>
