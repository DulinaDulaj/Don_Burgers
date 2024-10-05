function loginAdmin() {

    window.location.href = 'admin.html';
}

function loginCachier(params) {

    window.location.href = 'cachier.html';

}
function viewItemsPage() {
    window.location.href = 'adminViewItem.html';

}

function updateItemsPage() {
    window.location.href = 'adminUpdateItem.html';
}

function deleteItemsPage() {
    window.location.href='adminDeleteItem.html';
}

function addCustomerPage() {
    window.location.href='addCustomer.html';
}

function viewCustomerPage() {
    window.location.href='viewCustomer.html';
}

function updateCustomerPage() {
    window.location.href='updateCustomer.html';
}

function viewOrderPage() {
    window.location.href='viewOrder.html';
}



/*ITEMS*/
/*---------------------------------------------------------------------------------------------------*/

if (JSON.parse(localStorage.getItem("Items")) == null) {
    let tempitems = [
        { Itid: "IT1001", Itname: "Classic Burger(Large)", Itcategory: "burgers", Itprice: 1500, Itdiscount: 0, Itqty: 15, Itbday: "2025-07-04" },
        { Itid: "IT1002", Itname: "Classic Burger(Regular)", Itcategory: "burgers", Itprice: 750, Itdiscount: 15, Itqty: 15, Itbday: "2025-07-04" },
        { Itid: "IT1003", Itname: "Turkey Burger", Itcategory: "burgers", Itprice: 1600, Itdiscount: 0, Itqty: 10, Itbday: "2025-07-04" },
        { Itid: "IT1004", Itname: "Chicken Burger(Large)", Itcategory: "burgers", Itprice: 1400, Itdiscount: 0, Itqty: 15, Itbday: "2025-07-04" },
        { Itid: "IT1005", Itname: "Chicken Burger(Regular)", Itcategory: "burgers", Itprice: 800, Itdiscount: 20, Itqty: 15, Itbday: "2025-07-04" },
        { Itid: "IT1006", Itname: "Cheese Burger(Large)", Itcategory: "burgers", Itprice: 1000, Itdiscount: 0, Itqty: 10, Itbday: "2025-07-04" },
        { Itid: "IT1007", Itname: "Cheese Burger(Regular)", Itcategory: "burgers", Itprice: 600, Itdiscount: 0, Itqty: 20, Itbday: "2025-07-04" },
        { Itid: "IT1008", Itname: "Bacon Burger", Itcategory: "burgers", Itprice: 650, Itdiscount: 15, Itqty: 15, Itbday: "2025-07-04" },
        { Itid: "IT1009", Itname: "Shawarma Burger", Itcategory: "burgers", Itprice: 800, Itdiscount: 0, Itqty: 15, Itbday: "2025-07-04" },
        { Itid: "IT1010", Itname: "Olive Burger", Itcategory: "burgers", Itprice: 1800, Itdiscount: 0, Itqty: 15, Itbday: "2025-07-04" },
        { Itid: "IT1011", Itname: "Double-Cheese Burger", Itcategory: "burgers", Itprice: 1250, Itdiscount: 20, Itqty: 15, Itbday: "2025-07-04" },
        { Itid: "IT1012", Itname: "Crispy chicken Burger(Regular)", Itcategory: "burgers", Itprice: 1200, Itdiscount: 0, Itqty: 15, Itbday: "2025-07-04" },
        { Itid: "IT1013", Itname: "Crispy chicken Burger(Large)", Itcategory: "burgers", Itprice: 1600, Itdiscount: 10, Itqty: 15, Itbday: "2025-07-04" },
        { Itid: "IT1014", Itname: "Paneer Burger", Itcategory: "burgers", Itprice: 900, Itdiscount: 0, Itqty: 15, Itbday: "2025-07-04" },

        { Itid: "IT1015", Itname: "Crispy chicken Submarine(Large)", Itcategory: "submarines", Itprice: 2000, Itdiscount: 0, Itqty: 15, Itbday: "2025-07-15" },
        { Itid: "IT1016", Itname: "Crispy chicken Submarine(Regular)", Itcategory: "submarines", Itprice: 1500, Itdiscount: 0, Itqty: 15, Itbday: "2025-07-15" },
        { Itid: "IT1017", Itname: "chicken Submarine(Large)", Itcategory: "submarines", Itprice: 1800, Itdiscount: 3, Itqty: 15, Itbday: "2025-07-15" },
        { Itid: "IT1018", Itname: "chicken Submarine(Regular)", Itcategory: "submarines", Itprice: 1400, Itdiscount: 0, Itqty: 15, Itbday: "2025-07-15" },
        { Itid: "IT1019", Itname: "Grinder Submarine", Itcategory: "submarines", Itprice: 2300, Itdiscount: 0, Itqty: 15, Itbday: "2025-07-15" },
        { Itid: "IT1020", Itname: "Cheese Submarine", Itcategory: "submarines", Itprice: 2200, Itdiscount: 0, Itqty: 15, Itbday: "2025-07-15" },
        { Itid: "IT1021", Itname: "Double Cheese n chicken Submarine", Itcategory: "submarines", Itprice: 1900, Itdiscount: 16, Itqty: 15, Itbday: "2025-07-15" },
        { Itid: "IT1022", Itname: "Special Horgie Submarine", Itcategory: "submarines", Itprice: 2800, Itdiscount: 0, Itqty: 15, Itbday: "2025-07-15" },
        { Itid: "IT1023", Itname: "BQ Special Submarine", Itcategory: "submarines", Itprice: 3000, Itdiscount: 0, Itqty: 15, Itbday: "2025-07-15" },

        { Itid: "IT1024", Itname: "Steak fries(Large)", Itcategory: "fries", Itprice: 1200, Itdiscount: 0, Itqty: 10, Itbday: "2025-07-20" },
        { Itid: "IT1025", Itname: "Steak fries(Medium)", Itcategory: "fries", Itprice: 600, Itdiscount: 0, Itqty: 10, Itbday: "2025-07-20" },
        { Itid: "IT1026", Itname: "French fries(Large)", Itcategory: "fries", Itprice: 800, Itdiscount: 0, Itqty: 10, Itbday: "2025-07-20" },
        { Itid: "IT1027", Itname: "French fries(Medium)", Itcategory: "fries", Itprice: 650, Itdiscount: 0, Itqty: 10, Itbday: "2025-07-20" },
        { Itid: "IT1028", Itname: "French fries(Small)", Itcategory: "fries", Itprice: 450, Itdiscount: 0, Itqty: 10, Itbday: "2025-07-20" },
        { Itid: "IT1029", Itname: "Sweet Potato fries(Large)", Itcategory: "fries", Itprice: 600, Itdiscount: 0, Itqty: 10, Itbday: "2025-07-20" },

        { Itid: "IT1030", Itname: "Chicken n Cheese pasta", Itcategory: "pasta", Itprice: 1600, Itdiscount: 15, Itqty: 5, Itbday: "2025-07-02" },
        { Itid: "IT1031", Itname: "Chicken Penne pasta", Itcategory: "pasta", Itprice: 1700, Itdiscount: 0, Itqty: 5, Itbday: "2025-07-02" },
        { Itid: "IT1032", Itname: "Ground Turkey pasta Bake", Itcategory: "pasta", Itprice: 2900, Itdiscount: 10, Itqty: 5, Itbday: "2025-07-02" },
        { Itid: "IT1033", Itname: "Creamy Shrimp pasta", Itcategory: "pasta", Itprice: 2000, Itdiscount: 0, Itqty: 5, Itbday: "2025-07-02" },
        { Itid: "IT1034", Itname: "Lemon Butter pasta", Itcategory: "pasta", Itprice: 1950, Itdiscount: 0, Itqty: 5, Itbday: "2025-07-02" },
        { Itid: "IT1035", Itname: "Tagliatelle pasta", Itcategory: "pasta", Itprice: 2400, Itdiscount: 1, Itqty: 5, Itbday: "2025-07-02" },
        { Itid: "IT1036", Itname: "Baked Ravioli", Itcategory: "pasta", Itprice: 2000, Itdiscount: 1, Itqty: 5, Itbday: "2025-07-02" },

        { Itid: "IT1037", Itname: "Fried chicken(Small)", Itcategory: "chicken", Itprice: 1200, Itdiscount: 0, Itqty: 10, Itbday: "2025-07-25" },
        { Itid: "IT1038", Itname: "Fried chicken(Regular)", Itcategory: "chicken", Itprice: 2300, Itdiscount: 10, Itqty: 10, Itbday: "2025-07-25" },
        { Itid: "IT1039", Itname: "Fried chicken(Large)", Itcategory: "chicken", Itprice: 3100, Itdiscount: 5, Itqty: 10, Itbday: "2025-07-25" },
        { Itid: "IT1040", Itname: "Hot Wings(Large)", Itcategory: "chicken", Itprice: 2400, Itdiscount: 0, Itqty: 10, Itbday: "2025-07-25" },
        { Itid: "IT1041", Itname: "Devilled chicken(Large)", Itcategory: "chicken", Itprice: 900, Itdiscount: 0, Itqty: 10, Itbday: "2025-07-25" },
        { Itid: "IT1042", Itname: "BBQ chicken(Regular)", Itcategory: "chicken", Itprice: 2100, Itdiscount: 0, Itqty: 10, Itbday: "2025-07-25" },

        { Itid: "IT1043", Itname: "Pepsi(330ml)", Itcategory: "beverage", Itprice: 990, Itdiscount: 5, Itqty: 20, Itbday: "2026-07-25" },
        { Itid: "IT1044", Itname: "Coca-Cola(330ml)", Itcategory: "beverage", Itprice: 1230, Itdiscount: 0, Itqty: 20, Itbday: "2026-07-25" },
        { Itid: "IT1045", Itname: "Sprite(330ml)", Itcategory: "beverage", Itprice: 1500, Itdiscount: 3, Itqty: 20, Itbday: "2026-07-25" },
        { Itid: "IT1046", Itname: "Mirinda(330ml)", Itcategory: "beverage", Itprice: 850, Itdiscount: 7, Itqty: 20, Itbday: "2026-07-25" }

    ];
    localStorage.setItem("Items", JSON.stringify(tempitems));
}

