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
        addItem: function (type, des, val) {
            var newItem, ID;
            //ID = Last ID + 1
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }

            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }

            // add data to array
            data.allItems[type].push(newItem);
            return newItem;

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
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expensesLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        container: '.container',
        expensesPercLabel: '.item__percentage',
        dateLabel: '.budget__title--month'
    };


    return {
        getInput: function () {
            return {
                //selection between income or expense with value and data type
                type: document.querySelector(DOMstrings.inputType).value,
                descripton: document.querySelector(DOMstrings.inputType).value,
                // convert value from string to number
                value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
            };
        },
        addListItem: function (obj, type) {

            //create HTML Strings with place HOlderText
            var html, newHtml, element;
            // Create HTML string with placeholder text

            if (type === 'inc') {
                element = DOMstrings.incomeContainer;

                html = '<div class="item clearfix" id="inc-%id%"> <div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else if (type === 'exp') {
                element = DOMstrings.expensesContainer;

                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }

            // replace the place holder text with acutal data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.descripton);
            newHtml = newHtml.replace('%value%', obj.value);

            // insert the HTML into the DOm
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);

        },
        //adding method to clear fields
        clearFields: function () {
            var fields, fieldsArr;
            fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);
            fieldsArr = Array.prototype.slice.call(fields);

            fieldsArr.forEach(function (current, index, array) {
                current.value = "";
            });
            // returing focus to input description after adding value
            fieldsArr[0].focus();
        },


    }

})();


// APP Controller 
var updateBudget = function () {

    // 5 calcuate the budget
    // 6 display the budget on ui
    //7 retun the budget    
};


var Controller = (function (budgetCtrl, UICtrl) {


    var ctrlAddItem = function () {
        var input, newItem;

        //1- input data get filed
        // calling the function which stores the values on input 
        input = UICtrl.getInput();
        console.log(input);

        // preventing from adding empty lines and input filed should be a number


        if (input.descripton !== "" && !isNaN(input.value) && input.value > 0) {

            // 2. add item to budget controller
            //because budget ctrl is an object so we have to save it in var
            newItem = budgetCtrl.addItem(input.type, input.descripton, input.value);

            //3 add items to ui
            //error to be fixed adding only income
            UICtrl.addListItem(newItem, input.type);

            //4 clear the fields
            UICtrl.clearFields();

            // 5 calcuate the budget
            updateBudget();
            // 6 display the budget on ui
        }
    };
    // Some Code
    // Connection betwwen 2 other modules
    // add button event listener - class selectors
    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);



})(budgetController, UIController);