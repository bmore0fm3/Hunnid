// get the values from the page
//Starts or controller function
function getValues (){
     //get values from the page 
     let startValue = document.getElementById("startValue").value;
     let endValue = document.getElementById("endValue").value;


     //parse strings into ints
     startValue = parseInt(startValue);
     endValue = parseInt(endValue);

     if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        // call generateNumbers
        let numbers = generateNumbers(startValue, endValue);

        //call display numbers
        displayNumbers(numbers);

     }else {
        alert("Number must be an Integer");
    
     }

}

//generate numbers from start value to end value
//logic functions()
function generateNumbers(startValue, endValue){
    let numbers = [];
    for (let index = startValue; index <= endValue; index++) {
        numbers.push(index);  
    }

    return numbers;
}

//display the numbers and mark even numbers in bold
//display or view functions


function displayNumbers(numbers){
    let templateRows = " ";
    for (let index = 0; index < numbers.length; index++) {
    
        let number = numbers[index];
        let className = "even";
        
        if(number % 2 === 0){
            className = "even";

        } else {
            className = "odd";

       }
       templateRows += `<tr><td class=${className}>${number}</td></tr>`
        
    }
    document.getElementById("results").innerHTML = templateRows;

}