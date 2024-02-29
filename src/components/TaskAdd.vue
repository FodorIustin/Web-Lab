<script setup>

const props = defineProps({
    list: {
        type: Array,
        required: true
    }
});

import { ref } from 'vue';
const taskName = ref("");
const inEditMode = ref(false);
function toggleEditMode() {
    if (inEditMode.value) {
        addNewTask();
        inEditMode.value = false;
    } else {
        taskName.value = "";
        inEditMode.value = true;
    }
}

function addNewTask() {
    props.list.push({
        title: taskName.value,
    })
}
</script>

<template>
    <button v-if="!inEditMode" @click="toggleEditMode"
        class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        type="button">Adugare Task</button>
    <form v-else @submit="toggleEditMode" class="flex items-center max-w-sm mx-auto">
        <label for="simple-search" class="sr-only">Adauga</label>
        <div class="relative w-full">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <i class="bi bi-view-list text-gray-500 dark:text-gray-400"></i>
            </div>
            <input type="text" id="simple-search"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="adauga un task..." required v-model="taskName" />
        </div>
        <button type="submit"
            class="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <i class="bi bi-node-plus"></i>
        </button>
    </form>
</template>