//objetos literales
/*
const usuario = {
    nombre: 'juan',
    apellido: 'perez',
    edad: 25,
    casado: false,
    amigos: ['pedro,mariano,juana']
}

console.log(usuario.amigos[2])


let perfil = {
    nombre: 'olivia',
    apellido:'Marsu',
    edad: 21
}

const presentacion = (miObjeto) => {
    return `hola, mi nombre es ${miObjeto.nombre}${miObjeto.apellido} y tengo ${miObjeto.edad}`
}

console.log(presentacion(perfil))


// 1,ada@gmail.com,Ada Lovelace,1234567890
// 2,grace@hotmail.com,Grace Hopper,0987654321
// 3,hedy@gmail.com,Hedy Lamarr,6789054321
// 4,radia@yahoo.com,Radia Perlman,1234509876
// 5,Sheryl@facebook.com,Sheryl Sandberg,5432167890

let datos={
    id:1,
    email:'ada@gmail.com',
    nombre:'Ada Lovelace',
    telefono:'1234567890',
    edad: 29,
    programa: true,
}

const agrego = (datos) => {

    if (datos.programa){
       return datos.lenguajeDeProgramacion = 'javascript'

    }

}

console.log(agrego(datos))


//array de objetos

let bandas = [
    { id: 1, nombre: "Nirvana", fundacion: 1987, activa: false },
    { id: 2, nombre: "Foo Fighters", fundacion: 1994, activa: true },
    { id: 3, nombre: "Led Zeppelin", fundacion: 1967, activa: false },
    { id: 3, nombre: "Queens of the Stone Age", fundacion: 1997, activa: true },
    { id: 3, nombre: "Pearl Jam", fundacion: 1990, activa: true },
  ];

const bandasEstado = (objetoBandas) => {

    let oracion=''
     for(const banda of objetoBandas){
        if(objetoBandas.activa){
        oracion += `la banda ${banda.nombre} esta activa`
    }else{
        oracion += `la banda ${banda.nombre} no esta activa`
    }

    }

    return oracion
}

console.log (bandasEstado(bandas))

// Nirvana no está activa
// Foo Fighters está activa desde el año 1994
// Led Zeppelin no está activa
// Queens of the Stone Age está activa desde el año 1997
// Pearl Jam está activa desde el año 1990


let ledZeppelin = {
    nombre: "Led Zeppelin",
    anio: 1968,
    activa: false,
    miniatura:
      "http://townsquare.media/site/295/files/2014/10/Led-Zeppelin1.jpg?w=980&q=75",
    integrantes: ["Jimmy Page", "Robert Plant", "John Paul Jones", "John Bonham"],
    discos: [
      {
        nombre: "Led Zeppelin",
        anio: 1969,
        canciones: ["Good Times, Bad Times", "Communication Breakdown"],
        duracion: 2691,
      },
      {
        nombre: "Led Zeppelin II",
        anio: 1969,
        canciones: ["Whole Lotta Love", "Moby Dick", "Ramble On"],
        duracion: 2502,
      },
      {
        nombre: "Led Zeppelin III",
        anio: 1970,
        canciones: ["Immigrant Song"],
        duracion: 2489,
      },
      {
        nombre: "Led Zeppelin IV",
        anio: 1971,
        canciones: ["Rock and Roll", "Stairway to Heaven", "Four Sticks"],
        duracion: 2559,
      },
    ],
  };

  const completo = (objetoInfo) => {
    let cantidadCanciones=0
    let duracionAcumulada=0
    for(const disco of objetoInfo.discos){
        cantidadCanciones += disco.canciones.length
        duracionAcumulada += disco.duracion/9
        console.log(duracionAcumulada/9)
    }

    return `${objetoInfo.nombre}se fundo en el anio${objetoInfo.anio}. tiene ${objetoInfo.integrantes.length} integrantes: ${objetoInfo.integrantes}. tiene en total ${objetoInfo.discos.length}. tiene en total${cantidadCanciones} canciones entre todos los discos. En promedio cada cancion dura${duracionAcumulada} segundos.`
  }

  console.log(completo(ledZeppelin))

//"Led Zeppelin se fundó en el año 1968. Tiene 4 integrantes: Jimmy Page, Robert Plant, John Paul Jones, John Bonham. Tiene en total 4 discos. Tiene en total 9 canciones entre todos los discos. En promedio, cada canción dura 1137.888888888889 segundos."
*/