var assert = require("assert");
var request = require("request");
var fs = require("fs");

describe("Create, Delete", function() {
  this.timeout(5000);
  it("should create a new customer, & delete it", function(done) {
    var path = "https://" + process.env.CUSTOMERS_ENDPOINT + "/customers";

    // Fetch the comparison payload
    require.extensions[".txt"] = function(module, filename) {
      module.exports = fs.readFileSync(filename, "utf8");
    };
    var desiredPayload = require("./data/newCustomer.json");

    // Create the new customer
    var options = { url: path, form: JSON.stringify(desiredPayload) };
    request.post(options, function(err, res, body) {
      if (err) {
        throw new Error("Create call failed: " + err);
      }
      assert.equal(
        200,
        res.statusCode,
        "Create Status Code != 200 (" + res.statusCode + ")"
      );
      var customer = JSON.parse(res.body);
      // Delete the customer
      var deletePath = path + "/" + customer.id;
      request.del(deletePath, function(err, res, body) {
        if (err) {
          throw new Error("Delete call failed: " + err);
        }
        assert.equal(
          200,
          res.statusCode,
          "Delete Status Code != 200 (" + res.statusCode + ")"
        );
        done();
      });
    });
  });
});
