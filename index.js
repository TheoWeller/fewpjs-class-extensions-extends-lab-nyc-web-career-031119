// Your code here
class Polygon {
  constructor(array){
    this.array = array;
  }

get count() {

  return this.array
}

get perimeter(){
  return this.array.reduce((a, b) => a + b, 0)
}


}
