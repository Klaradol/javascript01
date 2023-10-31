
function myNumber(){
 
  const inputAge = document.getElementById("num").value;

  if(inputAge >= 18){
  console.log("jste dospělý")
}  else if(inputAge < 18){
  console.log("jste ještě dítě")
}
}

function myNumber1(){

  const inputAge1 = document.getElementById("num1").value;

  if(inputAge1 <= 2005){
  console.log("přistup povolen")
}  else if(inputAge1 > 2005){
  console.log("přístup zamítnut")
}
}

function ifAgeFunction () {
   
  let inputAge = parseInt(document.getElementById("inputAge").value)



  if (inputAge < 18){
      document.getElementById("outputAge").value = "Mladý uživatel"

  } else if (inputAge >= 18 && inputAge < 200){
      document.getElementById("outputAge").value = "Dospělý uživatel"

  } else if( inputAge > 18 < 0) {
         

  } else if (inputAge <= 2005) {
      document.getElementById("outputAge").value = "Jsi Dospělý"


  } else if (inputAge > 2005){
      document.getElementById("outputAge").value = "Jsi moc Mladý"

  }



}










function forCycle(){

let userInput = parseInt(document.getElementById("cycleInput").value)
let output=""

    for(let i = 0; i < userInput; i++){

      output = output + "."

        document.getElementById("output").innerHTML= output
    }
}
   
    
 


