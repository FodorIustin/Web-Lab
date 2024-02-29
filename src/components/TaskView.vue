<script setup>
defineProps({
    task: {
        type: Object,
        required: true
    }
});
</script>

<template>
    <div class="flex row-auto bg-slate-200 my-1">
        {{ task.title }}
    </div>
</template>