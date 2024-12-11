let a: number = 1;
console.log(a);

let num1: number = 1;
let num3: number = 1_7238452_62;
let num2: bigint = 1217382472358n;
console.log(num1, num2, num3);

let charString: string = "Helloo";
let isAvailable: boolean = true;
console.log(charString, isAvailable);

let numArray: number[] = [1, 2, 3];
let charArray: string[] = ["a", "B"];
console.log(numArray, charArray);

let val: null = null;

let obj: { name: string; age: number } = {
  name: "jee",
  age: 23,
};

// or
let obj1: object = {
  name: "naveen",
  age: 77,
};
obj1 = { ...obj1, phone: 7766445522 };
console.log(obj1);

let valArray:[number, string] = [1, "jee"]

// pascal case

// enum give the index number if the value is not defined if the value is defined it return the value
enum Color {
  red,
  blue,
  green,
}
console.log(Color.green);

// unknow it take any type like number / string data type
let notSure : unknown = 'a'

if(typeof(notSure) === 'number'){
    notSure.toFixed(2)
}else if(typeof(notSure) === 'string'){
    notSure.length;
}

// never type
function infinateLoop() :never{
    let count = 0;
    while(true){
        console.log(count);
        count++
    }
}

infinateLoop();

function throwError(message: string): never {
  throw new Error(message);
}

throwError("something went wrong")

// void type never return any value
function logMessage(msg: string): void {
  console.log(msg);
}

//type inference
var data = "jeelani"
console.log(data);

//type assertion

let someValue : any = "Hello world";
let strLength :number = (someValue as string).length
console.log(strLength);

// union type
let id: string | number;
id: "abc";
id: 123;

function printId(id: string | number) {
  console.log(`id is ${id}`);
}

printId("abc");
printId(123);

// type narrowing
function printIdFn(id: string | number) {
  if (typeof id === "string") {
    console.log(`id is string ${id}`);
  } else console.log(`id is a number ${id}`);
}

printIdFn('abc');

// interface
interface Person {
  name: string;
  age: number;
  greet: () => void;
}
function greet() {
  console.log("great work");
}
let person: Person = {
  name: "basha",
  age: 20,
  //   greet() {
  //     console.log("great work");
  //   },
  greet
};

console.log(person.greet());

// // interface functions types

interface MathOp {
  (a: number, b: number): number;
}

const add: MathOp = (a, b) => a + b;
const substract: MathOp = (a, b) => a - b;

console.log(`addition: ${add(1, 4)}`);
console.log(`substraction: ${substract(4, 1)}`);

type alias
type UserId = string;

let user: UserId = "mahaboob";

type Person = {
  name: string;
  age: number;
};

let person2: Person = {
  name: "Mahaboob",
  age: 23,
};

console.log(person2.name);

// interface & type alias
interface User {
  name: string;
  phone: number;
}

interface Customer extends User {
  address: string;
}

interface User {
  address: string;
}

let myCustomer: User = {
  name: "mahaboob",
  phone: 123,
  address: "chow",
};

type Vehical = {
  make: string;
  model: string;
};

// & -> intersection type
type Car = Vehical & {
  isElectrical: boolean;
};

type Vehical = {
  isElectrical: boolean;
};

let myCar: Vehical = {
  make: "Tata",
  model: "Tata Punch",
  isElectrical: true, // error
};

type MathOp1 = (a: number, b: number) => number;
let add: MathOp1 = (a, b) => a + b;
console.log(add(1, 3));

type status = "active" | "pending" | "completed";
let userStatus: status = "active";
console.log(userStatus);

// // using recursive
type Tree = {
  value: string;
  children: Tree[];
};

let tree: Tree = {
  value: "Maha123",
  children: [
    {
      value: "childre123",
      children: [{ value: "grandChild123", children: [] }],
    },
  ],
};
