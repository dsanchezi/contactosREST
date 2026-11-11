const database = "DAW";
const collection = "Contactos";

// Crear una nueva base de datos
use(database);

// Crear una nueva colección
db.createCollection(collection);

// Insertar un documento en la colección
db.Contactos.insertOne({
    nombre: 'May',
    telefono: '666777888'
});
