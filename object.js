let obj = {
  name: "Arshad Rahmani",
  age: 21,
  occupation: "Software Developer",
  address: {
    city: "Dehradun",
    state: "Uttarakhand",
    country: "India"
  },
  personalInfo: {
    hobbies: ["Reading", "Coding", "Travelling"],
    contact: [9318364519 , 7361092598],
    education: {
      school: "Model Public School , Araria", 
      highSchool: "Al Shamsh Millia College , Araria",
      college: "Uttaranchal Institute of Technology , Dehradun",
      degree: "Bachelor of Technology",
      speclization: "Computer Science"
    }

  }
}
//adding key and value in objects on runtime
//syntax object-name.key-name = "value"
//example
obj.nativeHome = "Araria";
//printing one by one value from objects using loo
for(let i in obj){
  console.log(i);
  
}


