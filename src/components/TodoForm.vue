<script setup>
import {ref} from "vue";
import {useTodoListStore} from "@/stores/todoList.js";

const todo = ref("") //reactive variabele maken
const store = useTodoListStore() //variabele om store te kunnen gebruiken

function addItemAndClear(item){
  if(item.length ===0){
    return
  }
  store.addTodo(item)
  todo.value=''
}
</script>

<template>

  <div class="container">
    <div class="col-md-6 offset-md-3">
      <form @submit.prevent="addItemAndClear(todo)" class="d-flex">
        <input v-model="todo" type="text" class="form-control me-1" placeholder="Add item here"><button class="btn btn-primary">Add</button>
      </form>
    </div>
  </div>

</template>

<style scoped>

</style>
