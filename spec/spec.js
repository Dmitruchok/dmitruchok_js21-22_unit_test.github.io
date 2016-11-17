const script = require('../js/script.js'),
 arr = require('../js/arr.js');


describe("array", function() {
  it("property in the array", function() {

    //prepqre
    var result;
    //act
    result = arr;
    console.log(result);
    //assert
    expect(result).toContain('Христофор Колумб', '1492', 'Китайцы','Ирак', 'Куба');
  });


  it("rray", function() {

    //prepqre
      var s;
    //act
      s = script.hiA(2);
      console.log(s);

    //assert
    expect(s).toEqual('hi 2');
  });
});
