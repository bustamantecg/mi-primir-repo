import SuperHero from "../models/SuperHero.mjs";
import IRepository from "./IRepository.mjs";
import mongoose from 'mongoose';

class SuperHeroRepository extends IRepository{
  async obtenerId(id){
      const superHero = await SuperHero.findOne({ id: Number(id) });
      if (!superHero) {
          console.log(`Superheroe ID: ${id} no encontrado.`);
      }
       return superHero;
  }

  async obtenerTodos(){
      return await SuperHero.find({});
  }

  async buscarPorAtributo(atributo, valor){
      const query = { [atributo]: new RegExp(valor, 'i') } ;      
      return await SuperHero.find(query);
  }

  async obtenerMayoresDe30(){
      return await SuperHero.find(
          {
              edad: { $gt: 30 },
              planetaOrigen: 'Tierra',
              //poderes: { $size: { $gte: 2 } } ,
              $expr: { $gte: [{ $size: "$poderes" }, 2] } // Al menos 2 poderes
          }
      );
  }

  async insertSuperHero(req, res){
      try {
          const dataHero = req.body;
          const newHero = new SuperHero(dataHero);
          const saveHero = await newHero.save();         
          return saveHero;
      } catch (error) {
          console.error("Error al insertar el Superheroe:", error);
          throw new Error("Error al insertar el Superheroe");
      }
  }

  async updateSuperHeroe(req, res){
      const { id } = req.params; // El id recibido en la URL (será un string)
      const superheroeData = req.body; // Los nuevos datos que se quieren actualizar
      try {
          // Verificamos si el ID es válido antes de continuar
          if (!mongoose.Types.ObjectId.isValid(id)) {
              throw new Error('ID no válido');
          }
          // Convertimos el id a ObjectId correctamente usando 'new'
          const objectId = new mongoose.Types.ObjectId(id);
  
          // Actualizamos el superhéroe con el nuevo valor
          const superheroe = await SuperHero.findByIdAndUpdate(
              objectId, // Usamos el ObjectId
              superheroeData, // Los datos que queremos actualizar
              { new: true } // Para que devuelva el superhéroe actualizado
          );
          if (!superheroe) {
              throw new Error("Superheroe no existe");
          }
          return superheroe;
      } catch (error) {
          console.error("Error al actualizar el superheroe:", error.message);
          throw new Error("Error al actualizar el superheroe");
      }
  }

  async eliminarSuperHeroe(req, res){
      const { id } = req.params;  // Obtener el ID de los parámetros de la URL
      // Verificar si el ID es válido
      if (!mongoose.Types.ObjectId.isValid(id)) {
          return res.status(400).send({ error: 'ID no válido' });
      }
      // Buscar el superhéroe por el ID
      const superheroe = await SuperHero.findById(id);
      if (!superheroe) {
          // Si el superhéroe no existe, retornar un error 404
          return res.status(404).send({ mensaje: 'Superhéroe no encontrado' });
      }
  
      // Si el superhéroe existe, procedemos a eliminarlo
      const result = await SuperHero.deleteOne({ _id: id });
      if (result.deletedCount === 0) {
          return res.status(400).send({ error: 'Error al eliminar el superhéroe' });
      }
      return superheroe; //retorna el superheroe eliminado recientemente
  }

  async eliminarByNameSuperHeroe(name){
      const result = await SuperHero.findOneAndDelete({ nombreSuperHeroe: name });
      if(!result){
          return res.status(404).send({ mensaje: 'Superheroe no encontrado' });
      }
      console.log(`Super heroe ${name} Eliminado`);
      return result;
  }
}

/*
async eliminarByNameSuperHeroe(req, res) {
    const { name } = req.params;

    try {
        const result = await SuperHero.findOneAndDelete({ nombreSuperHeroe: name });

        if (!result) {
            return res.status(404).json({ mensaje: 'Superhéroe no encontrado' });
        }

        return res.status(200).json({ mensaje: 'Superhéroe eliminado correctamente', data: result });
    } catch (error) {
        console.error('Error eliminando superhéroe:', error);
        return res.status(500).json({ mensaje: 'Error en el servidor' });
    }
}
*/
export default new SuperHeroRepository();