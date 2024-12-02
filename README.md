# JavaScript_GraphQL Hello World 

This is a simple GraphQL "Hello World" project where you can set up a local GraphQL server and make a query to retrieve a "Hello, World!" message. The project demonstrates how to build a GraphQL server using Apollo Server and consume it using JavaScript in a simple HTML page.

  ## Project Motivation

  I created this project to understand the basics of GraphQL and how it can be integrated with JavaScript to build a simple web application. The motivation was to learn the fundamentals of GraphQL queries and      server setup locally, which can be expanded into more complex projects.

  ## Why Build This Project?

  I built this project to practice using GraphQL, which is becoming a popular alternative to REST APIs. This is a great starting point for anyone looking to explore GraphQL in a hands-on manner.
  
  ## Problem It Solves
  
  This project doesn't solve a particular real-world problem but provides a simple, easy-to-understand implementation of GraphQL queries and servers to showcase its basic functionality.
  
  ## What I Learned
  
  - How to set up a local GraphQL server using Apollo Server.
  - How to structure a basic GraphQL query and resolve it.
  - How to use JavaScript to make GraphQL requests from a front-end application.
    
  ## Features
  
  - A local GraphQL server built with Apollo Server.
  - A simple HTML page that consumes the GraphQL server.
  - A `Hello, World!` query to demonstrate basic server-client communication.
  
  ## Table of Contents
  
  - [How to Install and Run the Project](#how-to-install-and-run-the-project)
  - [How to Use the Project](#how-to-use-the-project)
  - [Credits](#credits)
  - [Addiotional Information](#additional-information)

  ## How to Install and Run the Project
  
  Follow these steps to set up and run the project on your local machine:
      
   ### 1. Clone the repository
   
  ```
      git clone https://github.com/SebastianPE0/JavaScript_GraphQL.git 
  ```
  ```
      cd graphql-hello-world
  ```
      
   ### 2. Install the dependencies
   Ensure that Node.js is installed on your machine. Then, run the following command to install the necessary packages:
      
  ```
      npm install
  ```
  ```
      npm install apollo-server graphql
  ```
  ```
      npm install graphql-request
  ```
   ### 3. Run the GraphQL Server
   Once the dependencies are installed, you can start the GraphQL server by running:
      
  ```
      node graphqlServer.js
  ```
   The server will be running at http://localhost:4000/.
      
   ### 4. Open the HTML Page
   Open the index.html file in your browser. It will make a GraphQL query to the local server and display the "Hello, World!" message on the page.
      
  ----
  
  ## How to Use the Project
  Once you have the server running, you can access the simple webpage by opening index.html in any modern web browser. The page will display the message "Hello, World!" retrieved from the GraphQL server.
  
  You can modify the query in the HTML file to ask for different data from the GraphQL server if desired.
  
  ---
  
  ## Credits
  - Author: Antony Sebastián Pérez Gaona
  - GraphQL Documentation: [GraphQL Official Docs](https://graphql.org/)
  - Apollo Server: [Apollo Server Documentation](https://www.apollographql.com/docs/apollo-server)
  
  ---
  
  ## Additional Information
  Below you can see screenshots of the execution, both on the website and in the Apollo´s interface
  
  - WebSite
    ![image](https://github.com/user-attachments/assets/20ee7647-3185-441d-a926-78ca11e82210)
  
  - Sandbox of Apollo server
    ![image](https://github.com/user-attachments/assets/aa666368-c650-4466-acd3-a55924a1d671)

