
//document.writeln('Hello, world!');

/*
Function.prototype.method = function(name, func) {
    this.prototype[name] = func;
    return this;
}

° Names:
    abstract
    boolean break byte
    case catch char class const continue
    debugger default delete do double
    else enum export extends
    false final finally float for function
    goto
    if implements import in instanceof int interface
    long native new null package private protected public
    return short static super switch synchronized
    this throw throws transient true try typeof
    var volatile void
    while with

    Event 	Description
    onchange 	An HTML element has been changed
    onclick 	The user clicks an HTML element
    onmouseover 	The user moves the mouse over an HTML element
    onmouseout 	The user moves the mouse away from an HTML element
    onkeydown 	The user pushes a keyboard key
    onload 	The browser has finished loading the page

    Array.forEach()
The forEach() method calls a function (a callback function) 
once for each array element.
    Array.map()
The map() method creates a new array by performing a function on each array element.
The map() method does not execute the function for array elements without values.
The map() method does not change the original array.
    Array.filter()
The filter() method creates a new array with array elements
 that passes a test.
*/

//Object Literals:

var empty_object = {};
var stooge = {
    "first-name": "Toan",
    "last-name": "TRAN",
    age: 25,

    stooge2 : {
    "first-name": "Thuy",
    "last-name": "PHAM",
    age: 25
}
};

//document.writeln(stooge["first-name"]);
//document.writeln(stooge.age);

var flight = {    
    airline: "Oceanic",    
    number: 815,    
    departure: {        
        IATA: "SYD",        
        time: "2004-09-22 14:55",        
        city: "Sydney"    
    },    
    arrival: {        
        IATA: "LAX",        
        time: "2004-09-23 10:42",        
        city: "Los Angeles"    
    },
    printfc: function() {
        return this.airline+"\n"+this.number+"\n"+this.departure.IATA+"\n"+
        this.departure.time+"\n"+this.departure.city+"\n"+this.arrival.IATA+"\n"+
        this.arrival.time+"\n"+this.arrival.city+"\n";
    }
};

var cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Opel";
document.getElementById("p2").innerHTML = cars;

function displayDate() {
    document.getElementById("demo").innerHTML = "Hello World!";
}

//document.writeln("50".charCodeAt(0));

