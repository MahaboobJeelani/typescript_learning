// // function overloading

function getLength(value:string): number
function getLength(value:any[]):number
function getLength(value:any):number{
    return value.length
}

console.log(getLength('Hello'));
