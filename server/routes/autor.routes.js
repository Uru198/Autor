const AutorControllers = require("../controllers/autor.controllers");

module.exports = app => {
    app.get("/api/autores", AutorControllers.get_all);
    app.post("/api/autores/new", AutorControllers.create_autor);
    app.get("/api/autores/:id", AutorControllers.get_autor);
    app.put("/api/autores/:id", AutorControllers.update_autor);
    app.delete("/api/autores/:id", AutorControllers.delete_autor);
}