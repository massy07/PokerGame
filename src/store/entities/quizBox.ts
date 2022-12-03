export interface boxQuizState {  
  name: string,
  showBox: boolean,
  value: number,
  image: string , 
}

export const goat: boxQuizState = {  
    name: "goat",
    showBox: false,
    value: 0,
    image: "quiz/goat.png" , 
  } 

export const car: boxQuizState = {  
  name: "car",
  showBox: false,
  value: 1,
  image: "quiz/car.png" , 
} 