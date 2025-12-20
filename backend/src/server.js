import express from 'express';

import path from 'path'
import { ENV } from './config/env.js';

const __dirname = path.resolve()


const app = express();

app.get('/route', (req, res) => {
  res.send('Hello World!');
});

// deployment ready
if(ENV.NODE_ENV === "production"){
  app.use(express.static(path.join(__dirname, "../admin/dist")))

  app.get("/{*any}", (req,res) => {
    res.sendFile(path.join(__dirname, "../admin", "dist", "index.html"))
  })
}




app.listen(ENV.PORT, "0.0.0.0", () => {
  console.log('Server is running on port 3000');
});