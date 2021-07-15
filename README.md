# Coding Challenge - Frontend (React)
In this project, you could find backend and frontend projects In Node.JS and ReactJS. To download and run this project, you may follow the instruction below:

## Instruction
First, clone this project by git command:
<pre>
     git clone https://github.com/hamedafzali/CodingChallenge
</pre>
Since the project needs node_module libraries, you must run one of the following commands in backend and frontend folder:
<pre>npm install</pre> or <pre>yarn</pre> 

Now, the project is ready to run. To run this in docker, it is necessary to have docker-compose, so after installing docker and docker-compose you could run the following command in the folder which contains frontend and backend. 
<pre>docker-compose up -d --build</pre>

there is another alternative wecan apply the folowing commands

frontend:<pre>npm start</pre>  
backend:<pre> node index.js</pre>  

The tests in frontend and backend have been already implemented by Jest.

This project can be accessed on port 3000 for frontend and 8080 for backend.
The API contains the following services:
<pre>
     http://localhost:8080/api/persons/members
     http://localhost:8080/api/persons/absences
     http://localhost:8080/api/persons/members-absences
     http://localhost:8080/api/persons/members-absences-sum
</pre>
Minimum usage of third-party libraries has made the components flexible enough to be modified and customized based on the new requests.
