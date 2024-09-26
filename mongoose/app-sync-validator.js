const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb+srv://oscar:oscar@cluster0.c8tq0vp.mongodb.net/IronCatsValidator'); // Nos conectamos a la base de datos 'Ironcats'

    // Primer paso importante con Mongoose. Definir tu Schema. Para definir tu Schema tiene que tener claro que tipo de información quieres manejar. En esta caso, queremos crear una colección de gatitos. Los gatitos tienen un nombre y un color de pelo
    const kittySchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
            maxLength: 10,
        }
    });



    // Kitten es un nombre arbitrario pero normalmente le ponemos el mismo nombre que la coleccion que queremos crear
    // Además, el nombre de la colección siempre debería ir en plural (convención)
    const Kitten = mongoose.model('Kitten', kittySchema);

    // Ahora que hemos asociado el modelo al Schema, podemos crear nuevas instancias de la clase 'Kitten' 
    const loki = new Kitten({
        name: "FelixAAAAAAAAAAAAAAAAAAAAAAAAA",
    });

    // Guardarlo en base de datos
    try {

        // Gato creado
        await loki.save();

        console.log('Gato creado correctamente');

    } catch (error) {

        console.error(error.message);

    }