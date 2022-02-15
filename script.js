function newNumber(userNumber) {
    let meterNumber = (userNumber * 3.281).toFixed(3)
    let feetNumber = (userNumber / 3.281).toFixed(3)
    let literNumber = (userNumber * 3.785).toFixed(3)
    let gallonNumber = (userNumber / 3.785).toFixed(3)
    let kiloNumber = (userNumber / 2.205).toFixed(3)
    let poundNumber = (userNumber * 2.205).toFixed(3)

    document.getElementById("meterFeet").innerText = `${userNumber} meters = ${feetNumber} feet | ${userNumber} feet = ${meterNumber} meters`;

    document.getElementById("litersGallons").innerText = `${userNumber} liters = ${gallonNumber} gallons | ${userNumber} gallons = ${literNumber} liters`;

    document.getElementById("kilosPounds").innerText = `${userNumber} kilograms = ${poundNumber} pounds | ${userNumber} pounds = ${kiloNumber} kilos`

}

    

   // document.getElementById("litersGallons").innerText = `${userNumber} liters = ${userNumber * 3.785.toFixed(3)} gallons | ${userNumber} gallons = ${userNumber / 3.785.toFixed(3)} liters`;

    // document.getElementById("kilosPounds").innerText = `${userNumber} kilograms = ${userNumber * 2.205.toFixed(3)} pounds | ${userNumber} pounds = ${userNumber / 2.205} kilos`;


// function meterFeet () { 
//     let meterNumber = (userNumber * 3.281).toFixed(3)
//     let feetNumber = (userNumber / 3.281).toFixed(3)
//     document.getElementById("meterFeet").innerText = `${userNumber} meters = ${feetNumber} feet | ${userNumber} feet = ${meterNumber} meters`;

//     meterFeet
// }