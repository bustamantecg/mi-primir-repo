export function renderizarSuperheroe(superheroe) {
    return {
      _id: superheroe._id,
      Nombre: superheroe.nombreSuperHeroe,
      "Nombre Real": superheroe.nombreReal,
      Edad: superheroe.edad,
      "Planeta de Origen": superheroe.planetaOrigen,
      Debilidad: superheroe.debilidad,
      Poderes: superheroe.poderes,
      Aliados: superheroe.aliados,
      Enemigos: superheroe.enemigos,
      Alta: superheroe.createdAt
    };
  }
  
  export function renderizarListaSuperheroes(superheroes) {
    return superheroes.map(superheroe => renderizarSuperheroe(superheroe));
  }

  //************ */
  export function renderizandoSuperheroe(superheroe) {
    return {
      _id: superheroe._id,
      Nombre: superheroe.nombreSuperHeroe,
      Identidad: superheroe.nombreReal, // Cambiar "Nombre Real" por "Identidad"
      Edad: superheroe.edad,
      Planeta: superheroe.planetaOrigen, // Cambiar "Planeta de Origen" por "Planeta"
      Debilidad: superheroe.debilidad,
      Poderes: superheroe.poderes,
      Aliados: superheroe.aliados,
      Enemigos: superheroe.enemigos,
      Alta: superheroe.createdAt
    };
  }

  export function renderizarListaSuperheroes2(superheroes) {
    return superheroes.map(superheroe => renderizandoSuperheroe(superheroe));
  }