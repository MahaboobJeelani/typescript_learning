/* 
Generics are a way to create components (functions, classes or interfaces) that work with difference types without losing the safty
*/

function genericIdentity<generic>(args: generic): generic {
  return args;
}

console.log(genericIdentity<number>(10));
console.log(genericIdentity<string>("Hello world"));
console.log(genericIdentity<boolean>(true));

// // generic Interface
interface KeyPair<T, U> {
  key: T;
  value: U;
}

let KeyPairValue: KeyPair<string, number> = {
  key: "Hello world",
  value : 23
};

console.log(KeyPairValue);

// // generic constrains
function getLength<T extends {length:number}>(item:T):number{
    return item.length
}

console.log(getLength("Hello"));

// // generic classes
class Box<T> {
  contents: T;
  constructor(value: T) {
    this.contents = value;
  }

  getContents(): T {
    return this.contents;
  }
}

const numberBox = new Box(100);
console.log(numberBox.getContents());

const stringBox = new Box("Hello world");
console.log(stringBox.getContents());


class Stack<T>{
    private items:T[] = []

    push(item : T):void{
        this.items.push(item);
    }

    pop():T| undefined{
        return this.items.pop()
    }

    getStack():T[]{
        return this.items
    }
}

const stack = new Stack();
stack.push(10)
stack.push(11)
console.log(stack.getStack());
console.log(stack.pop());
console.log(stack.getStack());




