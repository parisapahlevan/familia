
// let myNewArray = []
// let myArray = ["hhj", "kjhnh", "hnhjn"]

// function bigEsm(name){
//     for (let i=0; i<name.length; i++){
//         let myElement = name[i].toUpperCase() + '!'
//         myArray.push(myElement)
//     }
//     return myArray
// }

// bigEsm(myArray)


// -----------------------------------------------------------
// 1- what should I name my function ? make everyting upper case in an array
// 2- what should I name ny variables 

function bigEsmArray(nameArr){
    let resultsArr = []
    for (let i=0; i<nameArr.length; i++){
        let name = nameArr[i].toUpperCase() + '!'
        resultsArr.push(name)
    }
    return resultsArr
}

//let myNewArray = []
let myArray = ["hhj", "kjhnh", "hnhjn"]
console.log(bigEsmArray(myArray))
// some coment