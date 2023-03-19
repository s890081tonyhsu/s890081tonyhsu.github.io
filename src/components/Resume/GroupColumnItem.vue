<template>
  <h3>{{ (itemData as GroupItem<GroupItem<string>>).name }}</h3>
  <ul>
    <li v-for="(subGroup, idx) in (itemData as GroupItem<GroupItem<string>>).items"
        :key="`skill-${(itemData as GroupItem<GroupItem<string>>).name}-${idx}`">
          {{ (subGroup as GroupItem<string>).name }}
          <span v-if="(subGroup as GroupItem<string>).items">
            : {{ joinItems(subGroup as GroupItem<string>) }}
          </span>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { GroupItem } from '@/data/resume.data'

const GroupColumnItem = defineComponent({
  props: {
    itemData: Object as () => GroupItem<GroupItem<string>>
  },
  methods: {
    joinItems: (obj: GroupItem<string>) => {
      if (!obj.items) return ''
      return obj.items.join('')
    }
  }
})

export default GroupColumnItem
</script>

<style>

</style>
