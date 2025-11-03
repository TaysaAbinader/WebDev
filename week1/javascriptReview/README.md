## What is the difference between function declaration and function expression?

Answer:

In function declaration, the function is declared using the function keyword, and its name is bound to the current scope. It makes the function hoisted, in other words, it can be called before the function declaration, considering it's evaluated at parse time.

In function expression, the function is created as part of an expression, through a variable assignment for example, and it can or can't be named. It makes the function not hoisted, so it can't be called before its declaration, being evaluated at runtime.


## Why does JavaScript output undefined instead of throwing an error in the following code?
```
console.log(message);

var message = 'Hi there!';
```

Answer:

Because while being of type var, the variable name is hoisted before the call, and before its assignment it has a default value as undefined. In this case, it was called before assignment.


## Why does JavaScript throw an error instead of logging undefined in the following code?
```
console.log(message);

let message = 'Hi there!';
````

Answer:

In the case of variable types let and const, even though they are also hoisted, they are kept on the Temporal Dead Zone (TDZ), which is the time between a variable being defined and being assigned where it can't be called without js throwing an error. Exactly what is happening in this case.


## Explain precisely what happens when the following code is executed.
```
console.log(showMessage());

const showMessage = function(){
  return 'Hi there!';
};
````

Answer:

It will throw an error, considering it's function expression it's not hoisted, so it can't be called before declaration.


## Why does JavaScript not throw any errors when the following code is executed?
```
console.log(showMessage());

function showMessage(){
  return 'Hi there!';
}
````

Answer:

In this case we're seeing a function declaration, which makes it hoisted and evaluated at parse time, so it can be called before declaration.
