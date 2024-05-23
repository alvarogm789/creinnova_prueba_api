const express = require('express');
const dbconnect = require('./config');
const { Estudiante, Boat, MatrizInovacion, MatrizDesafiante, CategoriaMatriz } = require('./modeloscreinnova.js');
const app = express();
const port = process.env.PORT || 3001;

// para haceruso de JSON
app.use(express.json());

//rutas CRUD usando router
const router = express.Router();

// ruta GET 
router.get("/", (req, res) => {
    res.send("Servidor corriendo correctamente");
});

// Ruta POST para recibir y guardar datos JSON en /api/v1/data
router.post("/creinnovadb", async (req, res) => {
    const { estudiante, boat, matrizInovacion, matrizDesafiante, categoriaMatriz, bote } = req.body;

    try {
        // Guardar los datos en la base de datos 
        const nuevoEstudiante = new Estudiante(estudiante);
        const nuevoBoat = new Boat(boat);
        const nuevoMatrizInovacion = new MatrizInovacion(matrizInovacion);
        const nuevoMatrizDesafiante = new MatrizDesafiante(matrizDesafiante);
        const nuevoCategoriaMatriz = new CategoriaMatriz(categoriaMatriz);
        const nuevoBote = new Boat(bote);

        await nuevoEstudiante.save();
        await nuevoBoat.save();
        await nuevoMatrizInovacion.save();
        await nuevoMatrizDesafiante.save();
        await nuevoCategoriaMatriz.save();
        await nuevoBote.save();

        res.status(200).send('Datos recibidos y guardados correctamente');
    } catch (error) {
        console.error('Error al guardar los datos:', error);
        res.status(500).send('Error al guardar los datos');
    }
});

app.use(router);

app.listen(port, () => {
    console.log(`El servidor está en el puerto ${port}`);
    dbconnect(); // Conectar a la base de datos cuando el servidor comienza
});






/*
const express = require('express');
const dbconnect = require('./config');
const app = express();

//para poder manejar las rutas
const router = express.Router();

//rutas  CRUD
//Create - Read - Update - Delete

//con req obtengo todos los datos que se pasen por URL
//con res la respuesta del servidor
router.post("/", (req, res) => {
    const body = req.body;
    res.send(body)
});
router.get("/",(req,res)=>{
    const body = req.body;
    res.send(body)
})
app.use(router);

app.listen(3001, () => {
    console.log("el servidor esta en el pierto 3001");
})

//llamando a la funcion 
dbconnect();
*/