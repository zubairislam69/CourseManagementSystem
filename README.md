# Course Management System

This is a simple course management system built with React Bootstrap, JavaScript, Express, MySQL, Node.js, and CSS.
## Getting Started

To run this project, first clone the repository to your local machine:

      git clone https://github.com/zubairislam69/CourseManagementSystem.git



You will also need to set up a MySQL database. Open MySQL Workbench, create a new connection, and create a database inside a query file using this command to store the tables given in the next step. 

      CREATE DATABASE coursemanagement;
 
Next, copy everything inside the file named SQL.sql and execute it inside a query file inside MySQL Workbench, also making sure that you have the new database selected. You should now see 3 tables created. Then, go back into your project in VS Code and in the server/dbConfig.js file, you can update the host, user, and password to the ones set by your own Workbench.

Next, open two terminals to install the dependencies. In the first terminal, write:

      cd client
      npm install
      
In the second terminal, write:      
 
      cd server
      npm install


Finally, to start the development server, go into the first terminal and write:

      npm start
      
Then, go into the first terminal and write:

      npm run dev
      
 ## Features     
 
    Course creation, editing, and deletion
    Student creation, editing, and deletion
    Lecturer creation, editing, and deletion
    Simple UI
    Student registration for courses

## Technologies Used

    React Bootstrap for UI components
    Express for server-side code
    MySQL for data storage
    Node.js for backend logic
    CSS for styling
