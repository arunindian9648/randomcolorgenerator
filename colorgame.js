let btn=document.querySelector("button");
btn.addEventListener("click",function(){
    // console.log("Button clicked!");
    let rColor=func(); 
    let h3=document.querySelector("h2");
    h3.innerText=`Generated color is: ${rColor} `;
   
    
    document.querySelector('div').style.backgroundColor=rColor;
});
function func(){
    let red=Math.floor(Math.random()*256);
    let green=Math.floor(Math.random()*256);
    let blue=Math.floor(Math.random()*256);
    let color=`rgb(${red},${green},${blue})`;
    return color;

}
