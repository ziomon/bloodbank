# Blood Donation Management System
Our web-based project aims to connect blood donors with those in need of blood, providing an efficient and effective platform for blood donation and transfusion management. Our system addresses the critical need for blood donations in emergency situations, helping users to quickly and easily find blood donors based on location and blood type.

## About
Our blood donation management system aims to streamline the process of blood donation, providing a centralized platform that enables users to register as blood donors, request blood when needed, and search for donors based on location and blood type. Our user-friendly and intuitive system overcomes the challenges of traditional blood banks, which can often be cumbersome and inefficient. We believe that our project has the potential to save countless lives and make a real difference in the world.

## Implementation
Our blood donation management system was built using the MERN stack, which is a popular technology stack for developing web applications. We used MongoDB as our database to store user and request data, Express.js to create our RESTful API, React to build our user interface, and Node.js to run our server-side code.

To connect our front-end and back-end, we used Axios, a popular library for making HTTP requests. This allowed us to fetch and post data from our front-end to our back-end and update our database accordingly.

Our front-end was built using React components, which were organized into different pages such as Home, RequestBlood, EmergencyPage, Login, RegisterUser, and Profile. We also used various UI components such as Navbar, Footer, Card, and FloatingButton to create a seamless user experience.

On the back-end, we created two main routes using Express.js - a user route and a request route. The user route handles user registration, updates, and login. The request route handles requests for blood donations, including creating new requests, fetching all requests, and searching for potential donors.

## How to Use
To use our project, follow these steps:
1. Clone the project from the GitHub repository by running the following command in your terminal:
   ```
   git clone https://github.com/aswnss-m/BloodBank.git
   ```
2. Navigate to the cloned directory:
   ```
   cd blood-bank
   ```
3. Install the required dependencies for the frontend and backend:
   ```
   cd ./client
   npm install

   cd ..
   cd ./server
   npm install
   ```
4. Start the backend server:
   ```
   // Assuming that you are in the ./server directory
   node index.js
   ```
5. Start the frontend server:
   ```
   // Open a new terminal 
   cd ./client
   npm start
   ```
6. Navigate to `http://localhost:3000` on your web browser to access the project.

Note: Make sure to have Node.js and npm installed on your machine before following the above steps.

## File Descriptions
1. `App.js`: The main entry point for the React application. It imports several components from various files and renders them based on the URL path.
2. `Home.js`: A functional component that renders the home page of the blood bank web application.
3. `RegisterUser.js`: A component that uses Axios to send an HTTP POST request to the backend server to register a user.

## Detailed Explaination about each files
1. App.js
   This is the main file of the React application, and it defines the routes and their corresponding components to be rendered on the webpage. It imports various components such as Navbar, Home, RequestBlood, RegisterUser, EmergencyPage, SearchResult, Profile, Login, AdminPage and NotFoundPage. 

   The function component `App()` returns a div with a classname `app`, and contains the following:

   1. `Navbar` component - Renders the navbar on the webpage which contains the links to the various pages of the application, such as home, search, login, etc. 

   2. `Routes` component - Defines the routes and their corresponding components to be rendered on the webpage when the URL path matches with the route path. 

   3. `Route` component - Defines each individual route and its path in the application. 

   4. `Home` component - Renders the home page of the application. 

   5. `RequestBlood` component - Renders the request blood page of the application. 

   6. `RegisterUser` component - Renders the user registration page of the application.

   7. `EmergencyPage` component - Renders the emergency page of the application.

   8. `SearchResult` component - Renders the search result page of the application.

   9. `Profile` component - Renders the user profile page of the application.

   10. `Login` component - Renders the login page of the application.

   11. `AdminPage` component - Renders the admin page of the application.

   12. `NotFoundPage` component - Renders the 404 error page of the application when the requested URL path does not match with any of the defined routes.

   The `useState()` hook is used to maintain the state of whether the user is logged in or not. The state is initially set to the value of `localStorage.getItem("isAuth")`, which is either "true" or "false" depending on whether the user has logged in previously or not. The `handleLogin()` function is called when the user logs in, and sets the state of `islogged` to "true". The `handleLogout()` function is called when the user logs out, and sets the state of `islogged` to "false". It also resets the values of `isAdmin` and `isAuth` in the local storage to "false".