/*CUSTOMERS*/
/*---------------------------------------------------------------------------------------------------*/
if (JSON.parse(localStorage.getItem("Customers")) == null) {
    let tempcustomers = [{Custid: "C1001", Custname: "Don", Custnumber: "0777216869",Custemail: "dulinadulaj01@gmail.com", Custaddress: "Piliyandala"}];

 localStorage.setItem("Customers",JSON.stringify(tempcustomers));    
}

/*ADD ITEMS*/
/*---------------------------------------------------------------------------------------------------*/

if (document.getElementById("tblItem") != null) {
    let tblItems = document.getElementById("tblItem");
    let tblBody = `<thead class="thead-dark table-dark">
                    <tr>
                        <th>Item ID</th>
                        <th>Item Category</th>
                        <th>Item Name</th>
                        <th>Quantity</th>
                        <th>Price(Rs.)</th>
                        <th>Discount</th>
                        <th>Expire Date</th>
                    </tr>
                </thead>`;
    let Temp = JSON.parse(localStorage.getItem("Items"));
    Temp.forEach(element => {
        tblBody += `<tbody class="table" id="itemtablebody">
                    <tr>
                        <td style="background-color: grey;"> ${element.Itid}</td>
                        <td style="background-color: grey;"> ${element.Itcategory}</td>
                        <td style="background-color: grey;"> ${element.Itname}</td>
                        <td style="background-color: grey;"> ${element.Itqty}</td>
                        <td style="background-color: grey;"> ${element.Itprice}</td>
                        <td style="background-color: grey;"> ${element.Itdiscount}</td>
                        <td style="background-color: lightblue;">${element.Itbday}</td>
                    </tr>
                </tbody>`;
    });
    tblItems.innerHTML = tblBody;
}


