<script setup lang="ts">
import { Calendar } from 'lucide-vue-next';
import type { DateRangeItem } from '../../types/item';

type FullColumnItemProps = {
  item: DateRangeItem;
};

const { item } = defineProps<FullColumnItemProps>();
</script>

<template>
  <div class="content-item wide">
    <h3>
      {{ item.name }}
      <span class="suffix" v-if="item.suffix">as {{ item.suffix }}</span>
    </h3>
    <p class="description">{{ item.text }}</p>
    <h4 class="time">
      <Calendar :size="32" />{{ item.time.from }} - {{ item.time.to }}
    </h4>
  </div>
</template>

<style lang="scss">
.content-item {
  &.wide {
    width: 100%;
  }

  .description {
    margin: 0;
  }

  .time {
    color: #aaa;
    font-size: 1em;
    font-weight: 600;
    display: inline-flex;
    align-items: center;

    svg {
      padding-right: 0.5em;
    }
  }

  .suffix {
    svg {
      padding-right: 0.5em;
    }
  }
}
</style>
