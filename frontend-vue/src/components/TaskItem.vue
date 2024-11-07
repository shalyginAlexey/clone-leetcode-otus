<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    task: {
      type: Object as PropType<{
        id: number;
        title: string;
        description: string;
      }>,
      required: true,
    },
  },
});
</script>

<template>
  <div>
    <h2>{{ task.title }}</h2>
    <p>{{ task.description }}</p>
    <router-link :to="`/task/${task.id}`">View Task</router-link>
  </div>
</template>
