const express = require('express');
const next = require('next');
const jsonServer = require('json-server');
const path = require('path');
// const mongoose = require('mongoose');
const routes = require('../routes');
const bodyParser = require('body-parser');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = routes.getRequestHandler(app);

const router = jsonServer.router(path.join(__dirname, 'vehicles.json'));

// const bookRoutes = require('./routes/book');
// const portfolioRoutes = require('./routes/portfolio');

// //Auth
// const authService = require('./services/auth');

// const secretData = [
//     {
//         title: 'SecretData 1',
//         description: 'Plans how to build spaceship'
//     },
//     {
//         title: 'SecretData 2',
//         description: 'My secret passwords'
//     }
// ]

// mongoose.connect(process.env.NEXT_SERVER_DB_URI, { useNewUrlParser: true })
//   .then(() => console.log('Database Connected!'))
//   .catch(err => console.error(err))

app
  .prepare()
  .then(() => {
    const server = express();
    server.use(bodyParser.json())

    // server.use('/api/v1/books', bookRoutes);
    // server.use('/api/v1/portfolios', portfolioRoutes);

    // server.get('/api/v1/secret', authService.checkJWT, (req, res) => {
    //     return res.json(secretData)
    // })

    // server.get('/api/v1/onlySiteOwner', authService.checkJWT, authService.checkRole('siteOwner'), (req, res) => {
    //   return res.json(secretData)
    // })

    server.use('/api/v1', router)

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    
    
    // server.use(function (err, req, res, next) {
    //     if (err.name === 'UnauthorizedError') {
    //       res.status(401).send({title: 'Unauthorized', detail: 'Unauthorized Access!'});
    //     }
    // });

    server.listen(3000, err => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })