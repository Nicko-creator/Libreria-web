// ============================================
// DATOS DE LIBROS
// (lo demás que hacía este archivo ahora
//  lo hace React en js/react/Tienda.jsx)
// ============================================
const BOOKS = [

  //inicio de libros
  {
    id: 'it',
    title: 'IT',
    price: 35000,
    cat: 'terror',
    image: 'imagenes/itBook.jpg'
  },
  {
    id: 'resplandor',
    title: 'El Resplandor',
    price: 32000,
    cat: 'terror',
    image: 'imagenes/Elresplandor.jpg'
  },
  {
    id: 'misery',
    title: 'Misery',
    price: 28000,
    cat: 'suspenso',
    image: 'imagenes/Misery.jpg'
  },
  {
    id: 'cementerio',
    title: 'Cementerio de animales',
    price: 30000,
    cat: 'terror',
    image: 'imagenes/Sementerio.jpg'
  },
  {
    id: 'cujo',
    title: 'Cujo',
    price: 25000,
    cat: 'terror',
    image: 'imagenes/Cujo.jpg'
  },
  {
    id: 'carrie',
    title: 'Carrie',
    price: 27000,
    cat: 'terror',
    image: 'imagenes/Carrie.jpg'
  },

  {
    id: 'salem',
    title: "El misterio de Salem's Lot",
    price: 31000,
    cat: 'terror',
    image: 'imagenes/SalemLot.jpg'
  },

  {
    id: 'doctor-sueno',
    title: 'Doctor Sueño',
    price: 33000,
    cat: 'terror',
    image: 'imagenes/Doctor.jpg'
  },

  {
    id: 'instituto',
    title: 'El Instituto',
    price: 29000,
    cat: 'suspenso',
    image: 'imagenes/Instituto.jpg'
  },

  {
    id: 'rabia',
    title: 'La Rabia',
    price: 36000,
    cat: 'fantasia',
    image: 'imagenes/Rabia.jpg'
  },
    {
    id: 'tommyknockers',
    title: 'Tommy Knockers',
    price: 28000,
    cat: 'suspenso',
    image: 'imagenes/TommyKnockers.jpg'
  },
  {
    id: 'La tienda de los deseos',
    title: 'La tienda de los deseos',
    price: 30000,
    cat: 'terror',
    image: 'imagenes/LaTienda.jpg'
  },
  {
    id: 'La larga marcha',
    title: 'La larga marcha',
    price: 25000,
    cat: 'terror',
    image: 'imagenes/LargaMarcha.jpg'
  },
  {
    id: 'No-Tengas-Miedo',
    title: 'No Tengas Miedo',
    price: 27000,
    cat: 'terror',
    image: 'imagenes/NoMiedo.jpg'
  },

  {
    id: 'Elevacion',
    title: "Elevación",
    price: 31000,
    cat: 'terror',
    image: 'imagenes/Elevation.jpg'
  },

  {
    id: 'Thebody',
    title: 'The Body',
    price: 33000,
    cat: 'terror',
    image: 'imagenes/TheBody.jpg'
  },

  {
    id: "Gerald's Game",
    title: "Gerald's Game",
    price: 29000,
    cat: 'suspenso',
    image: 'imagenes/JuegoGeral.jpg'
  },

  {
    id: 'CuentoDeHadas',
    title: 'Cuento de Hadas',
    price: 36000,
    cat: 'fantasia',
    image: 'imagenes/CuentoDeHadas.jpg'
  },
  {
    id: 'El Visitante',
    title: 'El Visitante',
    price: 29000,
    cat: 'suspenso',
    image: 'imagenes/Visitante.jpg'
  },

  {
    id: 'Mr. Mercedes',
    title: 'Mr. Mercedes',
    price: 36000,
    cat: 'fantasia',
    image: 'imagenes/Mercedes.jpg'
  },

  //Colecciones 
  {
  id: 'torre-oscura-1',
  title: 'La Torre Oscura I: El Pistolero',
  price: 32000,
  cat: 'colecciones',
  collection: 'La Torre Oscura',
  image: 'imagenes/Torre1.jpg'
},

{
  id: 'torre-oscura-2',
  title: 'La Torre Oscura II: La llegada de los tres',
  price: 34000,
  cat: 'colecciones',
  collection: 'La Torre Oscura',
  image: 'imagenes/Torre2.jpg'
},

{
  id: 'torre-oscura-3',
  title: 'La Torre Oscura III: Las tierras baldías',
  price: 35000,
  cat: 'colecciones',
  collection: 'La Torre Oscura',
  image: 'imagenes/Torre3.jpg'
},

{
  id: 'torre-oscura-4',
  title: 'La Torre Oscura IV: Mago y cristal',
  price: 37000,
  cat: 'colecciones',
  collection: 'La Torre Oscura',
  image: 'imagenes/Torre4.jpg'
},
{
  id: 'torre-oscura-5',
  title: 'La Torre Oscura V: Lobos del Calla',
  price: 37000,
  cat: 'colecciones',
  collection: 'La Torre Oscura',
  image: 'imagenes/Torre5.jpg'
},
{
  id: 'torre-oscura-6',
  title: 'La Torre Oscura VI: Canción de Susannah',
  price: 37000,
  cat: 'colecciones',
  collection: 'La Torre Oscura',
  image: 'imagenes/Torre6.jpg'
},
{
  id: 'torre-oscura-7',
  title: 'La Torre Oscura VII: La Torre Oscura',
  price: 37000,
  cat: 'colecciones',
  collection: 'La Torre Oscura',
  image: 'imagenes/Torre7.jpg'
},
{
  id: 'Mr.Mercedes-1',
  title: 'Mr. Mercedes',
  price: 35000,
  cat: 'colecciones',
  collection: 'Bill Hodges',
  image: 'imagenes/Mercedes.jpg'
},
{
  id: 'Quien-pierde-paga',
  title: 'Quien pierde, paga',
  price: 35000,
  cat: 'colecciones',
  collection: 'Bill Hodges',
  image: 'imagenes/Paga.jpg'
},
{
  id: 'Fin-de-guardias',
  title: 'Fin de Guardias',
  price: 35000,
  cat: 'colecciones',
  collection: 'Bill Hodges',
  image: 'imagenes/Guardia.jpg'
},
{
  id: 'El-Visitante',
  title: 'El Visitante',
  price: 35000,
  cat: 'colecciones',
  collection: 'Holly Gibney',
  image: 'imagenes/Visitante.jpg'
}, 

{
  id: 'La-sangre-manda',
  title: 'La Sangre Manda',
  price: 35000,
  cat: 'colecciones',
  collection: 'Holly Gibney',
  image: 'imagenes/Sangre.jpg'
},

{
  id: 'Holly',
  title: 'Holly',
  price: 35000,
  cat: 'colecciones',
  collection: 'Holly Gibney',
  image: 'imagenes/Holly.jpg'
},

{
  id: 'No-Tengas-Miedo-Holly',
  title: 'No Tengas Miedo',
  price: 35000,
  cat: 'colecciones',
  collection: 'Holly Gibney',
  image: 'imagenes/NoMiedo.jpg'
},

{
  id: 'it-rba-tomo-1',
  title: 'IT - Tomo I (Edición RBA)',
  price: 30000,
  cat: 'colecciones',
  collection: 'IT — Edición RBA',
  image: 'imagenes/ItRBA1.png'
},

{
  id: 'it-rba-tomo-2',
  title: 'IT - Tomo II (Edición RBA)',
  price: 30000,
  cat: 'colecciones',
  collection: 'IT — Edición RBA',
  image: 'imagenes/ItRBA2.png'
},  

{
  id: 'it-especial-1',
  title: 'IT - Edición Limitada',
  price: 55000,
  cat: 'ediciones-especiales',
  edition: 'Ediciones de lujo',
  image: 'imagenes/ItLujo.jpg'
},

//Ediciones especiales
{
  id: 'Insomia-especial',
  title: 'Insomia - Edición Limitada',
  price: 48000,
  cat: 'ediciones-especiales',
  edition: 'Ediciones de lujo',
  image: 'imagenes/Insomia.jpg'
},

{
  id: 'Carrie-especial',
  title: 'Carrie - Edición Limitada',
  price: 48000,
  cat: 'ediciones-especiales',
  edition: 'Ediciones de lujo',
  image: 'imagenes/CarrieLujo.png'
},
{
  id: 'Christine-especial',
  title: 'Christine - Edición Limitada',
  price: 48000,
  cat: 'ediciones-especiales',
  edition: 'Ediciones de lujo',
  image: 'imagenes/ChistineLujo.jpg'
},
{
  id: 'Nihgt-Shift-especial',
  title: 'Nihgt- Edición Limitada',
  price: 48000,
  cat: 'ediciones-especiales',
  edition: 'Ediciones de lujo',
  image: 'imagenes/NightShiftLujo.jpg'
},
{
  id: 'ElInstituto-especial',
  title: 'El Instituto - Edición Especial',
  price: 48000,
  cat: 'ediciones-especiales',
  edition: 'Ediciones de lujo',
  image: 'imagenes/InstitutoEspecial.jpg'
},
{
  id: 'Elresplandor-especial',
  title: 'El Resplandor - Edición especial',
  price: 48000,
  cat: 'ediciones-especiales',
  edition: 'Ediciones de lujo',
  image: 'imagenes/ResplandorEspaecial.jpg'
},
{
  id: 'It-especial',
  title: 'IT - Edición especial',
  price: 48000,
  cat: 'ediciones-especiales',
  edition: 'Ediciones de lujo',
  image: 'imagenes/ItEspecial.jpg'
},
{
  id: 'La sangre manda-especial',
  title: 'La Sangre Manda - Edición especial',
  price: 48000,
  cat: 'ediciones-especiales',
  edition: 'Ediciones de lujo',
  image: 'imagenes/SangreEspecial.jpg'

},
{
  id: 'Torre-oscura V-especial',
  title: 'La Torre Oscura V - Edición especial',
  price: 48000,
  cat: 'ediciones-especiales',
  edition: 'Ediciones de lujo',
  image: 'imagenes/Torre5Especial.jpg'
},

//Tapas duras 
{
  id: 'it-tapa-dura',
  title: 'IT - Tapa dura',
  price: 45000,
  cat: 'tapa-dura',
  image: 'imagenes/ItDura.jpg'
},
{
  id: 'resplandor-tapa-dura',
  title: 'El Resplandor - Tapa dura',
  price: 42000,
  cat: 'tapa-dura',
  image: 'imagenes/ResplandorDura.jpg'
},
{
  id: 'carrie-tapa-dura',
  title: 'Carrie - Tapa dura',
  price: 38000,
  cat: 'tapa-dura',
  image: 'imagenes/CarrieDura.jpg'
}, 

{
  id: 'cujo-tapa-dura',
  title: 'Cujo - Tapa dura',
  price: 38000,
  cat: 'tapa-dura',
  image: 'imagenes/CujoDura.jpg'
},
{
  id: 'cazador de suenos-tapa-dura',
  title: 'Cazador de Sueños - Tapa dura',
  price: 38000,
  cat: 'tapa-dura',
  image: 'imagenes/CazadorDura.jpg'
}, 
{
  id: 'bazar-tapa-dura',
  title: 'El bazar de los malos sueños - Tapa dura',
  price: 38000,
  cat: 'tapa-dura',
  image: 'imagenes/BazarDura.jpg'
}, 
{
  id: 'ZonaMuerta-tapa-dura',
  title: 'La Zona Muerta - Tapa dura',
  price: 38000,
  cat: 'tapa-dura',
  image: 'imagenes/ZonaDura.jpg'
},
 
{
  id: 'Danza-tapa-dura',
  title: 'Danza Macabra - Tapa dura',
  price: 38000,
  cat: 'tapa-dura',
  image: 'imagenes/DanzaMacabraDura.jpg'
},
{
  id: 'StephenKing-tapa-dura',
  title: 'Stephen King - Tapa dura',
  price: 38000,
  cat: 'tapa-dura',
  image: 'imagenes/GuiaDura.jpg'
}, 
{
  id: '11/22/63-tapa-dura',
  title: '11/22/63 - Tapa dura',
  price: 38000,
  cat: 'tapa-dura',
  image: 'imagenes/11Dura.jpg'
}, 
{
  id: 'Christine-tapa-dura',
  title: 'Christine - Tapa dura',
  price: 38000,
  cat: 'tapa-dura',
  image: 'imagenes/CrisDura.jpg'
}, 
{
  id: 'Mysery-tapa-dura',
  title: 'Misery - Tapa dura',
  price: 38000,
  cat: 'tapa-dura',
  image: 'imagenes/MiseryDura.jpg'
}, 
{
  id: 'The shining-tapa-dura',
  title: 'The Shining - Tapa dura',
  price: 38000,
  cat: 'tapa-dura',
  image: 'imagenes/ShinigDura.jpg'
}, 
{
  id: 'The Outsider-tapa-dura',
  title: 'The Outsider - Tapa dura',
  price: 38000,
  cat: 'tapa-dura',
  image: 'imagenes/VisitanteDura.jpg'
}, 
{
  id: 'It edicion vieja-tapa-dura',
  title: 'IT Primera Edicion - Tapa dura',
  price: 38000,
  cat: 'tapa-dura',
  image: 'imagenes/It2Dura.jpg'
}, 

{
  id: 'Desperation -tapa-dura',
  title: 'Desperation - Tapa dura',
  price: 38000,
  cat: 'tapa-dura',
  image: 'imagenes/DesesperacionDura.jpg'
}, 
{
  id: 'Regulators -tapa-dura',
  title: 'The Regulators - Tapa dura',
  price: 38000,
  cat: 'tapa-dura',
  image: 'imagenes/RegulatorsDura.jpg'
}, 
{
  id: 'Rabia-tapa-dura',
  title: 'Rabia - Tapa dura',
  price: 38000,
  cat: 'tapa-dura',
  image: 'imagenes/RabiaDura.jpg'
}, 
{
  id: 'The Baghman Books-tapa-dura',
  title: 'The Baghman Books - Tapa dura',
  price: 38000,
  cat: 'tapa-dura',
  image: 'imagenes/TheBBDura.jpg'
}, 
{
  id: 'Apocalipsis-tapa-dura',
  title: 'Apocalipsis - Tapa dura',
  price: 38000,
  cat: 'tapa-dura',
  image: 'imagenes/ApocalipsisDura.jpg'
}, 



//Box sets
{
  id: 'box-set-1',
  title: 'Box Set- (If it bleeds, The institute, It, Misery and Pet sementary) ',
  price: 85000,
  cat: 'box-sets',
  image: 'imagenes/BoxSet1.jpg'
},
{
  id: 'box-set-2',
  title: 'Box Set- (Doctor Sleep, Cujo, Salem Lot, Firestarter and The Shining)',
  price: 150000,
  cat: 'box-sets',
  image: 'imagenes/BoxSet2.jpg'
},
{
  id: 'box-set-3',
  title: 'Box Set- (Dolores Claiborne, Geralds Game, The Girl Who Loved Tom Gordon, Misery and Rose Madder)',
  price: 120000,
  cat: 'box-sets',
  image: 'imagenes/BoxSet3.jpg'
},
{
  id: 'box-set-4',
  title: 'Box Set- (La Torre Oscura I, II, III, IV, V, VI and VII)',
  price: 120000,
  cat: 'box-sets',
  image: 'imagenes/BoxSet4.jpg'
},
{
  id: 'box-set-5',
  title: 'The Bill Hodges Box Set- (Mr. Mercedes, Finders Keepers and End of Watch)',
  price: 120000,
  cat: 'box-sets',
  image: 'imagenes/BoxSetBill.jpg'
},
{
  id: 'box-set-6',
  title: ' Three Classic Novels Box Set- (Carrie, Salem Lot and The Shining)',
  price: 120000,
  cat: 'box-sets',
  image: 'imagenes/BoxSet6.jpg'
},
{
  id: 'box-set-7',
  title: 'Classic King Box Set- (Cujo, Pet Sematary and Christine)',
  price: 120000,
  cat: 'box-sets',
  image: 'imagenes/BoxSet7.jpg'
},

//Edicion ingles

{
  id: 'it-ingles',
  title: 'IT - English Edition',
  price: 42000,
  cat: 'ingles',
  image: 'imagenes/ItEnglish.jpg'
},
{
  id: 'shining-ingles',
  title: 'The Shining - English Edition',
  price: 40000,
  cat: 'ingles',
  image: 'imagenes/ShiningEnglish.jpg'
},
{
  id: 'misery-ingles',
  title: 'Misery - English Edition',
  price: 39000,
  cat: 'ingles',
  image: 'imagenes/MiseryEnglish.jpg'
},
{
  id: 'carrie-ingles',
  title: 'Carrie - English Edition',
  price: 37000,
  cat: 'ingles',
  image: 'imagenes/CarrieEnglish.jpg'
},
{
  id: 'pet-sematary-ingles',
  title: 'Pet Sematary - English Edition',
  price: 41000,
  cat: 'ingles',
  image: 'imagenes/PetSementaryEnglish.jpg'
},
{
  id: 'Cujo-ingles',
  title: 'Cujo - English Edition',
  price: 41000,
  cat: 'ingles',
  image: 'imagenes/CujoEnglish.jpg'
},
{
  id: 'Needful Things-ingles',
  title: 'Needful Things - English Edition',
  price: 41000,
  cat: 'ingles',
  image: 'imagenes/NeedEnglish.jpg'
},
{
  id: 'Salems Lot-ingles',
  title: 'Salems Lot - English Edition',
  price: 41000,
  cat: 'ingles',
  image: 'imagenes/SalemEnglish.jpg'
},
{
  id: 'The Institute-ingles',
  title: 'The Institute - English Edition',
  price: 41000,
  cat: 'ingles',
  image: 'imagenes/InstitutoEnglish.jpg'
},
{
  id: 'The Girl Who Loved Tom Gordon-ingles',
  title: 'The Girl Who Loved Tom Gordon - English Edition',
  price: 41000,
  cat: 'ingles',
  image: 'imagenes/TomEnglish.jpg'
},
{
  id: '11/22/63-ingles',
  title: '11/22/63 - English Edition',
  price: 41000,
  cat: 'ingles',
  image: 'imagenes/11English.jpg'
},
{
  id: 'insomnia-ingles',
  title: 'Insomnia - English Edition',
  price: 41000,
  cat: 'ingles',
  image: 'imagenes/InsomiaEnglish.jpg'
},
{
  id: 'Elevation-ingles',
  title: 'Elevation - English Edition',
  price: 41000,
  cat: 'ingles',
  image: 'imagenes/ElevationEnglish.jpg'
},
{
  id: 'Billy Summers-ingles',
  title: 'Billy Summers - English Edition',
  price: 41000,
  cat: 'ingles',
  image: 'imagenes/BillySummerEnglish.jpg'
},
{
  id: 'Sleeping Beauties-ingles',
  title: 'Sleeping Beauties - English Edition',
  price: 41000,
  cat: 'ingles',
  image: 'imagenes/SleepEnglish.jpg'
},

];