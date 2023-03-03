<template>
    <div class="porfolio-row">
      <div class="porfolio-preview">
        <img v-bind:src="porfolioRowData.image" alt="" v-if="porfolioRowData.image" @click="() => focusCallback(porfolioIdx)" />
        <div class="no-preview" v-else>
          <i class="fa-solid fa-image"></i>
          <p>No Preview</p>
        </div>
      </div>
      <div class="porfolio-content">
        <h2>{{ porfolioRowData.title }}</h2>
        <div class="porfolio-tags">
          <span class="porfolio-tag" v-for="(tag, i) in porfolioRowData.tags" :key="`porfolio-${i}`">{{ tag }}</span>
        </div>
        <p>{{ porfolioRowData.description }}</p>
        <div class="porfolio-links" v-if="porfolioRowData.links">
          <a v-if="porfolioRowData.links.project" v-bind:href="porfolioRowData.links.project" target="_blank"><i class="fa-solid fa-code"></i></a>
          <a v-if="porfolioRowData.links.demo" v-bind:href="porfolioRowData.links.demo" target="_blank"><i class="fa-solid fa-globe"></i></a>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface PorfolioRowData {
  image: string,
  title: string,
  description: string,
  tags: {
    [index: number]: string
  },
  links?: {
    project: string,
    demo: string
  }
}

const PorfolioRow = defineComponent({
  props: {
    porfolioIdx: Number,
    porfolioRowData: Object as () => PorfolioRowData,
    focusCallback: Function
  }
})

export default PorfolioRow
</script>

<style lang="scss">
.porfolio-row {
  border: 1px solid #AAA;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: top;
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
    animation: .5s 1 normal porfolio_draw_border;
    animation-fill-mode: backwards;
    animation-delay: .5s;
  }
  .porfolio-preview {
    width: 300px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    z-index: 2;
    transition: .5s .25s cubic-bezier(1, 0.5, 0.8, 1);
    animation: 1s 1 normal porfolio_img_scale;
    animation-fill-mode: backwards;
    animation-delay: 1s;
    img {
      width: 250px;
      height: 250px;
      object-fit: cover;
      border-radius: 20px;
      cursor: pointer;
    }
  }
  .porfolio-tags {
    position: relative;
    .porfolio-tag {
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
  .porfolio-content {
    display: flex;
    flex-direction: column;
    width: calc(100% - 300px);
    padding: 50px;
    z-index: 2;
    transition: .5s .25s cubic-bezier(1, 0.5, 0.8, 1);
    animation: 1s 1 normal porfolio_slideIn_directionTop;
    animation-fill-mode: backwards;
    animation-delay: 1s;
  }
  .porfolio-links {
    position: absolute;
    top: -1em;
    right: 1em;
    background-color: black;
    transition: .5s .25s cubic-bezier(1, 0.5, 0.8, 1);
    animation: 1s 1 normal porfolio_slideIn_directionTop;
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

@keyframes porfolio_img_scale {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}
</style>
