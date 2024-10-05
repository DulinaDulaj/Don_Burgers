function showid(i) {
    let txt = "IT1";
    if (i < 10) {
        txt += ("00" + i);
    } else if (i < 100) {
        txt += ("0" + i);
    } else {
        txt += i;
    }
    if (document.getElementById("ItemID") != null) {
        document.getElementById("ItemID").value = txt;
    }
}

function getArrayLengthAndShowId() {

    const arrayString = localStorage.getItem('Items');
    let arrayLength = 0;
    if (arrayString) {
        const array = JSON.parse(arrayString);
        if (Array.isArray(array)) {
            arrayLength = array.length;
        }
    }
    showid(arrayLength + 1);
}
getArrayLengthAndShowId();


function showcustid(i) {
    let txt = "C1";
    if (i < 10) {
        txt += ("00" + i);
    } else if (i < 100) {
        txt += ("0" + i);
    } else {
        txt += i;
    }
    if (document.getElementById("Custid") != null) {
        document.getElementById("Custid").value = txt;
    }
}

function getArrayLengthAndShowcustId() {

    const arrayString = localStorage.getItem('Customers');
    let arrayLength = 0;
    if (arrayString) {
        const array = JSON.parse(arrayString);
        if (Array.isArray(array)) {
            arrayLength = array.length;
        }
    }
    showcustid(arrayLength + 1);
}
getArrayLengthAndShowcustId();


function addItemsPage() {
    window.location.href = 'adminAddItem.html'


}


function showOrid(i) {
    let txt = "OR1";
    if (i < 10) {
        txt += ("00" + i);
    } else if (i < 100) {
        txt += ("0" + i);
    } else {
        txt += i;
    }
    if (document.getElementById("ORid") != null) {
        document.getElementById("ORid").value = txt;
    }
}

function getArrayLengthAndShowOrId() {

    const arrayString = localStorage.getItem('Orders');
    let arrayLength = 0;
    if (arrayString) {
        const array = JSON.parse(arrayString);
        if (Array.isArray(array)) {
            arrayLength = array.length;
        }
    }
    showOrid(arrayLength + 1);
}
getArrayLengthAndShowOrId();