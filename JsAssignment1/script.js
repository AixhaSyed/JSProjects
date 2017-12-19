var data= [{
    "first_name" : "James",
    "last_name": "Butt",
    "company_name": "Benton, John B Jr",
    "address": "6649 N Blue Gum St",
    "county": "Orleans",
    "state": "LA",
    "phone1" : "504-621-8927",
    "email" : "jbutt@gmail.com"},
    {
    "first_name" : "Josephine",
    "last_name": "Darakjy",
    "company_name": "Chanay, Jeffrey A Esq",
    "address": "4 B Blue Ridge Blvd",
    "county": "Livingston",
    "state": "MI",
    "phone1" : "810-292-9388",
    "email" : "josephine_darakjy@darakjy.org"   
    },
    {
    "first_name" : "Simona",
    "last_name": "Morasca",
    "company_name": "Chapman, Ross E Esq",
    "address": "6649 N Blue Gum St",
    "county": "Ashland",
    "state": "OH",
    "phone1" : "419-503-2484",
    "email" : "simona@morasca.com"
    },
    {
        
    "first_name" : "Ammie",
    "last_name": "Corrio",
    "company_name": "Moskowitz, Barry S",
    "address": "74874 Atlantic Ave",
    "county": "Franklin",
    "state": "OH",
    "phone1" : "614-648-3265",
    "email" : "ammie@corrio.com"
    },
    {
    "first_name" : "Kallie",
    "last_name": "Blackwood",
    "company_name": "Rowley Schlimgen Inc",
    "address": "701 S Harrison Rd",
    "county": "San Francisco",
    "state": "CA",
    "phone1" : "504-621-8927",
    "email" : "kallie.blackwood@gmail.com"
    },
    {
    "first_name" : "Moon",
    "last_name": "Parlato",
    "company_name": "Ambelang, Jessica M Md",
    "address": "74989 Brandon St",
    "county": "Allegany",
    "state": "NY",
    "phone1" : "585-866-8313",
    "email" : "moon@yahoo.com"
    },
    {
    "first_name" : "Tawna",
    "last_name": "Buvens",
    "company_name": "H H H Enterprises Inc",
    "address": "3305 Nabell Ave #679",
    "county": "New York",
    "state": "NY",
    "phone1" : "212-674-9610",
    "email" : "tawna@gmail.com"
    }, 
    {
    "first_name" : "Micaela",
    "last_name": "Rhymes",
    "company_name": "H Lee Leonard Attorney At Law",
    "address": "20932 Hedley St",
    "county": "Contra Costa",
    "state": "CA",
    "phone1" : "925-647-3298",
    "email" : "micaela_rhymes@gmail.com"
    }, 
    {
    "first_name" : "Elza",
    "last_name": "Lipke",
    "company_name": "Museum Of Science & Industry",
    "address": "6794 Lake Dr E",
    "county": "Essex",
    "state": "NJ",
    "phone1" : "973-927-3447",
    "email" : "elza@yahoo.com"
    },
     {
          "first_name" : "Viva",
    "last_name": "Toelkes",
    "company_name": "Mark Iv Press Ltd",
    "address": "4284 Dorigo Ln",
    "county": "Cook",
    "state": "Ln",
    "phone1" : "773-446-5569",
    "email" : "viva.toelkes@gmail.com"
    }, 
    {
    "first_name" : "Angella",
    "last_name": "Cetta",
    "company_name": "Bender & Hatley Pc",
    "address": "185 Blackstone Bldge",
    "county": "Honolulu",
    "state": "LA",
    "phone1" : "808-892-7943",
    "email" : "angella.cetta@hotmail.com"
    }]

function Employee (first_name, last_name,company_name, address,county,state , phone1, email   ){
    
    this.first_name = first_name;
    this.last_name = last_name;
    this.company_name = company_name;
    this.address = address;
    this.county = county;
    this.state = state;
    this.phone1 = phone1;
    this.email = email;
    
}
var employee = [];

function dataShowing(){

    var table = document.getElementById('myTable');

    for(var i = 0; i < employee.length; i++){
        var row = table.insertRow(i+1);

        var cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);
        var cell4 = row.insertCell(4);
        var cell5 = row.insertCell(5);
        var cell7 = row.insertCell(6);
        var cell8 = row.insertCell(7);
        var cell9 = row.insertCell(8);
        
                

        cell0.innerHTML =employee[i].first_name;
        cell1.innerHTML =employee[i].last_name;
        cell2.innerHTML =employee[i].company_name;
        cell3.innerHTML =employee[i].address;
        cell4.innerHTML =employee[i].county;
        cell5.innerHTML =employee[i].state;
        cell7.innerHTML =employee[i].phone1;
        cell8.innerHTML =employee[i].email;
        
        
        cell9.innerHTML ="<button type='button' class='btn btn-default' onclick='delEmp("+i+")'>Remove</button>";
    }
}



function insertData(){
    for(var i = 0; i < data.length; i++){
         employee.push(new Employee(data[i].first_name,data[i].last_name,data[i].company_name,data[i].address
         ,data[i].county,data[i].state,data[i].phone1,data[i].email
         ));
    }
    dataShowing();
}

function delEmp (index) {
    employee.splice(index,1);

    $('button[type="button"]').click(function(e){
        $(this).closest('tr').remove()
    })


}


