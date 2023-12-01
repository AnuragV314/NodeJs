function display(title, ...empName) // REST parameter
{
    // console.log(title)
    // console.log(empName)
    // console.log(typeof empName)
    // console.log(Array.isArray(empName))
    for (let eName of empName){
        console.log(eName)
    }
}
const title= 'Displaying Employee Names.'
// display(title, 'Anurag')
// display(title, 'Anurag', 'Shanu')
display(title, 'Anurag', 'Shanu', 'Anurag', 'Shanu')

