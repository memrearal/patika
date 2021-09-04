const fs = require("fs");

// Node.js Crud işlemleri

// Create
fs.writeFile("employees.json", '{"name": "Employee 1 Name", "salary": 2000}', "utf8", (err)=>{
    if(err) console.log("Bir hata oluştu: ", err);
    console.log("Dosya oluşturuldu.");
});

// Read
fs.readFile("employees.json", "utf8", (err,data)=>{
    if(err) console.log("Bir hata oluştu: ", err);
    console.log(`Dosya içeriği: ${data}`);
});

// Update
fs.appendFile("employees.json", ',{"name": "Employee 2 Name", "salary": 2500}', "utf8", (err)=>{
    if(err) console.log("Bir hata oluştu: ", err);
    console.log("Dosya güncellendi.");
})

// Delete
fs.unlink("employees.json", (err)=>{
    if(err) console.log("Bir hata oluştu: ", err);
    console.log("Dosya silindi.");
}); 
