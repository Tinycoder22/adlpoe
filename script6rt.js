document.addEventListener('DOMContentLoaded', () => {
    const dataContainer = document.getElementById('dataContainer');
  
    // Make a request to a sample API (JSONPlaceholder) to retrieve data
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        // Display the retrieved data
        dataContainer.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
      })
      .catch(error => {
        dataContainer.textContent = 'Error fetching data';
        console.error('Error:', error);
      });
  });


// Sure, here's a step-by-step guide on how to create a GET request in Postman and retrieve data from an API endpoint:

// ### Steps:

// 1. **Open Postman:**
//    If you haven't already, download and install Postman from [Postman's website](https://www.postman.com/downloads/), then open it.

// 2. **Create a New Request:**
//    Click on the "New" button in the top-left corner of the Postman window to create a new request.

// 3. **Select HTTP Method:**
//    In the dropdown next to the URL bar, select "GET" as the HTTP method.

// 4. **Enter the URL:**
//    In the URL bar, enter the API endpoint URL you want to test. For example:
//    ```
//    https://jsonplaceholder.typicode.com/posts
//    ```

// 5. **Send the Request:**
//    Click on the "Send" button next to the URL bar. Postman will send the GET request to the specified URL.

// 6. **View the Response:**
//    After sending the request, Postman will display the response received from the API. You'll see the status code, headers, and the body of the response.

//    For the `https://jsonplaceholder.typicode.com/posts` endpoint, you should receive a list of posts in the response body, which includes various fields like `userId`, `id`, `title`, and `body`.

// 7. **Exploring the Response:**
//    You can explore the received data, view different parts of the response (headers, body, etc.), and analyze the structure of the data returned by the API.

// This process allows you to interact with APIs, send requests, and inspect the responses using Postman's user-friendly interface. You can further experiment with different endpoints, methods (GET, POST, PUT, etc.), headers, and query parameters within Postman to understand and test various API functionalities.
  