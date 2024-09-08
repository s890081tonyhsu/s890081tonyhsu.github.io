<script setup lang="ts">
import type { SimpleItem } from '../../types/item';

type HalfColumnItemProps = {
  item: SimpleItem;
};

const { item } = defineProps<HalfColumnItemProps>();
</script>

<template>
  <div class="content-item">
    <h3>{{ item.name }}</h3>
    <p class="stick" v-if="item.link">
      <a :href="item.link">{{ item.text }}</a>
    </p>
    <p class="stick" v-else>{{ item.text }}</p>
  </div>
</template>

<style lang="scss">
.content-item {
  width: 250px;
  float: left;

  &.wide {
    width: 100%;
  }

  h3 {
    line-height: 1.8em;
    color: #ddd;
    text-transform: capitalize;

    span {
      color: #aaa;
      font-size: 0.8em;
    }
  }

  .stick {
    margin-top: -0.75em;
  }

  p,
  a,
  ul {
    color: #888;
  }
}
</style>
