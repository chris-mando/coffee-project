"use strict";

function renderCoffee(coffee) {
    var html = "<div class='coffee'>";
    html += "<div class='col-6 float-left' style='margin-top: 25px;'>" + "<h3>" + coffee.name + "</h3>" + " ";
    html += "<p>" + coffee.roast + "</p></div>";
    html += "</div>";
    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i <= coffees.length - 1; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var searchCof = searchCoffee.value; //added search
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    if (selectedRoast === 'all') {
        coffees.forEach(function(coffee) {
            if(coffee.name.toLowerCase().includes(searchCof.toLowerCase())) {
                filteredCoffees.push(coffee);
            }
        });
    } else {
        coffees.forEach(function(coffee) {
            if (coffee.roast.toLowerCase() === selectedRoast.toLowerCase()) {
                filteredCoffees.push(coffee);
            }
        });
    }
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];
//document.getElementsByName('id').innerHTML = [0];
var tbody = document.querySelector('#coffees');

var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
roastSelection.addEventListener('change', updateCoffees); //change on select

var searchCoffee = document.querySelector('#coffeeName'); //added search field
searchCoffee.addEventListener('change', updateCoffees);
searchCoffee.addEventListener('keyup', updateCoffees);

// ADD COFFEE FORM
var subBtn2 = document.querySelector('#submit2');

function addCoffee(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var coffeeObj = {
        id: '',
        name: '',
        roast: '',
    }

    coffeeObj.id = coffees.length + 1;
    coffeeObj.roast = document.getElementById('addSelection').value;
    coffeeObj.name = document.getElementById('coffeeName2').value;
    coffees.push(coffeeObj);

    console.log(coffeeObj);
    tbody.innerHTML = renderCoffees(coffeeObj);
}

tbody.innerHTML = renderCoffees(coffees);
submitButton.addEventListener('click', updateCoffees);
subBtn2.addEventListener('click', addCoffee);
subBtn2.onclick = function() { tbody.innerHTML = renderCoffees(coffees); };

