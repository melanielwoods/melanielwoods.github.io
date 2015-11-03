var num1;
var num2;
var operand = "";

function SetValueText(a) {
        
          if ($("#calculatorValue").val() === "")   {
                document.getElementById("calculatorValue").value = a;
        }
            else{
                document.getElementById("calculatorValue").value += a;
            };
        if (operand == ""){
            num1 = a;
        }
}

function setOperand(x) {
    operand = x;
    $("#calculatorValue").val("") ;
}

function doMath() {
    num2 = document.getElementById("calculatorValue").value;
    num2 = parseFloat(num2);
    if (operand == "+")
        {document.getElementById("calculatorValue").value = num1 + num2}
    else if (operand == "-")
        {document.getElementById("calculatorValue").value = num1 - num2;}
    else if (operand == "*")
        {document.getElementById("calculatorValue").value = num1 * num2;}
    else
        if (num2 != 0)
            {document.getElementById("calculatorValue").value = num1 / num2;}
        else
            alert("Cannot divide by zero");
}

function square() {
    num1 = $("#calculatorValue").val();
     /* debugger */
    $("#calculatorValue").val(num1*num1);
}

function reciprocal(a) {
        if ($("#calculatorValue").val() != 0)
            document.getElementById("calculatorValue").value = 1/$("#calculatorValue").val();
}
