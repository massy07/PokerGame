import { getRandomInt } from "../../store/reducer/decksStore";

export interface ArrayBoxState { 
  id:string,
  name:string, 
  image:string,
  view:boolean,
}

export const ArrayBox = [
  {
    id:'001',
    name:'auto', 
    image:'quiz/auto.png',
    view:false,
  },
  {
    id:'002',
    name:'capra', 
    image:'quiz/capra.png',
    view:false,
  },
  {
    id:'003',
    name:'capra', 
    image:'quiz/capra.png',
    view:false
  }
]

export const shuffleArray = () => {
  var arrayTemp=ArrayBox
  for (var i = arrayTemp.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = arrayTemp[i];
      arrayTemp[i] = arrayTemp[j];
      arrayTemp[j] = temp;
  }
  return arrayTemp
}

export const mixPrizeArray = () => {
  var num = getRandomInt(3)
  var arrayPrize= []
  for(var i=0; i<3; i++ ){
    if(num===i){
      arrayPrize[i]=1
    }else arrayPrize[i]= 0
  }
  return arrayPrize
}