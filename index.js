// Code your solution in this file
function findMatching(array, name){
  
  const matchingNames = [];
  
  for (const userName in array){
    if (userName === name){
      matchingNames.push(name)
    }
  }
  
  return matchingNames;
}