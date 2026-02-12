//Use of asycn and await

/**
 * router.get("/",async(req,res)=>{
 * const[salesModel,Usermodel]= await Promise.all([salesModel.find(),UserModels.find()])
 * res.json({salesModel,Usermodels})
 * })
 */
const assert = require("assert");

function simulateRole(userRole) {
  if (userRole !== "Admin") {
    return 403;
  }

  return 200;
}

decribe("Auth Failure Test", () => {
  test("Test 1- Sales Agent ", () => {
    const role = "Sale Agent";
    const expectedstatus = 403;

    assert.strictEqual(
      simulateRole(role),
      expectedstatus,
      "The status should be 403",
    );
  });
});


