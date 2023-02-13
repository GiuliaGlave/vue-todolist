/* const { createApp } = Vue; */

const app = Vue.createApp({
  data() {
    return {
      tasks: [
        { text: "List item 1", done: true },
        { text: "List item 2", done: false },
        { text: "List item 3", done: true },
        { text: "List item 4", done: false },
        { text: "List item 5", done: false },
        { text: "List item 6", done: true },
      ],

      addNewTask: "",
      error: false,
    };
  },

  methods: {
    addTask() {
      //setto il minimo dei caratteri da inserire
      if (this.addNewTask.length >= 1) {
        this.error = false;
        this.tasks.push(this.addNewTask);
      } else {
        this.error = true;
        alert("inserisci almeno 1 carattere");
      }
    },

    removeTask(i) {
      this.tasks.splice(i, 1);
    },
  },
});

app.mount("#app");
