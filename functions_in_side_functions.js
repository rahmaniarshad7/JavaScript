function myfunction()
{
  console.log("Function called");

  function fun2()
  {
    console.log("Inside Functions Called");
    
  }
  fun2();
  //inside functions called always inside main function
  
}
myfunction();