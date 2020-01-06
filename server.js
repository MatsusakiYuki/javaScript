const express = require('express');
const app= express();

app.get('/', (req, res)=>{
	req.send('Hello world');
});

app.listen(8080, ()=>{
	console.log('Server started at 8080');
})
