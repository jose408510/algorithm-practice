const nemo = ["nemo"]

 const findnemo = (array) => {
    //  let t0 = performance.now()
    for(var i = 0 ; i < array.length ; i++){
        if(array[i] === "nemo") {
            console.log("Found Nemo")
        }
    }
    // let t1 = performance.now()
    console.log(`call to nemo took ${(t1-t0)}` )
}

console.log(findnemo(nemo)) //O(n) --> linear time, n depends on the number of input;


function funChallenge(input) {
    let a = 10
    a = 50 + 3

    for(let i = 0; i < input.length; i++){
        anotherFunction();
        let stranger = true;
        a++
    }
    return a;
}

funChallenge()