/*ADD CUSTOMERS*/
/*---------------------------------------------------------------------------------------------------*/

if (document.getElementById("tblCustomers") != null) {
    let tblCust = document.getElementById("tblCustomers");
    let tblBody = `<thead class="thead-dark table-dark">
                    <tr>
                        <th>Customer ID</th>
                        <th>Customer Name</th>
                        <th>Customer Phone Number</th>
                        <th>Email</th>
                        <th>Address</th>
                    </tr>
                </thead>`;
    let Temp = JSON.parse(localStorage.getItem("Customers"));
    Temp.forEach(element => {
        tblBody += `<tbody class="table" id="customertablebody">
                    <tr>
                        <td style="background-color: grey;"> ${element.Custid}</td>
                        <td style="background-color: grey;"> ${element.Custname}</td>
                        <td style="background-color: grey;"> ${element.Custnumber}</td>
                        <td style="background-color: grey;"> ${element.Custemail}</td>
                        <td style="background-color: grey;"> ${element.Custaddress}</td>
                    </tr>
                </tbody>`;
    });
    tblCust.innerHTML = tblBody;
}
/*ITEM ID GENARATE*/
/*----------------------------------------------------------------------------------------------------------------------------*/





/*CLEAR TEXTFIELDS*/
/*------------------------------------------------------------------------------------------------------------------------------*/

