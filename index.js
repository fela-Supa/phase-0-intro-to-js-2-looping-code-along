// Code your solution here
function writeCards(string_name, event_name)
{
    var array_store = []; 
    for (let counter = 0; counter < string_name.length; counter++)
    {    
        array_store.push(`Thank you, ${string_name[counter]}, for the wonderful ${event_name} gift!`);
        
    }
    return array_store;
}

 function countDown(integer)
 {
    
    while (integer >= 0)
    {
        console.log(integer)
        integer--;
    }
 }