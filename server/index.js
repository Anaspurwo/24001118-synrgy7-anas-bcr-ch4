// const http = require('http');
// const { PORT = 8000 } = process.env;

const express = require('express');
const app = express(); //= process.env;
const port = 8080;

const fs = require('fs');
const path = require('path');


app.get("/", (req, res) => {
    const addrPath = path.join(__dirname, '/public/html/index.html');
    
    res.sendFile("addrPath");
});

// const PUBLIC_DIRECTORY = path.join(process.cwd(), 'public');
const PUBLIC_DIRECTORY = path.join(__dirname, 'public');

function loadStaticFile(filename) {
    const getFile = path.join(PUBLIC_DIRECTORY, filename)
    const file = fs.readFileSync(getFile)

    return file
}

function onRequest(req, res) {
    if(req.url == '/') {
        res.writeHead(200)
        res.end(loadStaticFile('/public/html/index.html'))
    } else if (req.url == '/cars' || req.url.includes('cars')) {
        res.writeHead(200)
        res.end(loadStaticFile('/public/html/cariMobil.html'))
    } else {
        if(req.url.includes('/public/css/style.css')) {
            res.writeHead(200)
            res.end(loadStaticFile(req.url)) 
        } else if (req.url.includes('.js')) {
            res.writeHead(200)
            res.end(loadStaticFile(req.url))
        } else if (req.url.includes('.jpg')) {
            res.setHeader('Content-Type', 'image/jpeg')
            res.writeHead(200)
            res.end(loadStaticFile(req.url), 'binary')
        } else {
            res.writeHead(404)
            res.end(loadStaticFile('not-found.html'))
        }
    }
}

const server = express.createServer(onRequest);
// const server = http.createServer(onRequest);

app.listen(port, () => {
    console.log(`server berjalan di http://localhost:${port}`)
});




// app.get('/', function (req, res) {
//     const addPath = path.join(__dirname, '../public/html/index.html');
//     res.sendFile(addPath);
// });

// app.get('/cars', (req, res) => {
//     const addCarss = carss.join(__dirname, '../public/html/cariMobil.html');
//     res.sendFile(addPath);
// })

// app.get('/public/scripts/cariMobil.html', function (req, res) {
//     const addPath = path.join(__dirname, '../public/scripts/cariMobil.html');
//     console.log({addrPath});
//     res.sendFile(addPath);
// });

// app.get('/public/scripts/cariMobil.html', function (req, res) {
//     const addPath = path.join(__dirname, '../public/scripts/cariMobil.html');
//     console.log({addPath});
//     res.sendFile(addPath);
// });


// app.listen(port, () => {
//     console.log(`server berjalan di http://localhost:${port}`);
// });

