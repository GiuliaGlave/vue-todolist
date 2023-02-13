const { createApp } = Vue;

const app = createApp ({
    data () {
        return {
            tasks: [
                {text:"List item 1", done: true },
                {text:"List item 2", done: false },
                {text:"List item 3", done: true }, 
                {text:"List item 4", done: false }, 
                {text:"List item 5", done: false }, 
                {text:"List item 6", done: true }
            ],
           
            
        }
    }

});

app.mount("#app");