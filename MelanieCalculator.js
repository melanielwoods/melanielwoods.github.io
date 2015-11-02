var num1;
var num2;
var operand;
function SetValueText(a){
          if (document.getElementById("calculatorValue").value == "")   {
                document.getElementById("calculatorValue").value = a;
        }
            else{
                document.getElementById("calculatorValue").value += a;
            };
            num1 == a;
}

function setOperand(x){
    operand = x;
    document.getElementById("calculatorValue").value = "";
}

function doMath(operand){
    num2 == document.getElementById("calculatorValue").value;
    if (operand == "+")
        {document.getElementById("calculatorValue").value == num1 + num2;}
    else if (operand == "-") /* logic for num1 < num2 */
        {document.getElementById("calculatorValue").value == num1 - num2;}
    else if (operand == "*")
        {document.getElementById("calculatorValue").value == num1 * num2;}
    else 
        /* logic to check num1 <> 0 */
        {document.getElementById("calculatorValue").value == num1 / num2;}
}

function square(a){
    document.getElementById("calculatorValue").value *= a;
}

function reciprocal(a){
        if (document.getElementById("calculatorValue").value != 0)
            document.getElementById("calculatorValue").value = 1/document.getElementById("calculatorValue").value;
}
