const script = require('../js/script.js'),
  d = require('../js/script.js');


describe("array", function() {
  it("property in the array", function() {

    //prepqre
    var result;
    //act
    result = script;
    console.log(result);
    //assert
    expect(result).toContain('Христофор Колумб', '1492', 'Китайцы','Ирак', 'Куба');
  });


  it("rray", function() {

    //prepqre
      var s;
    //act
      s = script.d.hiF(2);
      console.log(s);
    //assert
    expect(s).toEqual('hi 2');
  });
});
