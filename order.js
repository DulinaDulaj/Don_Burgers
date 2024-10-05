let cart = [];
let total = Number()
function placeOrderPage() {
    window.location.href = 'placeOrder.html';
}

function viewOrderPage() {
    window.location.href = 'viewOrder.html';
}

function deleteOrderPage() {
    window.location.href = 'deleteOrder.html';
}
function findCustomer() {
    let txtSearch = document.getElementById("txtCustid").value;
    let itemsArray = JSON.parse(localStorage.getItem("Customers"));
    let itemIndex = itemsArray.findIndex(item => item.Custid === txtSearch);

    if(itemIndex!=-1){
        document.getElementById("Ctid").value =itemsArray[itemIndex].Custid
        document.getElementById("Ctname").value = itemsArray[itemIndex].Custname
    }else {
        document.getElementById("Ctid").value = ""
        document.getElementById("Ctname").value = ""
       
        window.alert("There is no Customer Under this Customer ID")
    }

}

if (JSON.parse(localStorage.getItem("Orders")) == null) {
    let tempitems = [{ Orid: "OR1001", Custid: "C1001", Custname: "don", item: [{ Itid: "IT1001", Itname: "Class Burger(Large)", Qty: "2", Price: "3000" }, { Itid: "IT1007", Itname: "Cheese Burger(Regular)", Qty: "2", Price: "1200" }], Total: "Rs.4200" },
    { Orid: "OR1002", Custid: "C1002", Custname: "Thushara", item: [{ Itid: "IT1001", Itname: "Class Burger(Large)", Qty: "2", Price: "3000" }, { Itid: "IT1007", Itname: "Cheese Burger(Regular)", Qty: "2", Price: "1200" }, { Itid: "IT1009", Itname: "Shawarma Burger(Regular)", Qty: "2", Price: "1600" }], Total: "Rs.5800" },
    { Orid: "OR1003", Custid: "C1003", Custname: "Nirosha", item: [{ Itid: "IT1001", Itname: "Class Burger(Large)", Qty: "2", Price: "3000" }, { Itid: "IT1007", Itname: "Cheese Burger(Regular)", Qty: "1", Price: "600" }], Total: "Rs.3600" }
    ];
    localStorage.setItem("Orders", JSON.stringify(tempitems));
}

const table = document.getElementById("itemTableBody");
let tempitems = JSON.parse(localStorage.getItem("Orders"));
tempitems.forEach(order => {

    const row = document.createElement("tr");


    let itemDetails = '';
    order.item.forEach(item => {
        itemDetails += `ID: ${item.Itid}, Name: ${item.Itname}, Qty: ${item.Qty}, Price: ${item.Price}<br>`;
    });


    row.innerHTML = `
            <td>${order.Orid}</td>
            <td>${order.Custid}</td>
            <td>${order.Custname}</td>
            <td>${itemDetails}</td>
            <td>${order.Total}</td>
        `;


    table.appendChild(row);
});


function addToCart() {

    let txtSearch = document.getElementById("Itid").value;
    let itemsArray = JSON.parse(localStorage.getItem('Items')) || [];
    let itemIndex = itemsArray.findIndex(item => item.Itid === txtSearch);
    let Qty = document.getElementById("Quantity").value;
    total = Number(Qty * itemsArray[itemIndex].Itprice) + total
    if (itemIndex != -1) {
        cart.push({
            Itid: itemsArray[itemIndex].Itid,
            Itname: itemsArray[itemIndex].Itname,
            Qty: Qty,
            Price: Qty * itemsArray[itemIndex].Itprice
        })
    }

    let tblCustomers = document.getElementById("tblOrderItem");

    let tblBody = `<tr>
                    <th>Iten ID</th>
                    <th>Item Name</th>
                    <th>Qty</th>
                    <th>price</th>
                </tr>`;

    cart.forEach(data => {
        tblBody += `<tr>
                    <td>${data.Itid}</td>
                    <td>${data.Itname}</td>
                    <td>${data.Qty}</td>
                    <td>${data.Price}</td>
                </tr>`
    });

    tblCustomers.innerHTML = tblBody;
    document.getElementById("Total").value = total;
}
function placeOrder() {
    let ItemArray = JSON.parse(localStorage.getItem("Orders"));
    let Orid = document.getElementById("ORid").value
    let Custid = document.getElementById("Ctid").value
    let Custname = document.getElementById("Ctname").value
    let Total = document.getElementById("Total").value
    ItemArray.push({ Orid, Custid, Custname, item: cart, Total });
    localStorage.setItem("Orders", JSON.stringify(ItemArray));
    window.alert("Successfully Place An Order !")
    cart.length = 0;
    location.reload()

}

function deleteOrder() {
    let txtSearch = document.getElementById("DORid").value;
    let itemsArray = JSON.parse(localStorage.getItem("Orders"));
    let itemIndex = itemsArray.findIndex(item => item.Orid === txtSearch);
    if (itemIndex != -1) {
        

        itemsArray.splice(itemIndex, 1);
        localStorage.setItem("Orders", JSON.stringify(itemsArray));
        window.alert("Order Deleted Successfully")

        document.getElementById("DORid").value =""
        document.getElementById("DCustid").value = ""
        document.getElementById("DCustname").value = ""

    } 

}

function findOrder() {
    let txtSearch = document.getElementById("txtOridSearch").value;
    let itemsArray = JSON.parse(localStorage.getItem("Orders"));
    let itemIndex = itemsArray.findIndex(item => item.Orid === txtSearch);

    if(itemIndex!=-1){
        document.getElementById("DORid").value =itemsArray[itemIndex].Orid
        document.getElementById("DCustid").value = itemsArray[itemIndex].Custid
        document.getElementById("DCustname").value = itemsArray[itemIndex].Custname
    }else {
        document.getElementById("DORid").value = ""
        document.getElementById("DCustid").value = ""
        document.getElementById("DCustname").value = ""
        window.alert("There is no Order Under this Order ID")
    }
}






