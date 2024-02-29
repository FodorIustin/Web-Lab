<script setup>
import TaskView from './TaskView.vue';
import TaskAdd from './TaskAdd.vue';

defineProps({
    taskList: {
        type: Object,
        required: true
    }
});
</script>

<template>
    <div class="max-w-sm p-1 mx-1 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <header class="flex justify-between">
            <div>
                <i class="bi bi-list"></i>
                {{ taskList.title }}
            </div>
            <i class="bi bi-three-dots"></i>
        </header>
        <main>
            <TaskView v-for="task in taskList.tasks" :task="task"></TaskView>
        </main>
        <footer>
            <TaskAdd :list="taskList.tasks"></TaskAdd>
        </footer>
    </div>
</template>