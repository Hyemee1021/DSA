function cakes(recipe, available) {

  //object x iterate -> change to 
  //input-2  object
//{floor:1 , sugar:1}, {floor:2, sugar:1}- 1
//available.floor / recipe.floor = 2
//available.sugar / recipe.sugar = 1
//Math.min(2, 1 )

  //{flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200});/-2
  let smallest = Infinity
  for(let key of Object.keys(recipe) ){
    //availiable.key x- it will look for property named key
 //do i have every properties in ava~~
    if(available[key] === undefined){
      
      return 0
    }
    //keep track of the smallest number
    

//for(let key of Object.keys(recipe) )- base on properties of recipe
   
    let current =  Math.floor(available[key] /recipe[key])
    smallest = Math.min(smallest, current)
    

//I divide available properties / recipe properties
//devision- every result.floor-> current

//compare Math.min(current, next)-> to store current-> 
//value in current-> smallest

    
  }
  //I access to property "flour" from two objects

  //.acailable has to have ingredients of recipe-check property-

  // {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});-return 0


  //available.flour / recipe.flour = number ->  floor it. 
  //output - number of cake can make out of ingrediant
   return smallest
}

console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}))