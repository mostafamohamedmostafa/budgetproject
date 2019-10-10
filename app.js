// Start With Data - Budget Module

var budgetController = (function () {
    // Some COde
    //Expenses Items (type , value , unique IDs)

    var Expenses = function (id, descripton, value) {
        this.id = id;
        this.descripton = descripton;
        this.value = value;
    };


    //Income Items (type , value , unique IDs)

    var Income = function (id, descripton, value) {
        this.id = id;
        this.descripton = descripton;
        this.value = value;
    };

    // Data Structure for Income and Expenses ( store in arry)
    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    };
    //make other controllers to add items
    return {
        addItem: function (type, descripton, val) {
            var newItem, ID;
            ID = 0;

            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }
            // add data to array
            data.allItems[type].push(newItem);

        }

    };
}
)();




// Ui Controller - Show the Data TO INterface Module

var UIController = (function () {

    // Some Code
    //function can be used in other controller

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value'
    };


    return {
        getInput: function () {
            return {
                //selection between income or expense with value and data type
                type: document.querySelector(DOMstrings.inputType).value,
                descripton: document.querySelector(DOMstrings.inputType).value,
                value: document.querySelector(DOMstrings.inputValue).value
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