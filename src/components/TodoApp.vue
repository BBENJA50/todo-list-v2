<script setup>
import TodoForm from "@/components/TodoForm.vue";
import TodoList from "@/components/TodoList.vue";
</script>

<template>
  <div class="todo-app">
    <h1 class="text-center">
      Todo List
    </h1>
    <hr>
    <todo-form/>
    <hr>
    <todo-list>
    </todo-list>
  </div>
</template>

<style scoped>

</style>