function itemclearInput() {
    document.getElementById("ItemID").value = "";
    document.getElementById("itemName").value = "";
    document.getElementById("expireDate").value = "";
    document.getElementById("quantity").value = "";
    document.getElementById("price").value = "";
    document.getElementById("discount").value = "";
    document.getElementById("itemCategory").value = "";

}

function custclearInput() {
    document.getElementById("Custid").value="";
    document.getElementById("Custname").value="";
    document.getElementById("Custnumber").value="";
    document.getElementById("Custemail").value="";
    document.getElementById("Custaddress").value="";
    document.getElementById("txtcustSearch").value="";

}

function AddItem() {
    let ItemArray = JSON.parse(localStorage.getItem("Items"));
    let Itid = document.getElementById("ItemID").value;
    let Itname = document.getElementById("itemName").value;
    let Itcategory = document.getElementById("itemCategory").value;
    let Itprice = Number(document.getElementById("price").value);
    let Itdiscount = Number(document.getElementById("discount").value);
    let Itqty = Number(document.getElementById("quantity").value);
    let Itbday = document.getElementById("expireDate").value;

    if (Itid === "" || Itname === "" || Itcategory === "" || Itbday === "" || Itqty === "" || Itprice === "" || Itdiscount === "") {
        window.alert("Please fill in all the fields.");
        return;
    }


    ItemArray.push({ Itid, Itname, Itcategory, Itprice, Itdiscount, Itqty, Itbday });
    localStorage.setItem("Items", JSON.stringify(ItemArray));
    itemclearInput();
    window.alert("Added Successfully!");
}

function AddCustomer() {
    let ItemArray = JSON.parse(localStorage.getItem("Customers"));
    let Custid = document.getElementById("Custid").value;
    let Custname = document.getElementById("Custname").value;
    let Custnumber = document.getElementById("Custnumber").value;
    let Custemail = document.getElementById("Custemail").value;
    let Custaddress = document.getElementById("Custaddress").value;
   
    if (Custid === "" || Custname === "" || Custnumber === "" || Custemail === "" || Custaddress === "") {
        window.alert("Please fill in all the fields.");
        return;
    }


    ItemArray.push({Custid,Custname,Custnumber,Custemail,Custaddress});
    localStorage.setItem("Customers", JSON.stringify(ItemArray));
    window.alert("Customer Added Successfully!");
    custclearInput();
   
}



function searchitem() {
    let itemsArray = JSON.parse(localStorage.getItem('Items')) || [];
    let txtSearch = document.getElementById('txtSearch').value;
    let itemIndex = itemsArray.findIndex(item => item.Itid === txtSearch);


    if (itemIndex == -1) {
        window.alert("There is no item under this ItemID !")
        document.getElementById("txtSearch").value = "";
        document.getElementById("ItId").value = "";
        document.getElementById("ItName").value = "";
        document.getElementById("ItBday").value = "";
        document.getElementById("ItQty").value = "";
        document.getElementById("ItPrice").value = "";
        document.getElementById("ItDiscount").value = "";
        document.getElementById("ItCategory").value = "";

    } else {

        document.getElementById("ItId").value = itemsArray[itemIndex].Itid;
        document.getElementById("ItCategory").value = itemsArray[itemIndex].Itcategory;
        document.getElementById("ItName").value = itemsArray[itemIndex].Itname;
        document.getElementById("ItBday").value = itemsArray[itemIndex].Itbday;
        document.getElementById("ItQty").value = itemsArray[itemIndex].Itqty;
        document.getElementById("ItPrice").value = itemsArray[itemIndex].Itprice;
        document.getElementById("ItDiscount").value = itemsArray[itemIndex].Itdiscount;



    }

}

