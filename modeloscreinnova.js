//esquemas base de datos mongo creinnova
const mongoose = require("mongoose");

const EstudianteSchema = new mongoose.Schema({
  nombre: { 
    type: String, 
    required: true 
  },
  telefono: { 
    type: Number, 
    required: true 
  },
  correo: { type: String, 
    required: true 
  },
});


const BoatSchema = new mongoose.Schema({
  id: { 
    type: String, 
    required: true 
  },
  color: { 
    type: String, 
    required: true 
  },
  type: { 
    type: Number, 
    required: true 
  },
  description: { 
    type: String, 
    required: true 
  },
});
const MatrizInovacionSchema = new mongoose.Schema({
  id: { 
    type: String, 
    required: true 
  },
});

const MatrizDesafianteSchema = new mongoose.Schema({
  id: { 
    type: String, 
    required: true 
  },
  categoria: { 
    type: String, 
    required: true 
  },
});

const CategoriaMatrizSchema = new mongoose.Schema({
  idCategoria: { 
    type: String, 
    required: true 
  },
});

const Estudiante = mongoose.model("Estudiante", EstudianteSchema);
const Boat = mongoose.model("Boat", BoatSchema);
const MatrizInovacion = mongoose.model("MatrizInovacion", MatrizInovacionSchema);
const MatrizDesafiante = mongoose.model("MatrizDesafiante", MatrizDesafianteSchema);
const CategoriaMatriz = mongoose.model("CategoriaMatriz", CategoriaMatrizSchema);

module.exports = {
  Estudiante,
  Boat,
  MatrizInovacion,
  MatrizDesafiante,
  CategoriaMatriz,
};

/*
const modeloscreinnova = new mongoose.Schema({
    estudiante:{
        nombre: string,
        telefono: Number,
        correo: string,
    },
    boat: {
        id: String,
        color: String,
        type: Number, //? 0: anchor, 1: sail
        description: String,
    },

    matrizInovacion: {
        id: string,
    },

    matrizDesafiante: {
        id: string,
        categoria: categoriaMatriz.id,
    },
    
    categoriaMatriz:{
        idCategoria: string,
    },

    bote: {
        id: String,
        color: String,
        type: Number, //? 0: anchor, 1: sail
        description: String,
    },      


    "boat": {
        
        "id": "String",
        "color": "String",
        "type": "Number", //? 0: anchor, 1: sail
        "description": "String"
      },

      "categorization_matrix": {
        "id": "String",
        "title": "String",
        "type": "Number", //? 0: anchor, 1: sail
        "boat": ["boat.id"]
      },

      "desafiante_matrix": {
        "id": "String",
        "short_phrase": "String",
        "category": "categorization_matrix.id", // se utilizara este parametro para encontrar la categoria que es igual (=) a caracterization_matrix.title. !! Tambien se utiliza la id para ver los "categorization_matrix.type"
        "enable": "boolean" // watch in select or matrix
      },

      "desafio_matrix": {
        "id": "String",
        "challenge": "String",
        "short_phrase": "desafiante_matrix.id | String", // se utilizara este parametro para encontrar la frase corta (desafiante_matrix.short_phrase) y luego la "desafiante_matrix.category" para mirar en ella el "categorization_matrix.type".       o tambien puede agregar una nueva short_phrase manual con su type 
        "type": "Number", //? 0: anchor, 1: sail
        "enable": "boolean" // watch on select or matrix
      },
      
      "innovation_matrix": {
        "id": "String",
        "challenge": ["desafio_matrix.challenge | String"], // Crear un challenge de matriz o agregar uno nuevo
        "inventions": [["desafio_matrix.", 0]],
        "innovations": []
      }
*/
