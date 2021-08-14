import express, { request, response } from "express";
import { data } from "./data.js";


const app = express();


app.get('/', (request, response) => {
    return response.status(200).send(
        {
            name: "Rabib Haque"
        }
    );
}
);

app.get("/donors", (req, res) => {
    return res.status(200).send(data);
})
//Serve

app.listen(5000, console.log("server runnning at http://localhost:5000"));
//REST API METHODS
//GET - get data
//POST - create one data
//PUT - update one data
//delete


//Request 
//Header
//Body
//URI
//Method

// Response
//Header
//Body
//status code