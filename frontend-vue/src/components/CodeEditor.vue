<script lang="ts">
import { defineComponent, ref } from "vue";
import axios from "axios";

export default defineComponent({
  setup() {
    const code = ref("");

    const submitCode = async () => {
      const response = await axios.post(
        `/api/tasks/${this.$route.params.id}/submit`,
        { code: code.value }
      );
      console.log(response.data);
    };

    return { code, submitCode };
  },
});
</script>

<template>
  <div>
    <textarea v-model="code"></textarea>
    <button @click="submitCode">Submit</button>
  </div>
</template>
