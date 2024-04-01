const express = require('express')
const app = express();

app.use('/', function(req,res){
      res.send('hello i am ankush and amit')
})

app.listen(3000,() => {
      console.log('server is running on 3000')
})
