<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";
import CodeEditor from "./CodeEditor.vue";
import Comments from "./Comments.vue";

export default defineComponent({
  components: { CodeEditor, Comments },
  computed: {
    ...mapState(["tasks"]),
    task() {
      return this.tasks.find(
        (task: any) => task.id === Number(this.$route.params.id)
      );
    },
  },
});
</script>

<template>
  <div>
    <h1>{{ task.title }}</h1>
    <p>{{ task.description }}</p>
    <CodeEditor />
    <Comments :taskId="task.id" />
  </div>
</template>
