const http = require("http");
const port = 5000;

const server = http.createServer((req,res)=>{
    const url = req.url;
    if(url === "/"){
        res.writeHead(200, {"Content-type": "text/html; charset=utf-8"});
        res.write("<h2>Index sayfasına hoşgeldiniz</h2>");
    }else if(url === "/hakkimda"){
        res.writeHead(200, {"Content-type": "text/html; charset=utf-8"});
        res.write("<h2>Hakkımda sayfasına hoşgeldiniz</h2>");
    }else if(url === "/iletisim"){
        res.writeHead(200, {"Content-type": "text/html; charset=utf-8"});
        res.write("<h2>Iletisim sayfasına hoşgeldiniz</h2>");
    }else{
        res.writeHead(404, {"Content-type": "text/html; charset=utf-8"});
        res.write("<h2>Ulaşmak istediğiniz sayfa bulunamadı</h2>");
    }
    res.end();
})

server.listen(port, ()=>{
    console.log(`Web sunucu başlatıldı. Sunucu portu: ${port}.`);
});
