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
