
let fruits = ["Mango", "Banana", "Apple"];
const getFruits = () => {
    setTimeout(() => {
        fruits.forEach(data => {
            console.log(data);
        })
    },1000);
}   

const postFruits = (fruit) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            fruits.push(fruit);
            let err = false;
            if (!err) {
                resolve();
            }else{
                reject("Something went wrong");
            }
        },2000);
    });
}

const init = async() => {
    try {
        await postFruits("Kiwi");
        getFruits();
    } catch (error) {
        console.log(error);
    }
};
init();

//ANOTHER EXAMPLE
// Function that returns a promise to check fruit availability
function checkFruitAvailability(fruit) {
    return new Promise((resolve, reject) => {
      const fruitsAvailable = ["apple", "banana", "mango", "orange"];
      
      setTimeout(() => { // Simulate an asynchronous operation with setTimeout
        if (fruitsAvailable.includes(fruit)) {
          resolve(`${fruit} is available.`);
        } else {
          reject(`${fruit} is not available.`);
        }
      }, 1000); // Wait 1 second before resolving or rejecting the promise
    });
  }
  
  // Using the async/await syntax
  async function checkFruits() {
    try {
      const appleMessage = await checkFruitAvailability("apple");
      console.log(appleMessage); // This will log the resolved message for apple
    } catch (error) {
      console.log(error); // This will log the rejected message for apple
    }
  
    try {
      const kiwiMessage = await checkFruitAvailability("kiwi");
      console.log(kiwiMessage); // This will log the resolved message for kiwi
    } catch (error) {
      console.log(error); // This will log the rejected message for kiwi
    }
  }
  
  // Call the async function
  checkFruits();

  const print = (data) => {
    console.log(data);
  };
  module.exports = print;
  