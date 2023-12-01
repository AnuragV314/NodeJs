function display(title, ...empName) // REST parameter
{
    for (let ename of empName){
        console.log(ename)
    }
}
const title= 'Displaying Employee Names.';
let employeeNames = ['Anurag', 'Shanu', 'Kumar', 'Verma'];

display(title, ...employeeNames)// SPREAD OPERETOR
