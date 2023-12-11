<script setup>

import {useTodoListStore} from "@/stores/todoList.js";
import {storeToRefs} from "pinia";
import TodoListItem from "@/components/TodoListItem.vue";
import TodoFormItem from "@/components/TodoFormItem.vue";

const store = useTodoListStore()
const {todoList} = storeToRefs(store) //Hier slaan we alle lijstitems op in de todoList constante als reactive
const {todoListItem} = storeToRefs(store) //Hier slaan we alle lijstitems op in de todoList constante als reactive
const {toggleCompleted, deleteTodo} = store
const {toggleCompletedItem, deleteTodoItem} = store

</script>

<template>
  <div class="container">
    <div class="row">
      <div class="d-flex">
        <div v-for="todo in todoList" :key="todo.id" class="list-group mx-1">
          <div class="card" style="width: 30rem;">
            <img src="/src/assets/logo.svg" class="card-img-top h-10" alt="...">
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-center">
                <h2 class="card-title"> {{ todo.item }}</h2>
                <div>
                  <span @click="deleteTodo(todo.id)" class="pointer border border-black p-1">&#10060;</span>
                </div>
              </div>
              <p class="card-text">INHOUD HIER</p>
              <todo-form-item></todo-form-item>
              <div class="mt-2">
                <todo-list-item></todo-list-item>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
.completed{
  text-decoration: line-through;
}
.pointer:hover{
  cursor: pointer;
  user-select: none;
  background-color: darkcyan;
}
.h-10{
  height: 10%;
}
</style>
