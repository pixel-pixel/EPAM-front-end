'use strict';

class Pizza {
  constructor(size, type) {
    Pizza.SIZE_S = 'SMALL'
    Pizza.SIZE_M = 'MIDDLE'
    Pizza.SIZE_L = 'LARGE'

    Pizza.TYPE_VEGGIE = 'VEGGIE'
    Pizza.TYPE_MARGHERITA = 'MARGHERITA'
    Pizza.TYPE_PEPPERONI = 'PEPPERONI'

    Pizza.EXTRA_TOMATOES = 'TOMATOES'
    Pizza.EXTRA_CHEESE = 'CHEESE'
    Pizza.EXTRA_MEAT = 'MEAT'

    this.allowedSizes = [
      Pizza.SIZE_S,
      Pizza.SIZE_M,
      Pizza.SIZE_L
    ]
    this.allowedTypes = [
      Pizza.TYPE_VEGGIE,
      Pizza.TYPE_MARGHERITA,
      Pizza.TYPE_PEPPERONI
    ]
    this.allowedExtraIngredients = [
      Pizza.EXTRA_TOMATOES,
      Pizza.EXTRA_CHEESE,
      Pizza.EXTRA_MEAT
    ]

    this.price = 0
    this.extra = []

    if (arguments.length !== 2) {
      throw new PizzaException(`Required two arguments, given: ${arguments.length}`)
    }

    this.size = size
    this.type = type

    switch (size) {
      case Pizza.SIZE_S:
        this.price += 50
        break
      case Pizza.SIZE_M:
        this.price += 75
        break
      case Pizza.SIZE_L:
        this.price += 100
        break
      default:
        throw new PizzaException('Invalid type')
    }

    switch (type) {
      case Pizza.TYPE_VEGGIE:
        this.price += 50
        this.allowedExtraIngredients.splice(this.allowedExtraIngredients.indexOf(type), 1)
        break
      case Pizza.TYPE_MARGHERITA:
        this.price += 60
        break
      case Pizza.TYPE_PEPPERONI:
        this.price += 70
        break
      default:
        throw new PizzaException('Invalid type')
    }
  }

  addExtraIngredient(ingredient) {
    if (this.extra.includes(ingredient)) {
      throw new PizzaException('Duplicate ingredient')
    }

    if (!this.allowedExtraIngredients.includes(ingredient)) {
      throw new PizzaException('Invalid ingredient')
    }

    switch (ingredient) {
      case Pizza.EXTRA_TOMATOES:
        this.price += 5
        break

      case Pizza.EXTRA_CHEESE:
        this.price += 7
        break

      case Pizza.EXTRA_MEAT:
        this.price += 9
        break

      default:
        throw new PizzaException('Invalid ingredient')
    }

    this.extra.push(ingredient)
  }

  removeExtraIngredient(ingredient) {
    if (!this.extra.includes(ingredient)) {
      throw new PizzaException('Ingredient not found')
    }

    switch (ingredient) {
      case Pizza.EXTRA_TOMATOES:
        this.price -= 5
        break

      case Pizza.EXTRA_CHEESE:
        this.price -= 7
        break

      case Pizza.EXTRA_MEAT:
        this.price -= 9
        break

      default:
        throw new PizzaException('Invalid ingredient')
    }

    this.extra.splice(this.extra.indexOf(ingredient), 1)
  }

  getSize() {
    return this.size
  }

  getPrice() {
    return this.price
  }

  getExtraIngredients() {
    return this.extra
  }

  getPizzaInfo() {
    return `Size: ${this.size}, type: ${this.type}; extra ingredients: ${this.extra}; price: 114UAH.`
  }
}

class PizzaException extends Error {
  constructor(msg) {
    super(msg);
    this.name = 'PizzaException'

    this.log = msg
  }
}