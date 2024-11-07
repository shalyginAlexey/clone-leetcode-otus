<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";

export default defineComponent({
  computed: {
    ...mapState(["user"]),
  },
});
</script>

<template>
  <div>
    <h1>{{ user.username }}</h1>
    <p>Email: {{ user.email }}</p>
    <p>Role: {{ user.role }}</p>
    <p>Rating: {{ user.rating }}</p>
  </div>
</template>
