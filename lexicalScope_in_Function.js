/*
Lexical scope is the ability for a function scope to access variables from the parent scope. We call the child function to be lexically bound by that of the parent function.

example
 */
function outer() {
  var x = 20;

  function inner() {
      var y = 30;
      console.log(y);
      console.log(x) // Accessible because of lexical scope

      function inner_inner(){
        var z = 40;
        console.log(x);
        console.log(y);
        console.log(z);
        
      }
      inner_inner();
  }
 

  inner();
  // console.log(y); // This would result in an error as z is not accessible here
}

outer(); 
/*
We declared a variable x scope of function outer, and another variable y in the function inner. The inner function has access to both its own scope (inner) and the scope of its parent function (outer), demonstrating lexical scoping. Variable y is not accessible outside of the inner function because it is limited to the lexical scope of that function.

NOTE: JavaScript uses a scope chain to find variables accessible in a certain scope. When a variable is referred to, JavaScript will look for it in the current scope and continue to parent scopes until it reaches the global scope. This chain of traversed scopes is called the scope chain.
*/