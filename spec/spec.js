const script = require('../js/script.js');

describe("array", function() {
  it("property in the array", function() {

    //prepqre
      var result;
    //act
      result = ['Христофор Колумб', '1492', 'Китайцы','Ирак', 'Куба'];
    //assert
    expect(result).toContain('Христофор Колумб', '1492', 'Китайцы','Ирак', 'Куба');
  });
});
