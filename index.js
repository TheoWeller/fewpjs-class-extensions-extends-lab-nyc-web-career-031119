// Your code here
class Polygon {
  constructor(array){
    this.array = array;
  }
  get getCount() {
    return this.array.length
  }
  get perimeter(){
    return this.array.reduce((a, b) => a + b, 0)
  }
}

class Triangle extends Polygon {
  get isValid(){
    this.getCount === 3 ? true : false;
  }
}
