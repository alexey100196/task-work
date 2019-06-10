let textArea = document.getElementsByTagName('textarea')[0]

class Food {
  constructor(name, price, ingredients) {
    this.name = name;
    this.price = price;
    this.ingredients = ingredients;
  }
  orderIsReady() {
    textArea.value += (`start cooking ${this.name}: \n`)
    setTimeout(() => {
      textArea.value += (` ${this.name} cooked \n`)
      this.count++
      textArea.value += (` ${this.name}: ${this.count} \n \n`)
      document.querySelector(this.countSelector).innerHTML = this.count
    }, this.cookTime)
  }
  giveOrder() {
    let sumCount = +document.querySelector('.cook_count-pizza').innerHTML + +document.querySelector('.cook_count-burger').innerHTML + +document.querySelector('.cook_count-taco').innerHTML;
    document.querySelector('#orderDone').innerHTML = sumCount
    setTimeout(() => {
      document.querySelector(this.countSelector).innerHTML = this.count = 0
    }, 100)
    textArea.value = (``)
  }
}
class Pizza extends Food {
  constructor(name, price, ingredients, count, cookTime = 1500, countSelector = '.cook_count-pizza') {
    super(name, price, ingredients, countSelector);
    this.count = count;
    this.cookTime = cookTime;
    this.countSelector = countSelector
  }
}
class Burger extends Food {
  constructor(name, price, ingredients, count, cookTime = 500, countSelector = '.cook_count-burger') {
    super(name, price, ingredients, countSelector);
    this.count = count;
    this.cookTime = cookTime;
    this.countSelector = countSelector
  }
}
class Taco extends Food {
  constructor(name, price, ingredients, count, cookTime = 1000, countSelector = '.cook_count-taco') {
    super(name, price, ingredients, countSelector);
    this.count = count;
    this.cookTime = cookTime;
    this.countSelector = countSelector
  }
}

const pizza = new Pizza('pizza', 14, ['mozzarella ', 'papironi', 'lamborginy'], 0);
const burger = new Burger('Burger', 10, ['bred ', 'cheese', 'cucumber'], 0);
const taco = new Taco('Taco', 12, ['arr1 ', 'arr2', 'arr3'], 0);

document.querySelector('body').addEventListener('click', startCook);
function startCook(e) {
  if (!e.target.classList.contains('btn')) return false
  let dataBtn = e.target.getAttribute('data-btn');
  switch (dataBtn) {
    case 'pizza':
      pizza.orderIsReady()
      break
    case 'burger':
      burger.orderIsReady()
      break
    case 'taco':
      taco.orderIsReady()
      break
  }
}

document.querySelector('.btn_order').addEventListener('click', function () {
  pizza.giveOrder()
  burger.giveOrder()
  taco.giveOrder()
});





