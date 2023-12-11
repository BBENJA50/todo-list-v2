<script setup>
import {ref} from "vue";
import {useTodoListStore} from "@/stores/todoList.js";
import {storeToRefs} from "pinia";

const todoItem = ref("") //reactive variabele maken
const storeItem = useTodoListStore() //variabele om store te kunnen gebruiken
const {todoListItem} = storeToRefs(storeItem) //Hier slaan we alle lijstitems op in de todoList constante als reactive


function addTodoItemAndClear(item){
  if(item.length ===0){
    return
  }
  storeItem.addTodoItem(item)
  todoItem.value=''
}
</script>

<template>

  <div class="container">
    <div class="col-md-10 offset-md-1">
      <form @submit.prevent="addTodoItemAndClear(todoItem)" class="d-flex">
        <input v-model="todoItem" type="text" class="form-control me-1" placeholder="Add item here"><button class="btn btn-primary">Add</button>
      </form>
    </div>
  </div>

</template>

<style scoped>

</style>
