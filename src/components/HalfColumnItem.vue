<template>
    <div class="content-item">
        <h3>{{ itemData.name }}</h3>
        <p class="stick" v-if="itemData.link"><a v-bind:href="itemData.link">{{ itemData.text }}</a></p>
        <p class="stick" v-else>{{ itemData.text }}</p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface HalfColumnItemData {
  name: string,
  text: string,
  link?: string
}

const HalfColumnItem = defineComponent({
  props: {
    itemData: Object as () => HalfColumnItemData
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
