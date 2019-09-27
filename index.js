class Circle {
  constructor(radius) {
    this.radius = radius
  }

  get diameter() {
    return this.radius * 2
  }

  get circumference() {
    return this.diameter * Math.PI
  }
  
  get area() {
    return Math.PI * (this.radius ** 2)
  }



  set diameter(newD) {
    this.radius = newD/2
  }

  set circumference(newC) {
    this.diameter = newC / Math.PI
  }
  
  set area(newA) {
    this.radius = sqrt(Math.PI/NewA)
  }

}
