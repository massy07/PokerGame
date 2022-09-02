export interface cardState { 
  id?:'' , 
  name: string ,
  number?: number ,
  semi?: "diamonds"|"hearts"|"clubs"|"spades" ,
  valueCard: number ,
  valueCounter: number,
  image: string , 
}

export const deck: Array<cardState> = [
{ 
  name: '1_diamonds',
  number:1,
  semi: 'diamonds', 
  valueCard:1 , 
  valueCounter: -1 ,
  image:'cards/diamonds_1.svg'
},
{ 
  name: '2_diamonds', 
  number: 2,
  semi: 'diamonds', 
  valueCard: 2 , 
  valueCounter: 1 ,
  image:'cards/diamonds_2.svg'
},
{  
  name: '3_diamonds',
  number: 3,
  semi: 'diamonds',
  valueCard: 3 , 
  valueCounter: 1,
  image:'cards/diamonds_3.svg'
},
{ 
  name: '4_diamonds',
  number: 4,
  semi: 'diamonds', 
  valueCard: 4 , 
  valueCounter: 1 ,
  image:'cards/diamonds_4.svg'
},
{ 
  name: '5_diamonds',
  number: 5,
  semi: 'diamonds', 
  valueCard: 5 , 
  valueCounter: 1 ,
  image:'cards/diamonds_5.svg'
},
{ 
  name: '6_diamonds',
  number: 6,
  semi: 'diamonds', 
  valueCard: 6 , 
  valueCounter: 1 ,
  image:'cards/diamonds_6.svg'
},
{ 
  name: '7_diamonds',
  number: 7,
  semi: 'diamonds', 
  valueCard: 7 , 
  valueCounter: 0 ,
  image:'cards/diamonds_7.svg'
},
{ 
  name: '8_diamonds',
  number: 8,
  semi: 'diamonds', 
  valueCard: 8 , 
  valueCounter: 0 ,
  image:'cards/diamonds_8.svg'
},
{ 
  name: '9_diamonds',
  number: 9,
  semi: 'diamonds', 
  valueCard: 9 , 
  valueCounter: 0 ,
  image:'cards/diamonds_9.svg'
},
{ 
  name: '10_diamonds',
  number: 10,
  semi: 'diamonds', 
  valueCard: 10 , 
  valueCounter: -1 ,
  image:'cards/diamonds_10.svg'
},
{ 
  name: 'JEK_diamonds',
  number: 11,
  semi: 'diamonds', 
  valueCard: 10 , 
  valueCounter: -1 ,
  image:'cards/diamonds_11.svg'
},
{ 
  name: 'QUEEN_diamonds',
  number: 12,
  semi: 'diamonds', 
  valueCard: 10 , 
  valueCounter: -1 ,
  image:'cards/diamonds_12.svg'
},
{ 
  name: 'KING_diamonds',
  number: 13,
  semi: 'diamonds', 
  valueCard: 10 , 
  valueCounter: -1 ,
  image:'cards/diamonds_13.svg'
},
{ 
  name: '1_hearts',
  number:1,
  semi: 'hearts', 
  valueCard:1 , 
  valueCounter: -1 ,
  image:'cards/hearts_1.svg'
},
{ 
  name: '2_hearts', 
  number: 2,
  semi: 'hearts', 
  valueCard: 2 , 
  valueCounter: 1 ,
  image:'cards/hearts_2.svg'
},
{  
  name: '3_hearts',
  number: 3,
  semi: 'hearts',
  valueCard: 3 , 
  valueCounter: 1,
  image:'cards/hearts_3.svg'
},
{ 
  name: '4_hearts',
  number: 4,
  semi: 'hearts', 
  valueCard: 4 , 
  valueCounter: 1 ,
  image:'cards/hearts_4.svg'
},
{ 
  name: '5_hearts',
  number: 5,
  semi: 'hearts', 
  valueCard: 5 , 
  valueCounter: 1 ,
  image:'cards/hearts_5.svg'
},
{ 
  name: '6_hearts',
  number: 6,
  semi: 'hearts', 
  valueCard: 6 , 
  valueCounter: 1 ,
  image:'cards/hearts_6.svg'
},
{ 
  name: '7_hearts',
  number: 7,
  semi: 'hearts', 
  valueCard: 7 , 
  valueCounter: 0 ,
  image:'cards/hearts_7.svg'
},
{ 
  name: '8_hearts',
  number: 8,
  semi: 'hearts', 
  valueCard: 8 , 
  valueCounter: 0 ,
  image:'cards/hearts_8.svg'
},
{ 
  name: '9_hearts',
  number: 9,
  semi: 'hearts', 
  valueCard: 9 , 
  valueCounter: 0 ,
  image:'cards/hearts_9.svg'
},
{ 
  name: '10_hearts',
  number: 10,
  semi: 'hearts', 
  valueCard: 10 , 
  valueCounter: -1 ,
  image:'cards/hearts_10.svg'
},
{ 
  name: 'JEK_hearts',
  number: 11,
  semi: 'hearts', 
  valueCard: 10 , 
  valueCounter: -1 ,
  image:'cards/hearts_11.svg'
},
{ 
  name: 'QUEEN_hearts',
  number: 12,
  semi: 'hearts', 
  valueCard: 10 , 
  valueCounter: -1 ,
  image:'cards/hearts_12.svg'
},
{ 
  name: 'KING_hearts',
  number: 13,
  semi: 'hearts', 
  valueCard: 10 , 
  valueCounter: -1 ,
  image:'cards/hearts_13.svg'
},
{ 
  name: '1_clubs',
  number:1,
  semi: 'clubs', 
  valueCard:1 , 
  valueCounter: -1 ,
  image:'cards/clubs_1.svg'
},
{ 
  name: '2_clubs', 
  number: 2,
  semi: 'clubs', 
  valueCard: 2 , 
  valueCounter: 1 ,
  image:'cards/clubs_2.svg'
},
{  
  name: '3_clubs',
  number: 3,
  semi: 'clubs',
  valueCard: 3 , 
  valueCounter: 1,
  image:'cards/clubs_3.svg'
},
{ 
  name: '4_clubs',
  number: 4,
  semi: 'clubs', 
  valueCard: 4 , 
  valueCounter: 1 ,
  image:'cards/clubs_4.svg'
},
{ 
  name: '5_clubs',
  number: 5,
  semi: 'clubs', 
  valueCard: 5 , 
  valueCounter: 1 ,
  image:'cards/clubs_5.svg'
},
{ 
  name: '6_clubs',
  number: 6,
  semi: 'clubs', 
  valueCard: 6 , 
  valueCounter: 1 ,
  image:'cards/clubs_6.svg'
},
{ 
  name: '7_clubs',
  number: 7,
  semi: 'clubs', 
  valueCard: 7 , 
  valueCounter: 0 ,
  image:'cards/clubs_7.svg'
},
{ 
  name: '8_clubs',
  number: 8,
  semi: 'clubs', 
  valueCard: 8 , 
  valueCounter: 0 ,
  image:'cards/clubs_8.svg'
},
{ 
  name: '9_clubs',
  number: 9,
  semi: 'clubs', 
  valueCard: 9 , 
  valueCounter: 0 ,
  image:'cards/clubs_9.svg'
},
{ 
  name: '10_clubs',
  number: 10,
  semi: 'clubs', 
  valueCard: 10 , 
  valueCounter: -1 ,
  image:'cards/clubs_10.svg'
},
{ 
  name: 'JEK_clubs',
  number: 11,
  semi: 'clubs', 
  valueCard: 10 , 
  valueCounter: -1 ,
  image:'cards/clubs_11.svg'
},
{ 
  name: 'QUEEN_clubs',
  number: 12,
  semi: 'clubs', 
  valueCard: 10 , 
  valueCounter: -1 ,
  image:'cards/clubs_12.svg'
},
{ 
  name: 'KING_clubs',
  number: 13,
  semi: 'clubs', 
  valueCard: 10 , 
  valueCounter: -1 ,
  image:'cards/clubs_13.svg'
},
{ 
  name: '1_spades',
  number:1,
  semi: 'spades', 
  valueCard:1 , 
  valueCounter: -1 ,
  image:'cards/spades_1.svg'
},
{ 
  name: '2_spades', 
  number: 2,
  semi: 'spades', 
  valueCard: 2 , 
  valueCounter: 1 ,
  image:'cards/spades_2.svg'
},
{  
  name: '3_spades',
  number: 3,
  semi: 'spades',
  valueCard: 3 , 
  valueCounter: 1,
  image:'cards/spades_3.svg'
},
{ 
  name: '4_spades',
  number: 4,
  semi: 'spades', 
  valueCard: 4 , 
  valueCounter: 1 ,
  image:'cards/spades_4.svg'
},
{ 
  name: '5_spades',
  number: 5,
  semi: 'spades', 
  valueCard: 5 , 
  valueCounter: 1 ,
  image:'cards/spades_5.svg'
},
{ 
  name: '6_spades',
  number: 6,
  semi: 'spades', 
  valueCard: 6 , 
  valueCounter: 1 ,
  image:'cards/spades_6.svg'
},
{ 
  name: '7_spades',
  number: 7,
  semi: 'spades', 
  valueCard: 7 , 
  valueCounter: 0 ,
  image:'cards/spades_7.svg'
},
{ 
  name: '8_spades',
  number: 8,
  semi: 'spades', 
  valueCard: 8 , 
  valueCounter: 0 ,
  image:'cards/spades_8.svg'
},
{ 
  name: '9_spades',
  number: 9,
  semi: 'spades', 
  valueCard: 9 , 
  valueCounter: 0 ,
  image:'cards/spades_9.svg'
},
{ 
  name: '10_spades',
  number: 10,
  semi: 'spades', 
  valueCard: 10 , 
  valueCounter: -1 ,
  image:'cards/spades_10.svg'
},
{ 
  name: 'JEK_spades',
  number: 11,
  semi: 'spades', 
  valueCard: 10 , 
  valueCounter: -1 ,
  image:'cards/spades_11.svg'
},
{ 
  name: 'QUEEN_spades',
  number: 12,
  semi: 'spades', 
  valueCard: 10 , 
  valueCounter: -1 ,
  image:'cards/spades_12.svg'
},
{ 
  name: 'KING_spades',
  number: 13,
  semi: 'spades', 
  valueCard: 10 , 
  valueCounter: -1 ,
  image:'cards/spades_13.svg'
} 
]