
class Food {
    constructor(name , price, ingredients) {
      this.name = name;
      this.price = price;
      this.ingredients = ingredients;
    }
    addCount() {
      this.count++
      console.log(`${this.count}`)
    }
    orderIsReady() {
      console.log(`start cooking ${this.name}:`)
      setTimeout(() => {
        console.log(`${this.name} cooked`)
        this.count++
        console.log(`${this.name}: ${this.count}`)
      }, this.cookTime)
    }
    addPizzaCount() {
      setTimeout(() => {
        document.querySelector('.cook_count-pizza').innerHTML = this.count
      }, this.cookTime)
  }
    addBurgerCount() {
      setTimeout(() => {
        document.querySelector('.cook_count-burger').innerHTML = this.count
      }, this.cookTime)
    }
    addTacoCount() {
      setTimeout(() => {
        document.querySelector('.cook_count-taco').innerHTML = this.count
      }, this.cookTime)
  }
  giveOrder() {
    let sumCount = +document.querySelector('.cook_count-pizza').innerHTML + +document.querySelector('.cook_count-burger').innerHTML + +document.querySelector('.cook_count-taco').innerHTML;
    document.querySelector('#orderDone').innerHTML = sumCount
    setTimeout(() => {
      document.querySelector('.cook_count-pizza').innerHTML =  this.count = 0
      document.querySelector('.cook_count-burger').innerHTML =  this.count = 0
      document.querySelector('.cook_count-taco').innerHTML =  this.count = 0
    }, 100)
    console.log(sumCount)
  }
}
class Pizza extends Food {
  constructor(name , price, ingredients, count, cookTime = 1500) {
    super (name, price, ingredients,);
    this.count = count;
    this.cookTime = cookTime
  }  
}
class Burger extends Food {
  constructor(name , price, ingredients, count, cookTime = 500) {
    super (name, price, ingredients);
    this.count = count;
    this.cookTime = cookTime
  }
}
class Taco extends Food {
  constructor(name , price, ingredients, count, cookTime = 1000) {
    super (name, price, ingredients);
    this.count = count;
    this.cookTime = cookTime
  }
}
let pizza = new Pizza('pizza', 14, ['mozzarella ' , 'papironi', 'lamborginy'], 0);
let burger = new Burger('Burger', 10, ['bred ' , 'cheese', 'cucumber'], 0);
let taco = new Taco('Taco', 12,  ['arr1 ' , 'arr2', 'arr3'], 0);

document.querySelector('#cook-pizza').addEventListener('click', function(){
    pizza.orderIsReady()
    pizza.addPizzaCount()
  });
document.querySelector('#cook-burger').addEventListener('click', function() {
    burger.orderIsReady()
    burger.addBurgerCount()
  })
document.querySelector('#cook-taco').addEventListener('click',  function() {
    taco.orderIsReady()
    taco.addTacoCount()
  });

let textCount = document.querySelector('.cook_count') 

document.querySelector('.btn_order').addEventListener('click', function(){
    pizza.giveOrder()
    burger.giveOrder()
    taco.giveOrder()
});

var select = document.querySelector('#orderDone');
    document.addEventListener('DOMContentLoaded', function () {
      document.querySelector('#orderDone').innerHTML = localStorage.getItem('theme')
    })
    select.addEventListener('click', function () {
        localStorage.setItem('theme', select.value)
    })