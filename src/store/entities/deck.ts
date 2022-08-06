export interface cardState { 
  id?:'' , 
  name: string ,
  valueCard?: number ,
  semi?: "diamonds"|"hearts"|"clubs"|"spades" ,
  value: number,
  image: string , 
}

export const deck: Array<cardState> = [
  { 
    name: '1_diamonds',
    valueCard:1 , 
    semi: 'diamonds', 
    value: -1 ,
    image:'cards/diamonds_1.svg'
  },
  { 
    name: '2_diamonds', 
    valueCard: 2 , 
    semi: 'diamonds', 
    value: 1 ,
    image:'cards/diamonds_2.svg'
  },
  {  
    name: '3_diamonds',
    valueCard: 3 , 
    semi: 'diamonds',
    value: 1,
    image:'cards/diamonds_3.svg'
  },
  { 
    name: '4_diamonds',
    valueCard: 4 , 
    semi: 'diamonds', 
    value: 1 ,
    image:'cards/diamonds_4.svg'
  },
  { 
    name: '5_diamonds',
    valueCard: 5 , 
    semi: 'diamonds', 
    value: 1 ,
    image:'cards/diamonds_5.svg'
  },
  { 
    name: '6_diamonds',
    valueCard: 6 , 
    semi: 'diamonds', 
    value: 1 ,
    image:'cards/diamonds_6.svg'
  },
  { 
    name: '7_diamonds',
    valueCard: 7 , 
    semi: 'diamonds', 
    value: 0 ,
    image:'cards/diamonds_7.svg'
  },
  { 
    name: '8_diamonds',
    valueCard: 8 , 
    semi: 'diamonds', 
    value: 0 ,
    image:'cards/diamonds_8.svg'
  },
  { 
    name: '9_diamonds',
    valueCard: 9 , 
    semi: 'diamonds', 
    value: 0 ,
    image:'cards/diamonds_9.svg'
  },
  { 
    name: '10_diamonds',
    valueCard: 10 , 
    semi: 'diamonds', 
    value: -1 ,
    image:'cards/diamonds_10.svg'
  },
  { 
    name: 'JEK_diamonds',
    valueCard: 11 , 
    semi: 'diamonds', 
    value: -1 ,
    image:'cards/diamonds_11.svg'
  },
  { 
    name: 'QUEEN_diamonds',
    valueCard: 12 , 
    semi: 'diamonds', 
    value: -1 ,
    image:'cards/diamonds_12.svg'
  },
  { 
    name: 'KING_diamonds',
    valueCard: 13 , 
    semi: 'diamonds', 
    value: -1 ,
    image:'cards/diamonds_13.svg'
  },
  { 
    name: '1_hearts',
    valueCard:1 , 
    semi: 'hearts', 
    value: -1 ,
    image:'cards/hearts_1.svg'
  },
  { 
    name: '2_hearts', 
    valueCard: 2 , 
    semi: 'hearts', 
    value: 1 ,
    image:'cards/hearts_2.svg'
  },
  {  
    name: '3_hearts',
    valueCard: 3 , 
    semi: 'hearts',
    value: 1,
    image:'cards/hearts_3.svg'
  },
  { 
    name: '4_hearts',
    valueCard: 4 , 
    semi: 'hearts', 
    value: 1 ,
    image:'cards/hearts_4.svg'
  },
  { 
    name: '5_hearts',
    valueCard: 5 , 
    semi: 'hearts', 
    value: 1 ,
    image:'cards/hearts_5.svg'
  },
  { 
    name: '6_hearts',
    valueCard: 6 , 
    semi: 'hearts', 
    value: 1 ,
    image:'cards/hearts_6.svg'
  },
  { 
    name: '7_hearts',
    valueCard: 7 , 
    semi: 'hearts', 
    value: 0 ,
    image:'cards/hearts_7.svg'
  },
  { 
    name: '8_hearts',
    valueCard: 8 , 
    semi: 'hearts', 
    value: 0 ,
    image:'cards/hearts_8.svg'
  },
  { 
    name: '9_hearts',
    valueCard: 9 , 
    semi: 'hearts', 
    value: 0 ,
    image:'cards/hearts_9.svg'
  },
  { 
    name: '10_hearts',
    valueCard: 10 , 
    semi: 'hearts', 
    value: -1 ,
    image:'cards/hearts_10.svg'
  },
  { 
    name: 'JEK_hearts',
    valueCard: 11 , 
    semi: 'hearts', 
    value: -1 ,
    image:'cards/hearts_11.svg'
  },
  { 
    name: 'QUEEN_hearts',
    valueCard: 12 , 
    semi: 'hearts', 
    value: -1 ,
    image:'cards/hearts_12.svg'
  },
  { 
    name: 'KING_hearts',
    valueCard: 13 , 
    semi: 'hearts', 
    value: -1 ,
    image:'cards/hearts_13.svg'
  }, 
  { 
    name: '1_spades',
    valueCard:1 , 
    semi: 'spades', 
    value: -1 ,
    image:'cards/spades_1.svg'
  },
  { 
    name: '2_spades', 
    valueCard: 2 , 
    semi: 'spades', 
    value: 1 ,
    image:'cards/spades_2.svg'
  },
  {  
    name: '3_spades',
    valueCard: 3 , 
    semi: 'spades',
    value: 1,
    image:'cards/spades_3.svg'
  },
  { 
    name: '4_spades',
    valueCard: 4 , 
    semi: 'spades', 
    value: 1 ,
    image:'cards/spades_4.svg'
  },
  { 
    name: '5_spades',
    valueCard: 5 , 
    semi: 'spades', 
    value: 1 ,
    image:'cards/spades_5.svg'
  },
  { 
    name: '6_spades',
    valueCard: 6 , 
    semi: 'spades', 
    value: 1 ,
    image:'cards/spades_6.svg'
  },
  { 
    name: '7_spades',
    valueCard: 7 , 
    semi: 'spades', 
    value: 0 ,
    image:'cards/spades_7.svg'
  },
  { 
    name: '8_spades',
    valueCard: 8 , 
    semi: 'spades', 
    value: 0 ,
    image:'cards/spades_8.svg'
  },
  { 
    name: '9_spades',
    valueCard: 9 , 
    semi: 'spades', 
    value: 0 ,
    image:'cards/spades_9.svg'
  },
  { 
    name: '10_spades',
    valueCard: 10 , 
    semi: 'spades', 
    value: -1 ,
    image:'cards/spades_10.svg'
  },
  { 
    name: 'JEK_spades',
    valueCard: 11 , 
    semi: 'spades', 
    value: -1 ,
    image:'cards/spades_11.svg'
  },
  { 
    name: 'QUEEN_spades',
    valueCard: 12 , 
    semi: 'spades', 
    value: -1 ,
    image:'cards/spades_12.svg'
  },
  { 
    name: 'KING_spades',
    valueCard: 13 , 
    semi: 'spades', 
    value: -1 ,
    image:'cards/spades_13.svg'
  }, 
  { 
    name: '1_clubs',
    valueCard:1 , 
    semi: 'clubs', 
    value: -1 ,
    image:'cards/clubs_1.svg'
  },
  { 
    name: '2_clubs', 
    valueCard: 2 , 
    semi: 'clubs', 
    value: 1 ,
    image:'cards/clubs_2.svg'
  },
  {  
    name: '3_clubs',
    valueCard: 3 , 
    semi: 'clubs',
    value: 1,
    image:'cards/clubs_3.svg'
  },
  { 
    name: '4_clubs',
    valueCard: 4 , 
    semi: 'clubs', 
    value: 1 ,
    image:'cards/clubs_4.svg'
  },
  { 
    name: '5_clubs',
    valueCard: 5 , 
    semi: 'clubs', 
    value: 1 ,
    image:'cards/clubs_5.svg'
  },
  { 
    name: '6_clubs',
    valueCard: 6 , 
    semi: 'clubs', 
    value: 1 ,
    image:'cards/clubs_6.svg'
  },
  { 
    name: '7_clubs',
    valueCard: 7 , 
    semi: 'clubs', 
    value: 0 ,
    image:'cards/clubs_7.svg'
  },
  { 
    name: '8_clubs',
    valueCard: 8 , 
    semi: 'clubs', 
    value: 0 ,
    image:'cards/clubs_8.svg'
  },
  { 
    name: '9_clubs',
    valueCard: 9 , 
    semi: 'clubs', 
    value: 0 ,
    image:'cards/clubs_9.svg'
  },
  { 
    name: '10_clubs',
    valueCard: 10 , 
    semi: 'clubs', 
    value: -1 ,
    image:'cards/clubs_10.svg'
  },
  { 
    name: 'JEK_clubs',
    valueCard: 11 , 
    semi: 'clubs', 
    value: -1 ,
    image:'cards/clubs_11.svg'
  },
  { 
    name: 'QUEEN_clubs',
    valueCard: 12 , 
    semi: 'clubs', 
    value: -1 ,
    image:'cards/clubs_12.svg'
  },
  { 
    name: 'KING_clubs',
    valueCard: 13 , 
    semi: 'clubs', 
    value: -1 ,
    image:'cards/clubs_13.svg'
  } 
]

 