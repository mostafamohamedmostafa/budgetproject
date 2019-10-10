// Start With Data - Budget Module

var budgetController = (function () {
    // Some COde
}
)();




// Ui Controller - Show the Data TO INterface Module

var UIController = (function () {

    // Some Code
    //function can be used in other controller

    return {
        getInput: function () {
            return {
                //selection between income or expense with value and data type
                type: document.querySelector('.add__type').value,
                descripton: document.querySelector('.add__description').value,
                value: document.querySelector('.add__value').value
            };



        }
    };





})();


// APP Controller 

var Controller = (function (budgetCtrl, UICtrl) {


    var ctrlAddItem = function () {
        
        //1- input data get filed
        // calling the function which stores the values on input 
        var input = UICtrl.getInput();
        console.log(input);

        // 2. add item to budget controller
        //3 add items to ui
        // 4 calcuate the budget
        // 5 display the budget on ui
    };
    // Some Code
    // Connection betwwen 2 other modules
    // add button event listener - class selectors
    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);



})(budgetController, UIController);