// Write your solution in this file!
const employee = { name: "Steve", streetAddress: "around"
};
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = {...employee};
    newEmployee[key] = value; 
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const DeletedEmployeeObject = {...employee}
    delete DeletedEmployeeObject[key];
    return DeletedEmployeeObject; 
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}