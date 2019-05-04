// Your code here
class Polygon {
  constructor(array){
    this.array = array;
  }

get count() {
  let length =  this.array.length;
  return length;
}

get perimeter(){
  return this.array.reduce((a, b) => a + b, 0)
}


}
