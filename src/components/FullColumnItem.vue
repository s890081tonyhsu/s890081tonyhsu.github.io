<template>
  <div class="content-item wide">
    <h3>
      {{ itemData.name }} <span class="suffix" v-if="itemData.suffix">as {{ itemData.suffix }}</span>
      <br>
      <span class="time">
        <i class="fa-solid fa-calendar"></i>
        {{ itemData.time.from }} - {{ itemData.time.to }}
      </span>
    </h3>
    <p class="indent">
      <i class="fa-solid fa-chevron-right"></i>&nbsp;&nbsp;&nbsp;
      {{ itemData.text }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface FullColumnItemData {
  name: string,
  suffix?: string,
  text: string,
  link?: string,
  time: {
    from: string,
    to: string
  }
}

const FullColumnItem = defineComponent({
  props: {
    itemData: Object as () => FullColumnItemData
  }
})

export default FullColumnItem
</script>

<style lang="scss">
.content-item {
  &.wide {
    width: 100%;
  }
  .indent {
    padding-left: 2em;
    text-indent: -2em;
  }
  .time {
    color: #AAA;
    font-size: 1em;
    font-weight: 600;
    svg {
        padding-right: .5em;
    }
  }
  .suffix {
    svg {
      padding-right: .5em;
    }
  }
}
</style>
