require('colors');
const express = require('express');
const app = express();
const Socket = require('socket.io');
const cors = require('cors');
const server = require('http').createServer(app);

const appRouter = require('./routes');

const PORT = 4000;

let Io = Socket(server, { cors: { origin: "*", credential: true } });

//App use
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
   req.Io = Io;
   next();
})

app.use(appRouter);


server.listen(PORT, () => console.log(`Server started on ${PORT}`.cyan.underline.bold));

Io.on('connection', socket => {
   socket.on('click', args => {
      console.log(args.red.bold);
   })
});

