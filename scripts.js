var liters = parseInt(prompt("enter amount in liters"));
var gallons;

function conversion(liters){
    var gallons = 0.26 * liters;
    
    return gallons;
}

alert(" is equal to " + conversion(liters));