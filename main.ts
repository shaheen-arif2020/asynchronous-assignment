//Q # 1 : write a simple asynchronous Typescript function fetching that returns a greeting message aftre a 2-second delay using setTimeout?
function fetchGreeting():Promise<string>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Eid mubarak");
        },2000);
    });
}
    //Example Usage :
    fetchGreeting().then((message) =>{
        console.log(message);
    });
    //Q # 2 : Write a function simulateTask that simulates a task by logging "Task started",waits for 1 second, and then logs "Task completed". Use setTimeout for the delay.


async function simulateTask():
Promise<void> {
    console.log("Task Started");
    await new Promise<void>((resolve) => {
    setTimeout(() => {
        resolve();

    }, 1000);
});

}
//Example usage:
simulateTask().then(() => {
    console.log("Task Completed");
});
//Q # 3 : Write a function fetchData that returns a Promise which resolves with the string 
//"Data fetched successfully!" after a delay of 1 second.

function fetchdata():
Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched succesfully!");

        },1000);
    });
}
//Example Usage
fetchdata().then((message) => {
    console.log(message);
})
//Q # 4 :  Write a function fetchWithError that returns a Promise. It should randomly either resolve with "Data fetched successfully!" or reject with "Data fetch failed!" after a delay of 1 second. Handle the rejection using .catch
function fetchWithError(): Promise <string>{
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            if (Math.random()> 0.5){
                resolve("Data fetch succesfully!");
            }
            else{
                reject("Data fetch failed!");
            }
        }, 1000);
    });
}
//Eaxample usage
fetchWithError().then((message) => {
    console.log(message);
})
.catch((error) => {
console.error(error);
});
//Q # 5 : Write a function executeSequentially that executes two functions fetchData and  processData sequentially using Promises, and logs the results in the order they are called.

function fetchData(): Promise<string> {
    return new Promise((resolve) => {
        resolve("Data fetched");
        setTimeout(() => {
      }, 1000);
    });
  }

  function processData(data: string): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`${data} and processed `);
      }, 1000);
    });
  }

  function executeSequentially() {
    fetchData()
      .then((data) => {
        console.log(data);
        return processData(data);
      })
      .then((processedData) => {
        console.log(processedData);
    })
        .catch((error) => {
        console.error("Error:", error);
    });
}
// Call the function to see the output
executeSequentially();