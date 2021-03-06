var tables = {
    1:{
        "available": true,
        "name": '',
        "party_of": 1,
        "data": '',
        "time": '',
        "phone": '',
        "massage": ''
    },
    2:{
        "available": true,
        "name": '',
        "party_of": 1,
        "data": '',
        "time": '',
        "phone": '',
        "massage": ''
    },
    3:{
        "available": true,
        "name": '',
        "party_of": 1,
        "data": '',
        "time": '',
        "phone": '',
        "massage": ''
    },
    4:{
        "available": true,
        "name": '',
        "party_of": 1,
        "data": '',
        "time": '',
        "phone": '',
        "massage": ''
    },
    5:{
        "available": true,
        "name": '',
        "party_of": 1,
        "data": '',
        "time": '',
        "phone": '',
        "massage": ''
    },
    6:{
        "available": true,
        "name": '',
        "party_of": 1,
        "data": '',
        "time": '',
        "phone": '',
        "massage": ''
    },
    7:{
        "available": true,
        "name": '',
        "party_of": 1,
        "data": '',
        "time": '',
        "phone": '',
        "massage": ''
    },
    8:{
        "available": true,
        "name": '',
        "party_of": 1,
        "data": '',
        "time": '',
        "phone": '',
        "massage": ''
    },
    9:{
        "available": true,
        "name": '',
        "party_of": 1,
        "data": '',
        "time": '',
        "phone": '',
        "massage": ''
    },
    10:{
        "available": true,
        "name": '',
        "party_of": 1,
        "data": '',
        "time": '',
        "phone": '',
        "massage": ''
    },
    11:{
        "available": true,
        "name": '',
        "party_of": 1,
        "data": '',
        "time": '',
        "phone": '',
        "massage": ''
    },
    12:{
        "available": true,
        "name": '',
        "party_of": 1,
        "data": '',
        "time": '',
        "phone": '',
        "massage": ''
    },
    13:{
        "available": true,
        "name": '',
        "party_of": 1,
        "data": '',
        "time": '',
        "phone": '',
        "massage": ''
    },
    14:{
        "available": true,
        "name": '',
        "party_of": 1,
        "data": '',
        "time": '',
        "phone": '',
        "massage": ''
    },
    15:{
        "available": true,
        "name": '',
        "party_of": 1,
        "data": '',
        "time": '',
        "phone": '',
        "massage": ''
    },
    16:{
        "available": true,
        "name": '',
        "party_of": 1,
        "data": '',
        "time": '',
        "phone": '',
        "massage": ''
    },
    17:{
        "available": true,
        "name": '',
        "party_of": 1,
        "data": '',
        "time": '',
        "phone": '',
        "massage": ''
    },
    18:{
        "available": true,
        "name": '',
        "party_of": 1,
        "data": '',
        "time": '',
        "phone": '',
        "massage": ''
    },
    19:{
        "available": true,
        "name": '',
        "party_of": 1,
        "data": '',
        "time": '',
        "phone": '',
        "massage": ''
    },
    20:{
        "available": true,
        "name": '',
        "party_of": 1,
        "data": '',
        "time": '',
        "phone": '',
        "massage": ''
    },
    21:{
        "available": true,
        "name": '',
        "party_of": 1,
        "data": '',
        "time": '',
        "phone": '',
        "massage": ''
    },
    23:{
        "available": true,
        "name": '',
        "party_of": 1,
        "data": '',
        "time": '',
        "phone": '',
        "massage": ''
    },
    22:{
        "available": true,
        "name": '',
        "party_of": 1,
        "data": '',
        "time": '',
        "phone": '',
        "massage": ''
    },
    24:{
        "available": true,
        "name": '',
        "party_of": 1,
        "data": '',
        "time": '',
        "phone": '',
        "massage": ''
    }
};

// Reservation table

reserveTable = function reserve(id_table) {
    document.getElementById("tableNumder").value = id_table;
};
clearForm = function clear() {
    document.getElementById("tableNumder").value = 0;
    document.getElementById("inputName").value = "";
    document.getElementById("inputNumber").value = 1;
    document.getElementById("inputDate").value = "";
    document.getElementById("inputPhone").value = "";
    document.getElementById("inputTextarea").value = "";
    document.getElementById("inputTime").value = "";

    var button = document.getElementsByClassName('btn-light');
    button[0].setAttribute('disabled', '');
};
addBlock = function addCode(idTable) {
    document.getElementById(idTable).innerHTML += "<div class='block'></div>";
    select = document.getElementById('tableNumder');
    value = select.options[idTable];
    value.setAttribute('disabled', '');
};


// Validation number phone
function isValidNumber() {
    var regex = /^\+?3?8?(0\d{9})$/;
    var phone = document.getElementById("inputPhone").value;

    if (regex.test(phone)) {
        var button = document.getElementsByClassName('btn-light')
        button[0].removeAttribute('disabled');
        return true;
    } else {
        alert("Invalid phone number. Please check your phone number");
        var button = document.getElementsByClassName('btn-light')
        button[0].setAttribute('disabled', '');
        return false;
    }
}

// Random reserve table
randomI = function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
};

randomNumbersFromArray = function randNFA(max, min, length) {
    var result = [];
    for(var j = 0; j < length; j++){
        random = randomI(min, max)
        var idx = result.indexOf(random);
        while (idx != -1) {
            random = randomI(min, max)
            idx = result.indexOf(random);
        }
        result.push(random);
    }
    return result;
};

var randtable  = randomNumbersFromArray(24, 1, 5);
setDefaultReserv = function setDef(id) {
    for (key in tables) {
        if (tables.hasOwnProperty(key)) {
            if (id == key) {
                tables[key].available = false
            }
        }
    }
    table = document.getElementById(id)
    table.classList.remove("available");
    table.classList.add("unavailable");
    addBlock(id)
};


// Setting form reservation
setForm = function set(id) {
    if (id) {
        idTable = id
    } else {
        idTable = document.getElementById("tableNumder").value
    }
    for (key in tables) {
        if (tables.hasOwnProperty(key)) {
            if (idTable == key) {
                tables[key].name = document.getElementById("inputName").value
                tables[key].party_of = document.getElementById("inputNumber").value
                tables[key].data = document.getElementById("inputDate").value
                tables[key].phone = document.getElementById("inputPhone").value
                tables[key].massage = document.getElementById("inputTextarea").value
                tables[key].time = document.getElementById("inputTime").value
                tables[key].available = false
            }
        }
    }
    table = document.getElementById(idTable);
    table.classList.remove("available");
    table.classList.add("unavailable");
    alert('Hi, ' + tables[idTable].name + ' !' + ' Welcome to Grill Club !' + '\r\nYou have booked a table number ' + idTable + '\r\nOn ' + tables[idTable].data + ', about ' + tables[idTable].time + ', for ' + tables[idTable].party_of + ' people. \r\nWe are waiting for you!')
    window.scrollTo(0, 0);
    clearForm();
    addBlock(idTable)
};


// Booking table
bookTable = function book () {
    randtable .forEach(element => setDefaultReserv(element))
};
bookTable();



