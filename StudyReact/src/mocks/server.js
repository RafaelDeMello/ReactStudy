import { createServer, Model } from "miragejs"

createServer({
    models: {
        todos: Model
    },

    routes() {

        this.namespace = "api";
        
        this.get('/todos', (schema) => {
           return schema.all('todos');
        })
        
        this.post('/todos', (schema, request) => {
             const attrs = JSON.parse(request.requestBody)

             const todo = schema.create('todos', attrs);

             return todo
        })
    }
})