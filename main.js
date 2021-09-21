function BMI(){
    let w = document.querySelector("#weight").value;
    let h = document.querySelector("#heigth").value/100;
    let bmi = w/(h*h);
    document.querySelector("h2").innerHTML=bmi.toFixed(1);
    if(bmi<18.5){
        document.querySelector("h1").innerHTML=("Underweight");
        let w = document.querySelector("#weight").value="";
        let h = document.querySelector("#heigth").value="";
    }
    else{
        if(bmi>=18.5 && bmi<=24.9){
            document.querySelector("h1").innerHTML=("Normal weight");
            let w = document.querySelector("#weight").value="";
            let h = document.querySelector("#heigth").value="";
        }
        else{
            document.querySelector("h1").innerHTML=("Overweight");
            let w = document.querySelector("#weight").value="";
            let h = document.querySelector("#heigth").value="";
        }
    }
    return false;
}
document.addEventListener("DOMContentLoaded",function(){
    document.querySelector("form").onsubmit=BMI;
})
