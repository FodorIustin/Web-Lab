<script setup>
import ColumnView from './ColumnView.vue';
import ColumnAdd from './ColumnAdd.vue';

import { useTodoStore } from '../stores/todo';
const todoStore = useTodoStore();

</script>

<template>
    <h1>TO DO List</h1>
    <div class="flex">
        <ColumnView v-for="list in todoStore.lists" :taskList="list"></ColumnView>
        <ColumnAdd></ColumnAdd>
    </div>
</template>