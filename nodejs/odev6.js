const Koa = require('koa');
const app = new Koa();
const port = 3000;

app.use(ctx => {
    const url = ctx.url;
    if(url==="/"){
        ctx.body = '<h1>Index sayfasına hoşgeldiniz.</h1>';
    }else if(url==="/hakkimda"){
        ctx.body = '<h1>Hakkimda sayfasına hoşgeldiniz</h1>';
    }else if(url==="/iletisim"){
        ctx.body = '<h1>Iletisim sayfasına hoşgeldiniz</h1>';
    }else{
        ctx.body = '<h1>Ulaşmak istediğiniz sayfa bulunamadı.</h1>';
    }
});

app.listen(port, ()=>{
    console.log(`Web sunucu başlatıldı. Sunucu portu: ${port}`);
});