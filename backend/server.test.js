const request =require('supertest') 
const app =require('./routes/User.js') 
const mongoose =require('mongoose') 




describe("Test the root path",()=>{
    test("It should reponse the POST method",()=>{
        const response=request(app).post("http://localhost:8000/User/add").send({
            "Name" : "Alina",
            "Email" : "Alina@gmail.com",
            "Age" : 21,
            "Contact" : 1235678
        })
        expect(response.statusCode).toBe(200);
 })
})
describe("Test the root path",()=>{
    test("It should reponse the delete method",()=>{
        const response=request(app).delete("http://localhost:8000/User/:id").send({
           "Id":"6367eeca830c63dfb5c0af95"
        })
        expect(response.statusCode).toBe(200);
 })
})
describe("Test the root path",()=>{
    test("It should reponse the POST method",()=>{
        const response=request(app).post("http://localhost:8000/User/add").send({
            "Name" : "Alina",
            
        })
        expect(response.statusCode).toBe(200);
 })
})