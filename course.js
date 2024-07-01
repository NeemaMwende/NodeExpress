// let a = ["Angel", "Lexy", "Max"];
// for (let p of a) {
//     console.log(p);
// }

// a.forEach(data => {
//     console.log(data);
// })

let fruits = ["Mango", "Banana", "Apple"];
const getFruits = () => {
    setTimeout(() => {
        fruits.forEach(data => {
            console.log(data);
        })
    },1000);
}    
    const postFruit = (fruit, callback) => {
        setTimeout(() => {
            fruits.push(fruit);
            callback();
        },2000);
    }


postFruit("Kiwi", getFruits);

