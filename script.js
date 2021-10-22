function orderingPizza(order) {
  let n = prompt("Input number of pizzas");
  for (let i = 0; i < n; i++) {
    let order = prompt("Input your order");
    switch (order) {
      case "1":
        document.write("Pizza with mushrooms");
        break;
      case "2":
        document.write("Pizza with chicken and pinapple");
        break;
      default:
        alert("Try again");
    }
  }
}
document.write("Your order:");
orderingPizza();
