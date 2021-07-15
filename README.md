# 🚀  coding challenge - Frontend (React)
In this project, you could find backend and frontend projects in Node.JS and ReactJS. to download and run this project please follow the instruction:
You could run this project by node and npm or by docker-compose.

## Instructions
First, you must clone this project by git command:
<pre>
     git clone https://github.com/hamedafzali/CodingChallenge
</pre>
Since the project needs node_module libraries, you must run <pre>npm install</pre> or <pre>yarn</pre> in backend and frontend folder

Now, the project is ready to run. for running in docker it is necessary to have docker-compose, so after installing docker and docker-compose you could run <pre>docker-compose up -d --build</pre>in the folder which contains frontend and backend.

Another way to run is running <pre>npm start</pre> in the frontend folder and <pre> node index.js</pre> in the backend folder 

Tests are provided in frontend and backend by jest although implemented tests are simple and need to be complete in a real project

## Technical Instructions
This project runs in port 3000 for the frontend and 8080 for the backend
The API contains listed services:
<pre>
http://localhost:8080/api/persons/members
http://localhost:8080/api/persons/absences
http://localhost:8080/api/persons/members-absences
http://localhost:8080/api/persons/members-absences-sum
</pre>
In this project have used minimum usage of third-party libraries so all components were created by myself, therefore, every change in every component is possible.
