<script setup lang="ts">
import type { GroupItem } from '../../types/item';

type GroupColumnItemProps = {
  item: GroupItem<GroupItem<string>>;
  className: string;
};

const { item, className } = defineProps<GroupColumnItemProps>();

const joinItems = (obj: GroupItem<string>) => {
  if (!obj.items) return '';
  return obj.items.join(', ');
};
</script>

<template>
  <div :class="className">
    <h3>{{ item.name }}</h3>
    <ul>
      <li v-for="(subGroup, idx) in item.items" :key="`skill-${item.name}-${idx}`">
        {{ subGroup.name }}
        <span v-if="subGroup.items && subGroup.joinable">
          : {{ joinItems(subGroup) }}
        </span>
        <ul v-else-if="subGroup.items">
          <li v-for="(subSubGroup, sidx) in subGroup.items" :key="`skill-${item.name}-${idx}-${sidx}`">
            {{ subSubGroup }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<style>
li>span {
  color: #aaa;
}

li>ul {
  color: #aaa;
  font-size: 0.95em;
}
</style>
