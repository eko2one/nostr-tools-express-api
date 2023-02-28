import express from 'express';
import routes from './src/routes';

const app = express();
const hostname = '127.0.0.1';
const port = 3000;


// Router
app.get('/',(req,res)=>{
    res.status(200).json({
    })
});

app.use('/keys', routes.keys);
app.use('/event', routes.event);
app.use('/events', routes.events);


//  Spin up webserver
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
