<template>
    <div class="collection-row">
      <div class="collection-preview">
        <img v-if="(collectionRowData as CollectionData).image"
             v-bind:src="(collectionRowData as CollectionData).image" alt="" />
        <div class="no-preview" v-else>
          <i class="fa-solid fa-image"></i>
          <p>No Preview</p>
        </div>
      </div>
      <div class="collection-content">
        <h2>
          <RouterLink :to="`/collection/${uid}`">
            {{ (collectionRowData as CollectionData).title }}
          </RouterLink>
          <br>
          <span>{{ (collectionRowData as CollectionData).subtitle }}</span>
        </h2>
        <div class="collection-tags">
          <span v-for="(tag, i) in (collectionRowData as CollectionData).tags"
                :key="`collection-${i}`"
                class="collection-tag">
                {{ tag }}
          </span>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { CollectionData } from '@/data/collections.data'

const CollectionRow = defineComponent({
  props: {
    uid: String,
    collectionRowData: Object as () => CollectionData
  }
})

export default CollectionRow
</script>

<style lang="scss">
.collection-row {
  border: 1px solid #AAA;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0 10px;
  &:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    margin: -1px;
    background-color: black;
    border: 1px solid black;
    border-radius: 0 20% 0 20%;
    z-index: 0;
    transition: .5s .25s cubic-bezier(1, 0.5, 0.8, 1);
    animation: .5s 1 normal collection_draw_border;
    animation-fill-mode: backwards;
    animation-delay: .5s;
  }
  .collection-preview {
    width: 300px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    z-index: 2;
    transition: .5s .25s cubic-bezier(1, 0.5, 0.8, 1);
    animation: 1s 1 normal collection_img_scale;
    animation-fill-mode: backwards;
    animation-delay: 1s;
    img {
      width: 250px;
      height: 250px;
      object-fit: cover;
      border-radius: 20px;
      border: 1px solid #888;
      cursor: pointer;
    }
  }
  .collection-tags {
    position: relative;
    .collection-tag {
      float: left;
      height: 24px;
      line-height: 24px;
      position: relative;
      font-size: 12px;
      font-weight: 700;
      margin-bottom: 9px;
      margin-left: 20px;
      background: #FFF;
      color: #000;
      border-bottom-right-radius: 4px;
      border-top-right-radius: 4px;
      padding: 0 10px 0;
      &:before {
        content: "";
        float: left;
        position: absolute;
        top: 0;
        left: -12px;
        width: 0;
        height: 0;
        border-color: transparent #FFF transparent transparent;
        border-style: solid;
        border-width: 12px 12px 12px 0;
      }
      &:after {
        content: "";
        position: absolute;
        top: 10px;
        left: 0;
        float: left;
        width: 4px;
        height: 4px;
        border-radius: 2px;
        background: #000;
      }
    }
  }
  .collection-content {
    display: flex;
    flex-direction: column;
    width: calc(100% - 300px);
    padding: 50px;
    z-index: 2;
    transition: .5s .25s cubic-bezier(1, 0.5, 0.8, 1);
    animation: 1s 1 normal collection_slideIn_directionTop;
    animation-fill-mode: backwards;
    animation-delay: 1s;
    h2 > a {
      color: white;
    }
    h2 > span {
      font-size: 0.75em;
      color: #AAA
    }
  }
  .collection-links {
    position: absolute;
    top: -1em;
    right: 1em;
    background-color: black;
    transition: .5s .25s cubic-bezier(1, 0.5, 0.8, 1);
    animation: 1s 1 normal collection_slideIn_directionTop;
    animation-fill-mode: backwards;
    animation-delay: 1s;
    a {
      color: white;
      font-size: 2em;
      padding: 0 .25em 0;
      border-radius: 100%;
    }
  }
}

@keyframes collection_img_scale {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}
</style>
