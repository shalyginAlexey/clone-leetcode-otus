<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";
import TaskItem from "../components/TaskItem.vue";

export default defineComponent({
  components: { TaskItem },
  computed: {
    ...mapState(["tasks"]),
  },
  created() {
    this.$store.dispatch("fetchTasks");
  },
});
</script>

<template>
  <div>
    <h1>Tasks</h1>
    <div v-for="task in tasks" :key="task.id">
      <TaskItem :task="task" />
    </div>
  </div>
</template>
