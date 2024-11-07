<script lang="ts">
import { defineComponent, ref } from "vue";
import axios from "axios";

export default defineComponent({
  props: {
    taskId: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const comments = ref([]);
    const newComment = ref("");

    const fetchComments = async () => {
      const response = await axios.get(`/api/tasks/${props.taskId}/comments`);
      comments.value = response.data;
    };

    const submitComment = async () => {
      await axios.post(`/api/tasks/${props.taskId}/comments`, {
        content: newComment.value,
      });
      newComment.value = "";
      fetchComments();
    };

    fetchComments();

    return { comments, newComment, submitComment };
  },
});
</script>

<template>
  <div>
    <h3>Comments</h3>
    <div v-for="comment in comments" :key="comment.id">
      <p>{{ comment.content }}</p>
    </div>
    <textarea v-model="newComment"></textarea>
    <button @click="submitComment">Submit</button>
  </div>
</template>
