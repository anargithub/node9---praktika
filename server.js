const express = require('express');
const path = require('path')
const jsonRoute = require('./routes/jsonRoute.js')
const server = express()
const PORT = 3000

server.use(express.static('public'));

server.use(express.urlencoded({extended: true}))
server.use(express.json())



server.get('/', (req, res) => {  
    res.sendFile(path.join(__dirname + '/src/index.html'))
})

server.use('/json', jsonRoute)


server.use(function(req, res){
    res.status(404).send("<h1>Sorry 404</h1>")
})
server.listen(PORT, () => console.log(`server starting on port ${3000}`)) 





// const express = require('express');
// const bodyParser = require('body-parser');
// const fs = require('fs');
// const { v4: uuidv4 } = require('uuid');

// const app = express();
// app.use(bodyParser.urlencoded({ extended: false }));

// app.get('/', (req, res) => {
//   res.send('Привет! Отправьте информацию через форму POST на этот же URL.');
// });

// app.post('/', (req, res) => {
//   // Генерируем уникальный идентификатор
//   const uniqueId = uuidv4();

//   // Записываем информацию в файл с уникальным идентификатором
//   fs.writeFile(`${uniqueId}.txt`, req.body.data, (err) => {
//     if (err) {
//       console.error(err);
//       res.sendStatus(500);
//     } else {
//       // Отправляем обратно результат с уникальным идентификатором
//       res.send(`Файл успешно сохранен с идентификатором: ${uniqueId}`);
//     }
//   });
// });

// app.listen(3000, () => {
//   console.log('Сервер запущен на порту 3000');
// });


// Чтобы использовать этот код, вам понадобится установить зависимости через npm:


// npm install express body-parser uuid


// Затем сохраните код в файле с расширением `.js`, например `server.js`, и запустите сервер командой:


// node server.js


// Теперь вы можете отправлять POST-запросы на `http://localhost:3000/` с информацией из формы, и сервер будет записывать данные в файл с уникальным идентификатором и отправлять обратно результат.