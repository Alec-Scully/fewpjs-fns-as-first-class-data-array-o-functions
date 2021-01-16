let dogName = ""
let dogBreed = ""

let routine = [
    wakeDog(dogName, dogBreed),
    leashDog(dogName, dogBreed),
    walkToPark(dogName, dogBreed),
    throwFrisbee(dogName, dogBreed),
    walkHome(dogName, dogBreed),
    unleashDog(dogName, dogBreed)
]

debugger

function wakeDog(dogName, dogBreed) {
    console.log(`Wake ${dogName} the ${dogBreed}`);
    let response = `Wake ${dogName} the ${dogBreed}`
    return response
}

function leashDog (dogName, dogBreed) {
    console.log(`Leash ${dogName} the ${dogBreed}`);
    let response = `Leash ${dogName} the ${dogBreed}`
    return response
}

function walkToPark (dogName, dogBreed) {
    console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
    let response = `Walk to the park with ${dogName} the ${dogBreed}`
    return response
}

function throwFrisbee (dogName, dogBreed) {
    console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
    let response = `Throw the frisbee for ${dogName} the ${dogBreed}`
    return response
}

function walkHome (dogName, dogBreed) {
    console.log(`Walk home with ${dogName} the ${dogBreed}`);
    let response = `Walk home with ${dogName} the ${dogBreed}`
    return response
}

function unleashDog (dogName, dogBreed) {
    console.log(`Unleash ${dogName} the ${dogBreed}`);
    let response = `Unleash ${dogName} the ${dogBreed}`
    return response
}
