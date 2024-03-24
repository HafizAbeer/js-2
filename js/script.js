document.getElementById("concatenateString").onclick = function () {
    // document.getElementById("originalstatement").innerHTML = " "
    // document.getElementById("originalstatement").innerHTML = " "
    let string1 = "Hafiz"
    let string2 = "Abeer"
    let result = string1 + string2
    document.getElementById("originalstatement").innerHTML = "let string1 = Hafiz <br> let string2 = Abeer"
    document.getElementById("output").innerHTML = result
}

document.getElementById("clearstatement").onclick = function () {
    document.getElementById("originalstatement").innerHTML = " ";
}

document.getElementById("clearoutput").onclick = function () {
    document.getElementById("output").innerHTML = " ";
}

document.getElementById("inputName").onclick = function () {
    let name = prompt("Full Name:")

    document.getElementById("originalstatement").innerHTML = name
    document.getElementById("output").innerHTML = name
}

document.getElementById("comparisonOperator").onclick = function () {
    let value1 = prompt("Enter first value:")
    let value2 = prompt("Enter second value:")

    document.getElementById("originalstatement").innerHTML = "let value1 = " + value1 + "<br> let value2 = " + value2 + "<br> if (value1 < value2)"

    if (value1 < value2) {
        alert("True")
        document.getElementById("output").innerHTML = "True"
    } else {
        alert("False")
        document.getElementById("output").innerHTML = "False"
    }
}

document.getElementById("ifelseif").onclick = function () {
    let value1 = prompt("Enter first value:")
    let value2 = prompt("Enter second value:")

    document.getElementById("originalstatement").innerHTML = "let value1 = " + value1 + "<br> let value2 = " + value2 + "<br> if (value1 < value2) <br> else if (value1 > value2)"

    if (value1 < value2) {
        alert("Value1 is less than value2")
        document.getElementById("output").innerHTML = "Value1 is less than value2"
    } else if (value1 > value2) {
        alert("Value1 is greater than value2")
        document.getElementById("output").innerHTML = "Value1 is greater than value2"
    } else {
        alert("Numbers are equal!!!")
        document.getElementById("output").innerHTML = "Numbers are equal!!!"
    }
}

document.getElementById("testingConditions").onclick = function () {
    let marks = prompt("Enter marks:")

    document.getElementById("originalstatement").innerHTML = "let marks = " + marks

    if (marks >= 90) {
        alert("You got A")
        document.getElementById("output").innerHTML = "You got A"
    } else if (marks >= 80) {
        alert("You got B")
        document.getElementById("output").innerHTML = "You got B"
    } else if (marks >= 70) {
        alert("You got C")
        document.getElementById("output").innerHTML = "You got C"
    } else if (marks >= 60) {
        alert("You got D")
        document.getElementById("output").innerHTML = "You got D"
    } else {
        alert("You are Fail!!!!")
        document.getElementById("output").innerHTML = "You are Fail!!!"
    }
}

document.getElementById("ifNested").onclick = function () {
    let num = prompt("Enter a number: ")

    if (num > 0) {
        if (num % 2 === 0){
            alert("Number is positive and even")
            document.getElementById("output").innerHTML = "Number is positive and even"
        }else{
            alert("Number is positive and odd")
            document.getElementById("output").innerHTML = "Number is positive and odd"
        }
    }else if (num < 0){
        alert("Number is negative")
        document.getElementById("output").innerHTML = "Number is negative"
    }else {
        alert("Number is zero")
        document.getElementById("output").innerHTML = "Number is zero"
    }
}

document.getElementById("login").onclick = function() {
    let username = prompt("Enter username:")

    if (username === "admin"){
        let password = prompt("Enter password:")

        if (password === "admin"){
            alert("You are loggedin!")
            document.getElementById("output").innerHTML = "You are loggedin!"
        }else {
            alert("Incorrect password")
            document.getElementById("output").innerHTML = "Incorrect password"
        }
    }else{
        alert("Incorrect username")
        document.getElementById("output").innerHTML = "Incorrect username"
    }
}