const posts = [
    {
        title: 'Blog Gönderisi 1',
        content: 'Blog gönderisi 1 detayları',
        date: '04/09/2021',
        author: 'memrearal'
    },
    {
        title: 'Blog Gönderisi 2',
        content: 'Blog gönderisi 2 detayları',
        date: '04/09/2021',
        author: 'memrearal'
    },
    {
        title: 'Blog Gönderisi 3',
        content: 'Blog gönderisi 3 detayları',
        date: '04/09/2021',
        author: 'memrearal'
    },
    {
        title: 'Blog Gönderisi 4',
        content: 'Blog gönderisi 4 detayları',
        date: '04/09/2021',
        author: 'memrearal'
    }
];

const list = ()=> {
    posts.map((post)=>{
        console.log(`Gönderi Adı: ${post.title}\nGönderi Tarihi: ${post.date}\nGönderi Yazarı: ${post.author}\nGönderi İçeriği: ${post.content}\n\n`);
    })
}

const add = (newPost)=>{
    return new Promise((resolve,reject) => {
        posts.push(newPost);
        resolve(posts);
    })
}

list();

async function newPost(){
    try{
        await add({title: 'Blog Gönderisi 5',content: 'Blog gönderisi 5 detayları',date: '04/09/2021',author: 'memrearal'});
    }catch(err){
        console.log("Hata oluştu: ", err);
    }
}

newPost();

list();
