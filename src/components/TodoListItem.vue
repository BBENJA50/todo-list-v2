<script setup>

import {useTodoListStore} from "@/stores/todoList.js";
import {storeToRefs} from "pinia";
import {ref} from "vue";

const storeItem = useTodoListStore()
const {todoListItem} = storeToRefs(storeItem) //Hier slaan we alle lijstitems op in de todoList constante als reactive
const {toggleCompletedItem, deleteTodoItem, addTodoItem} = storeItem


</script>

<template>
  <div class="container">
    <div class="row">
      <div>
        <ul v-for="todoItem in todoListItem" :key="todoItem.id" class="list-group mb-1">
          <li class="list-group-item d-flex justify-content-between  bg-secondary-subtle" :class="{completed:todoItem.completed}">
            <span >{{todoItem.id +1}} - {{todoItem.item}}</span>
            <div>
              <span @click.stop="toggleCompletedItem(todoItem.id)" class="pointer border border-black p-1 me-1">&#10004;</span>
              <span @click="deleteTodoItem(todoItem.id)" class="pointer border border-black p-1">&#10060;</span>
            </div>
          </li>
        </ul>
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
</style>