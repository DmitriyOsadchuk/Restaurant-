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

randomI = function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
};

randomNumbersFromArray = function randNFA(max, min, length) {
    var result = [];
    for(var j = 0; j < length; j++){
        random = randomI(min, max);
        var idx = result.indexOf(random);
        while (idx != -1) {
            random = randomI(min, max);
            idx = result.indexOf(random);
        }
        result.push(random);
    }
    return result;
};

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
};
addBlock = function addCode(idTable) {
    document.getElementById(idTable).innerHTML += "<div class='block'></div>";
};

setForm = function set() {
    idTable = document.getElementById("tableNumder").value;
    for (key in tables) {
        if (tables.hasOwnProperty(key)) {
            if (idTable == key) {
                tables[key].name = document.getElementById("inputName").value;
                tables[key].party_of = document.getElementById("inputNumber").value;
                tables[key].data = document.getElementById("inputDate").value;
                tables[key].phone = document.getElementById("inputPhone").value;
                tables[key].massage = document.getElementById("inputTextarea").value;
                tables[key].time = document.getElementById("inputTime").value;
                tables[key].available = false
            }
        }
    }
    table = document.getElementById(idTable);
    table.classList.remove("available");
    table.classList.add("unavailable");
    alert('Hi, ' + tables[idTable].name + ' !' + '\r\nYou have booked a table number ' + idTable + '\r\nOn ' + tables[idTable].data + ', at ' + tables[idTable].time +
        ', for ' + tables[idTable].party_of + ' people.' + '\r\nYour phone numder ' + tables[idTable].phone +  '\r\nWe are waiting for you!');
    clearForm();
    addBlock(idTable);

};


var randtable = randomNumbersFromArray(24, 1, 7);
setDefaultReserve = function setDef(id) {
    for (key in tables) {
        if (tables.hasOwnProperty(key)) {
            if (id == key) {
                tables[key].available = false
            }
        }
    }
    table = document.getElementById(id);
    table.classList.remove("available");
    table.classList.add("unavailable");
    addBlock(id)
};

bookTable = function book () {
    randtable.forEach(element => setDefaultReserve(element))
};
bookTable();
