<template>
    <div class="content-item">
        <h3>{{ (itemData as BasicItem).name }}</h3>
        <p class="stick" v-if="(itemData as BasicItem).link">
          <a v-bind:href="(itemData as BasicItem).link">
            {{ (itemData as BasicItem).text }}
          </a>
        </p>
        <p class="stick" v-else>{{ (itemData as BasicItem).text }}</p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { BasicItem } from '@/data/resume.data'

const HalfColumnItem = defineComponent({
  props: {
    itemData: Object as () => BasicItem
  }
})

export default HalfColumnItem
</script>

<style lang="scss">
.content-item {
  width: 250px;
  float: left;
  &.wide {
    width: 100%;
  }
  h3 {
    line-height: 1.8em;
    color: #DDD;
    text-transform: capitalize;
    span {
      color: #AAA;
      font-size: 0.8em;
    }
  }
  .stick {
    margin-top: -0.75em;
  }
  p, a, ul {
    color: #888;
  }
}
</style>
