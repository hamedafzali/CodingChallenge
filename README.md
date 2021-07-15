# coding challenge - Frontend (React)
In this project, you could find backend and frontend projects In Node.JS and ReactJS. to download and run this project, you may follow instruction below:

## Instruction
First, clone this project by git command:
<pre>
     git clone https://github.com/hamedafzali/CodingChallenge
</pre>
Since the project needs node_module libraries, you must run <pre>npm install</pre> or <pre>yarn</pre> in backend and frontend folder

Now, the project is ready to run. To run this in docker, it is necessary to have docker-compose, so after installing docker and docker-compose you could run the following command in the folder which contains frontend and backend. 
<pre>docker-compose up -d --build</pre>

there is another alternative wecan apply the folowing commands 
frontend:<pre>npm start</pre>  
backend:<pre> node index.js</pre>  

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
