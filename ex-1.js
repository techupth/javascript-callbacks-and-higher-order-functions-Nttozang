// Exercise #1: For Each Function
const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = [];

function forEach(array, operation) {
  for(let i = 0; i < array.length; i++){
    newEmployeeSalaries.push(operation(array[i]));
  }
  return newEmployeeSalaries ;
}

const newBonus  = (salary) => {return salary + 5000;}

forEach(employeeSalaries,newBonus);

console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]