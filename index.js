function change (){
    const randomColor = Math.floor(Math.random() * 10000);
    
    var mata = document.body.style.backgroundColor = "#" + randomColor;
//   randomColor.innerHTML = "#" + randomColor;
    let click = document.querySelector("button");   
    console.log(mata);
    click.addEventListener('click',()=>click.style.backgroundColor=mata);
    console.log(mata);
}




document.getElementById("button").addEventListener("click",change);

