const arr = require('../js/arr.js'),
      question = require('../js/question.js');


describe("array", function() {
  it("property in the array", function() {

    //prepqre
    let result;
    //act
    result = arr;
    //console.log(result);
    //assert
    expect(result).toContain('Христофор Колумб', '1492', 'Китайцы','Ирак', 'Куба');
  });


  it("comparison of objects in the array", function() {

    //prepqre
      const property = [
      {
        question: '1. Кто открыл Америку?',
        answer1: 'Христофор Колумб',
        answer2: 'Джеймс Кук',
        answer3: 'Виллем Янц'
      },

      {
      question: '2. В каком году было открытие Америки?',
      answer1: '1945',
      answer2: '1492',
      answer3: '1476'
      },

      {
      question: '3. По предположениям, кто открыл Америку за 70 лет до ее открытия?',
      answer1: 'Китайцы',
      answer2: 'Немцы',
      answer3: 'Индейцы'
      },

      {
      question: '3. С кем воевала Америка за все годы существования?',
      answer1: 'Куба',
      answer2: 'Ирак',
      answer3: 'Украина'
      }
      ];

    //act
      const questionsAnswers = question;
      //console.log(questionsAnswers);
    //assert
    expect(property).toEqual(questionsAnswers);
  });
});
