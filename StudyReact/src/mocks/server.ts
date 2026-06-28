import { createServer, Model, Factory } from "miragejs";

createServer({
  models: {
    todos: Model,
  },

  factories: {
    todo: Factory.extend({
      label: "",
      complete: false,
    }),
  },

  seeds(server) {
    const todoAsString = localStorage.getItem("MOCK_TODOS");
    if (todoAsString == null) return;

    const todos = JSON.parse(todoAsString);
    todos.models.forEach((todo: {}) => server.schema.create('todos', todo))
  },

  routes() {
    this.namespace = "api";

    this.get("/todos", (schema) => {
      return schema.all("todos");
    });

    this.post("/todos", (schema, request) => {
      const attrs = JSON.parse(request.requestBody);

      const todo = schema.create("todos", attrs);

      const todos = schema.all("todos");
      localStorage.setItem("MOCK_TODOS", JSON.stringify(todos));

      return todo;
    });

    this.put("/todos/:id", (schema, request) => {
      const id = request.params.id;

      const newAttrs = JSON.parse(request.requestBody);

      const todo = schema.find("todos", id);
      todo?.update(newAttrs);

      const todos = schema.all("todos");
      localStorage.setItem("MOCK_TODOS", JSON.stringify(todos));

      return {};
    });

    this.delete("/todos/:id", (schema, request) => {
      const id = request.params.id;

      const todo = schema.find("todos", id);
      todo?.destroy();

      const todos = schema.all("todos");
      localStorage.setItem("MOCK_TODOS", JSON.stringify(todos));

      return {};
    });
  },
});
