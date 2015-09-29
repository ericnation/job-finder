var expect = require("chai").expect;
var request = require("supertest");

describe("save jobs", function() {
    it("should validate that the title is great than 4 characters");
    it("should validate that the title is less than 40 characters");
    it("should validate that the description is great than 4 characters");
    it("should validate that the description is less than 250 characters");
    
    var dataSavedJob;
    var newJob = {title: 'Cook', description: 'You will be making bagels'};
    
    it("should pass the job to the database save", function() {
        expect(dataSavedJob).to.deep.equal(newJob);
    });
    it("should return a status of 200 to the front end if the database saved");
    it("should return a job with an ID");
    it("should return an error if the database failed");
});