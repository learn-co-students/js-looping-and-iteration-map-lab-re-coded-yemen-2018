// Code your solution in this file.
function lowerCaseDrivers(array){
  let newArray = [];
  
  for (let element of array){
    newArray.push(element.toLowerCase());
  }
  return newArray;
}
function nameToAttributes(array){
  let newArray=[];
  for (let element of array){
    let firstName = element.split(" ")[0];
    let lastName = element.split(" ")[1];
    
    newArray.push({firstName: firstName, lastName: lastName});
  }
  return newArray;
  
}

function attributesToPhrase(array){
  let newArray=[];
  for (let element of array){
    newArray.push(`${element.name} is from ${element.hometown}`);
    
  }
  
  return newArray;
}





