export interface cardState { 
  id?:'' ,
  mazzo?:'' ,
  semi: "diamonds"|"hearts"|"clubs"|"spades"|null ,
  name: string ,
  value: number,
  image: string , 
}

export const mazzo: Array<cardState> = [
  { 
    semi: 'diamonds', 
    name: 'Asso',
    value: -1 ,
    image:'cards/1_quadri.svg'
  },
  { 
    semi: 'diamonds', 
    name: 'two',
    value: 1 ,
    image:'cards/2_quadri.svg'
  },
  { 
    semi: 'diamonds', 
    name: 'three',
    value: 1,
    image:'cards/3_quadri.svg'
  },
  { 
    semi: 'diamonds', 
    name: 'four',
    value: 1 ,
    image:'cards/4_quadri.svg'
  },
  { 
    semi: 'diamonds', 
    name: 'five',
    value: 1,
    image:'cards/5_quadri.svg'
  },
  { 
    semi: 'diamonds', 
    name: 'six',
    value: 1,
    image:'cards/6_quadri.svg'
  },
  { 
    semi: 'diamonds', 
    name: 'seven',
    value: 0,
    image:'cards/7_quadri.svg'
  },
  { 
    semi: 'diamonds', 
    name: 'eight',
    value: 0,
    image:'cards/8_quadri.svg' 
  },
  { 
    semi: 'diamonds', 
    name: 'nine',
    value: 0,
    image:'cards/9_quadri.svg'
  },
  { 
    semi: 'diamonds', 
    name: 'ten',
    value: -1 ,
    image:'cards/10_quadri.svg'
  },
  { 
    semi: 'diamonds', 
    name: 'eleven',
    value: -1,
    image:'cards/11_quadri.svg'
  },
  { 
    semi: 'diamonds', 
    name: 'twelve',
    value: -1,
    image:'cards/12_quadri.svg'
  },
  { 
    semi: 'diamonds', 
    name: 'thirteen',
    value: -1,
    image:'cards/13_quadri.svg'
  }, 
  { 
    semi: 'hearts', 
    name: 'Asso',
    value: -1,
    image:'cards/1_cuori.svg' 
  },
  { 
    semi: 'hearts', 
    name: 'two',
    value: 1 ,
    image:'cards/2_cuori.svg'
  },
  { 
    semi: 'hearts', 
    name: 'three',
    value: 1,
    image:'cards/3_cuori.svg'
  },
  { 
    semi: 'hearts', 
    name: 'four',
    value: 1 ,
    image:'cards/4_cuori.svg'
  },
  { 
    semi: 'hearts', 
    name: 'five',
    value: 1,
    image:'cards/5_cuori.svg'
  },
  { 
    semi: 'hearts', 
    name: 'six',
    value: 1,
    image:'cards/6_cuori.svg'
  },
  { 
    semi: 'hearts', 
    name: 'seven',
    value: 0,
    image:'cards/7_cuori.svg'
  },
  { 
    semi: 'hearts', 
    name: 'eight',
    value: 0,
    image:'cards/8_cuori.svg' 
  },
  { 
    semi: 'hearts', 
    name: 'nine',
    value: 0,
    image:'cards/9_cuori.svg'
  },
  { 
    semi: 'hearts', 
    name: 'ten',
    value: -1,
    image:'cards/10_cuori.svg' 
  },
  { 
    semi: 'hearts', 
    name: 'eleven',
    value: -1,
    image:'cards/11_cuori.svg'
  },
  { 
    semi: 'hearts', 
    name: 'twelve',
    value: -1,
    image:'cards/12_cuori.svg'
  },
  { 
    semi: 'hearts', 
    name: 'thirteen',
    value: -1,
    image:'cards/13_cuori.svg'
  }, 
  { 
    semi: 'spades', 
    name: 'Asso',
    value: -1,
    image:'cards/1_picche.svg' 
  },
  { 
    semi: 'spades', 
    name: 'two',
    value: 1 ,
    image:'cards/2_picche.svg'
  },
  { 
    semi: 'spades', 
    name: 'three',
    value: 1,
    image:'cards/3_picche.svg'
  },
  { 
    semi: 'spades', 
    name: 'four',
    value: 1,
    image:'cards/4_picche.svg' 
  },
  { 
    semi: 'spades', 
    name: 'five',
    value: 1,
    image:'cards/5_picche.svg'
  },
  { 
    semi: 'spades', 
    name: 'six',
    value: 1,
    image:'cards/6_picche.svg'
  },
  { 
    semi: 'spades', 
    name: 'seven',
    value: 0,
    image:'cards/7_picche.svg'
  },
  { 
    semi: 'spades', 
    name: 'eight',
    value: 0,
    image:'cards/8_picche.svg' 
  },
  { 
    semi: 'spades', 
    name: 'nine',
    value: 0,
    image:'cards/9_picche.svg'
  },
  { 
    semi: 'spades', 
    name: 'ten',
    value: -1,
    image:'cards/10_picche.svg' 
  },
  { 
    semi: 'spades', 
    name: 'eleven',
    value: -1,
    image:'cards/11_picche.svg'
  },
  { 
    semi: 'spades', 
    name: 'twelve',
    value: -1,
    image:'cards/12_picche.svg'
  },
  { 
    semi: 'spades', 
    name: 'thirteen',
    value: -1,
    image:'cards/13_picche.svg'
  }, 
  { 
    semi: 'clubs', 
    name: 'Asso',
    value: -1 ,
    image:'cards/1_fiori.svg'
  },
  { 
    semi: 'clubs', 
    name: 'two',
    value: 1 ,
    image:'cards/2_fiori.svg'
  },
  { 
    semi: 'clubs', 
    name: 'three',
    value: 1,
    image:'cards/3_fiori.svg'
  },
  { 
    semi: 'clubs', 
    name: 'four',
    value: 1,
    image:'cards/4_fiori.svg' 
  },
  { 
    semi: 'clubs', 
    name: 'five',
    value: 1,
    image:'cards/5_fiori.svg'
  },
  { 
    semi: 'clubs', 
    name: 'six',
    value: 1,
    image:'cards/6_fiori.svg'
  },
  { 
    semi: 'clubs', 
    name: 'seven',
    value: 0,
    image:'cards/7_fiori.svg'
  },
  { 
    semi: 'clubs', 
    name: 'eight',
    value: 0,
    image:'cards/8_fiori.svg' 
  },
  { 
    semi: 'clubs', 
    name: 'nine',
    value: 0,
    image:'cards/9_fiori.svg'
  },
  { 
    semi: 'clubs', 
    name: 'ten',
    value: -1,
    image:'cards/10_fiori.svg' 
  },
  { 
    semi: 'clubs', 
    name: 'eleven',
    value: -1,
    image:'cards/11_fiori.svg'
  },
  { 
    semi: 'clubs', 
    name: 'twelve',
    value: -1,
    image:'cards/12_fiori.svg'
  },
  { 
    semi: 'clubs', 
    name: 'thirteen',
    value: -1,
    image:'cards/13_fiori.svg'
  },

]

 