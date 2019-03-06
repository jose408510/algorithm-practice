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

/////////////////////////////////
// EXAMPLE 2
function funChallenge(input) {
    let a = 10 // 0(1)
    a = 50 + 3 // 0(1)

    for(let i = 0; i < input.length; i++){ //0(n) n=input Loops are linear Time
        anotherFunction();    //O(n)
        let stranger = true;  //0(n)
        a++ // 0(n)
    }
    return a; // 0(1)
}

funChallenge()

// BIG O (3 + 4n)

/////////////////////////////////
//EXAMPLE 3
function anotherFunChallenge(input) {
    let a = 5;
    let b = 10;
    let c = 50;
    for (let i = 0; i < input; i++) {
      let x = i + 1;
      let y = i + 2;
      let z = i + 3;
  
    }
    for (let j = 0; j < input; j++) {
      let p = j * 2;
      let q = j * 2;
    }
    let whoAmI = "I don't know";
  }

  // BIG O (4 + 5n)