function bmicalculator(weight, height){
    var bmi = Math.round(weight/Math.pow(height,2));
    var interpretation;
    if (bmi<=18.5){
        interpretation = "Your are underweight";
    } 
    else if (bmi>=18.5 && bmi<=24.9){
        interpretation ="Your have a normal weight"; 
    } else {
        interpretation ="Your have overweight";
    }
}

bmicalculator(68, 6);

// this program is not working see later