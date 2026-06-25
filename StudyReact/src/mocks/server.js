import { createServer, Model } from "miragejs"

createServer({
    models: {
        todos: Model
    },

    routes() {

        this.namespace = "api"

        this.get('/todos', (schema) => {
           return schema.all('todos');
        })
})