// usando promesas en lugar de callback
const mongoose = require("mongoose");

const dbconnect = () => {
  mongoose.set("strictQuery", true);

  return new Promise((resolve, reject) => {
    mongoose
      .connect("mongodb://localhost:27017/creinnovadb", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("**********************************************")
        console.log("*                                            *")
        console.log("*    Conexión exitosa a la base de datos     *")
        console.log("*                                            *")
        console.log("**********************************************")
        resolve();
      })
      .catch((error) => {
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        console.error("|||  Error de conexión a la base de datos:", error, "|||");
        console.log("¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡");
        reject(error);
      });
  });
};

module.exports = dbconnect;

