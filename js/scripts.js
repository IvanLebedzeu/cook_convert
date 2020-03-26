//var liters = parseInt(prompt("enter amount in liters"));
//var gallons;

//function conversion(liters){
    //var gallons = 0.26 * liters;
    
    //return gallons;
//}

//alert(" is equal to " + conversion(liters));

var littersToGallons = function(num1) {
    return num1 * 0.26;
}

var killosToPounds = function(num1) {
    return num1 / 2.21;
}

var littersToOunces = function(num1) {
    return num1 * 33.8;
}

$(document).ready(function() {
    $("form#littersToGallons").submit(function(event) {
      event.preventDefault();
      var num1 = parseInt($("#add1").val());
      var result = littersToGallons(num1);
      $("#output").text(result);
      //alert(add(number1, number2));
    });

    $("form#killosToPounds").submit(function(event) {
        event.preventDefault();
        var num1 = parseInt($("#add2").val());
        var result = killosToPounds(num1);
        $("#output").text(result);
        //alert(add(number1, number2));
      });

      $("form#littersToOunces").submit(function(event) {
        event.preventDefault();
        var num1 = parseInt($("#add3").val());
        var result = littersToOunces(num1);
        $("#output").text(result);
        //alert(add(number1, number2));
      });

});
