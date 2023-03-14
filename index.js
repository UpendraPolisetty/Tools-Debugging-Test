function fullName(firstNane, lastName){
    return firstNane + " " +  lastName;
}

let result = fullName("Upendra", "Polisetty")

let expected = "UpendraPolisetty"

if(result !== expected){
    throw new Error(`${result} is not equal to ${expected}`)
}

function payTax(amount, tax){
    return amount + (amount * tax)
}

let result_2 = payTax(160000, 0.12)

let expected_2 = 179200;
if(result_2 !== expected_2){
    throw new Error(`${result_2} is not equal to ${expected_2}`)
}