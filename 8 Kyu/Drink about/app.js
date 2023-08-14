function peopleWithAgeDrink(age) {
  if (age < 14) return "drink toddy";
  else if (age < 18) return "drink coke";
  else if (age < 21) return "drink beer";
  else return "drink whisky";
}

// const peopleWithAgeDrink = (age) =>
//   age < 14 ? "drink toddy" :
//   age < 18 ? "drink coke" :
//   age < 21 ? "drink beer" : "drink whisky"

// function peopleWithAgeDrink(age){
// 	if(age < 14)
// 		drink = 'toddy';
// 	else if(age < 18)
// 		drink = 'coke'
// 	else if(age < 21)
// 		drink = 'beer';
// 	else if(age => 21)
// 		drink = 'whisky';
// 	return 'drink ' + drink;
// }
