import { defineStore } from 'pinia';

export const verseStore = defineStore('verse', {
    state: () => ({
        verse: "",
        reference:"",
        previousVerses: [],
    })
})