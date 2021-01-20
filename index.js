function change (){
    // Here we have the variables selectors for the 
    // h3 tag where the curent color will be shown and the body selecor
    var css = document.querySelector("h3");
    var body = document.getElementById("gradient");
    
    // Here we have the math function to get a random 4 digit number.
    // the number of zeros shows how many digits we will have
    const randomColor = Math.floor(Math.random() * 10000);
    
    // here we set the background to inherit the number we generated above 
    var number = document.body.style.backgroundColor = "#" + randomColor;


//   randomColor.innerHTML = "#" + randomColor;

    // this is for the button to change color when clicked, so we have the variable for the button
    let click = document.querySelector("button");   
    console.log(number);
    
    //here we add and event listener to the buton and we tell it
    // that when it's clicked to inherit the color from the random generated number
    click.addEventListener('click',()=>click.style.backgroundColor=number);
    
    
    //here we assign the current color generated to the body and the function add's 
    //in the empty h3 delared above the current color of 
    //the background which changes everytime we click the button
    var currentColor = (document.getElementById("gradient").style.backgroundColor);
    function setGradient(){
    
        css.textContent = currentColor;
    
    }
    setGradient();
}

// here we call the above change function to change the background color,
// the button color and display the current background color in rgba
document.getElementById("button").addEventListener("click",change);