function updateitem() {


    let itemsArray = JSON.parse(localStorage.getItem('Items')) || [];
    let txtSearch = document.getElementById('txtSearch').value;
    let itemIndex = itemsArray.findIndex(item => item.Itid === txtSearch);

    let updatedItem = {
        Itid: document.getElementById("ItId").value,
        Itname: document.getElementById("ItName").value,
        Itcategory: document.getElementById("ItCategory").value,
        Itprice: document.getElementById("ItPrice").value,
        Itdiscount: document.getElementById("ItDiscount").value,
        Itqty: document.getElementById("ItQty").value,
        Itbday: document.getElementById("ItBday").value

    }
    itemsArray[itemIndex] = updatedItem;
    localStorage.setItem('Items', JSON.stringify(itemsArray));

    document.getElementById("txtSearch").value = "";
    document.getElementById("ItId").value = "";
    document.getElementById("ItName").value = "";
    document.getElementById("ItBday").value = "";
    document.getElementById("ItQty").value = "";
    document.getElementById("ItPrice").value = "";
    document.getElementById("ItDiscount").value = "";
    document.getElementById("ItCategory").value = "";
    window.alert("Updated Item Successfully !");


}

function deleteItems() {
    
    searchitem();
    let storedItems = JSON.parse(localStorage.getItem("Items"));
    let txtSearch = document.getElementById('txtSearch').value;
    let itemIndex = storedItems.findIndex(item => item.Itid === txtSearch);
    storedItems.splice(itemIndex, 1);
    localStorage.setItem("Items", JSON.stringify(storedItems));

    document.getElementById("txtSearch").value = "";
    document.getElementById("ItId").value = "";
    document.getElementById("ItName").value = "";
    document.getElementById("ItBday").value = "";
    document.getElementById("ItQty").value = "";
    document.getElementById("ItPrice").value = "";
    document.getElementById("ItDiscount").value = "";
    document.getElementById("ItCategory").value = "";
    window.alert("Delete Item Successfully!");

}

function searchcust() {
    let itemsArray = JSON.parse(localStorage.getItem('Customers')) || [];
    let txtcustSearch = document.getElementById('txtcustSearch').value;
    let itemIndex = itemsArray.findIndex(item => item.Custid === txtcustSearch);


    if (itemIndex == -1) {
        window.alert("There is no customer under this ItemID !")
        custclearInput();

    } else {
        document.getElementById("Custid").value=itemsArray[itemIndex].Custid;
        document.getElementById("Custname").value=itemsArray[itemIndex].Custname;
        document.getElementById("Custnumber").value=itemsArray[itemIndex].Custnumber;
        document.getElementById("Custemail").value=itemsArray[itemIndex].Custemail;
        document.getElementById("Custaddress").value=itemsArray[itemIndex].Custaddress;
    }

}

function updatecust() {


    let itemsArray = JSON.parse(localStorage.getItem('Customers')) || [];
    let txtcustSearch = document.getElementById('txtcustSearch').value;
    let itemIndex = itemsArray.findIndex(item => item.Custid === txtcustSearch);

    let updatedItem = {
        Custid:document.getElementById("Custid").value,
        Custname:document.getElementById("Custname").value,
        Custnumber:document.getElementById("Custnumber").value,
        Custemail:document.getElementById("Custemail").value,
        Custaddress:document.getElementById("Custaddress").value

    }
    itemsArray[itemIndex] = updatedItem;
    localStorage.setItem('Customers', JSON.stringify(itemsArray));

    custclearInput();
    window.alert("Update Customer Successfully !");


}
