 // Variable

let car = {
    make: 'Stove',
    model: 'Bread',
    color: 'Light Bread Brown',
    mileage: 0,
    isworking: 'true',

    drivetowork(){
        alert(`old mileage: ${this.mileage}`);
        this.mileage = this.mileage +8;
        alert(`new mileage: ${this.mileage}`);
    },
}


// Functions
const rewritestats(){
    console
}

/* Captures Keyboard input. Depending on the letter it will "call" (execute) different functions.*/
document.onkeyup = (event) => {

    // Captures the key press, converts it to lowercase, and saves it to a variable
    let letter = String.fromCharCode(event.keyCode).toLowerCase();

    if (letter === 'd'){
        car.drivetowork();
    }
}