function fetchUserData() {
  return new Promise((resolve, reject) => {
    const success = true; // Change to false to simulate failure

    setTimeout(() => {
      if (success) {
        resolve({ name: "John Doe", age: 23, email: "john.doe@example.com" });
      } else {
        reject("Failed to fetch data");
      }
    }, 2000); // Simulating a 2-second delay
  });
}

// Usage
fetchUserData()
  .then((data) => {
    console.log("Data fetched successfully:", data);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => { console.log(`fetch attempt is cpmplete`);});




    