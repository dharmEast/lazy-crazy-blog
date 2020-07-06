const express = require('express');
const app = express();
const port = 1234;

app.listen(port, () => {
    console.log(`server is running  port ${port}`);
})

app.set('view engine', 'ejs');

/* by default ejs looks into views folder only by default ,
 if you wan to change the folder name ==> app.set('views','yourFoldername')*/

app.use(express.static('public'));

const blogs = [
    {
        title: 'Love is a mystery',
        snippet: 'This is a vry bitter truth to accept for some hypocrite that in this only one love is pure that mother love '
    },
    {
        title: 'Love end where lust start',
        snippet: 'The ultimate goal of love is lust for 90% people in this world.'
    },
    {
        title: 'Life starts for end',
        snippet: 'The utmost and  relaible truth of life is death'
    },
    {
        title: 'The first god is our parent',
        snippet: 'We have given this life by our parent. For us parent is our god'
    },
]

app.get('/', (req, res) => {
    res.render('index', { title: 'Home' , blogs})
})

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' })
})

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create' })
})

app.use((req, res) => {
    res.render('404', { title: '404' })
})