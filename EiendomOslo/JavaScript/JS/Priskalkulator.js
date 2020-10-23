var seaview = false,
    garage = false,
    price = 0,
    totPrice = 0;

function getLocation() { //Finds the 
    var location = document.getElementsByName("omrade"),
        locationVal;
    
    for(var i = 0; i < location.length; i++){
        if(location[i].checked){
            locationVal = location[i].value;
        }
    }
    
    return(locationVal);
}

function getType() {
    var typ = document.getElementsByName("boligtype"),
        typVal;
    
    for(var i = 0; i < typ.length; i++){
        if(typ[i].checked){
            typVal = typ[i].value;
        }
    }
    
    return(typVal);
}

function getAdd() {
    if(document.getElementById("sjoutsikt").checked) {
        seaview = true;
    }
    
    if(document.getElementById("garasje").checked) {
        garage = true;
    }
}

function updatePrice() {
    var loc = getLocation(),
        typ = getType(),
        size = document.getElementById("size").value;
    
    seaview = false;
    garage = false;
    price = 0;
    totPrice = 0;
    
    getAdd();
    
    if(loc === "maj") {
        price = 96365;
    } else if(loc === "fro") {
        price = 96300;
    } else if(loc === "ull") {
        price = 85523;
    } else if(loc === "gru") {
        price = 86200;
    } else if(loc === "eke") {
        price = 84122;
    } else if(loc === "hol") {
        price = 74150;
    } else if(loc === "val") {
        price = 84200;
    } else if(loc === "sen") {
        price = 96365;
    } else {
        price = 0;
    }
    
    if(typ === "hus"){
        price = price*0.9;
    } else if(typ === "leil"){
        price = price*1.1;
    }
    
    if(seaview) {
        price = price*1.03;
    }
    
    if(garage) {
        totPrice += 250000;
    }
    
    totPrice += price*size;
    
    document.getElementById("kvmPris").innerHTML = (price.toFixed(0)).replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
    document.getElementById("totalPris").innerHTML = (totPrice.toFixed(0)).replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
    
}

var inputs = document.getElementsByTagName("input");

for(var k = 0; k < inputs.length; k++) {
    inputs[k].addEventListener("click", updatePrice, false);
}