2. Connecting to backend
   the Axios library is used to make HTTP requests to the backend server. Axios is a popular library for making HTTP requests from the browser or Node.js, and it simplifies the process of sending asynchronous HTTP requests to a web server.

   The useEffect hook is used to fetch data from the backend server based on the URL parameters bloodgroup and location. When the component mounts, useEffect will run the callback function, which sends a GET request to the backend server at https://blood-bank-4lln.vercel.app/all. The response data is filtered based on the bloodgroup and location URL parameters, and the resulting data is set using the setUserData function from useState.

   The fetched data is then rendered in the div with class name searchResults using the map function, which iterates over the userData array and returns a Card component for each element in the array.

   Overall, this file shows how to use the axios library to connect to a backend server, and how to fetch data and display it in a React component based on URL parameters.
   
   > Code examples

   1. Importing axios:

   ```
   import axios from 'axios';
   ```

   2. Using axios to make a GET request to the backend:

   ```
   const response = await axios.get(`https://blood-bank-4lln.vercel.app/all`);
   ```

   3. Filtering the response data based on the blood group and location:

   ```
   const data = response.data.filter(user => user.bloodGroup === bloodgroup && user.location === location);
   ```

   4. Setting the filtered data to the state variable:

   ```
   setUserData(data);
   ```

   In summary, axios is a popular library for making HTTP requests from the client-side of a web application. In this file, axios is used to make a GET request to the backend API at the `https://blood-bank-4lln.vercel.app/all` endpoint, which returns a list of all the registered blood donors. The response data is then filtered based on the blood group and location parameters received through the URL, and the filtered data is set to the state variable `userData`. This state variable is then used to render a list of blood donors matching the search criteria on the UI.


   3. Backend
     backend code written in Node.js using Express framework. Here's a brief explanation of each part of the code:

      1. Importing required modules:
      ```
      const express = require("express");
      const cors = require("cors");
      const mongoose = require('mongoose');
      require('dotenv').config();
      ```
      In this section, we're importing required modules: Express to create the server, CORS to enable Cross-Origin Resource Sharing, and Mongoose to connect to the MongoDB database. We're also importing dotenv to load environment variables from a .env file.

      2. Creating an instance of the Express app and setting the port:
      ```
      const app = express();
      const port = process.env.PORT || 5000;
      ```
      Here, we're creating an instance of the Express app and setting the port on which the server will listen.

      3. Middleware setup:
      ```
      app.use(cors());
      app.use(express.json());
      ```
      Here, we're setting up middleware. cors() middleware allows cross-origin requests, and express.json() middleware parses incoming requests with JSON payloads.

      4. Connecting to the MongoDB database:
      ```
      const uri = process.env.ATLAS_URI;
      mongoose.connect(uri);

      const connection = mongoose.connection;

      connection.once('open',()=>{
         console.log("Mongoose Connection established");
      });
      ```
      In this section, we're connecting to the MongoDB database using the URI specified in the .env file. Once the connection is established, a message is logged in the console.

      5. Setting up routes:
      ```
      const userRouter = require("./routes/user");
      const requestRouter = require("./routes/request");
      const loginRouter = require("./routes/login");
      const adminRouter = require("./routes/adminroute");

      app.use("/register",userRouter);
      app.use("/all",userRouter);
      app.use("/search",requestRouter,userRouter);
      app.use("/login",loginRouter);
      app.use('/adminroute',adminRouter);
      ```
      Here, we're setting up routes for different functionalities of the application using middleware. For example, userRouter handles user registration, loginRouter handles user login, requestRouter handles search requests for blood donors, and adminRouter handles requests to retrieve and delete user records.

      6. Starting the server:
      ```
      app.listen(port,()=>{
         console.log(`Server is running at ${port}`);
      });
      ```
      Finally, we're starting the server on the specified port, and logging a message in the console indicating that the server has started running.

      Snippets have been added to support each of the explanations.