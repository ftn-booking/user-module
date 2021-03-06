const express = require('express');
const app = express();

app.use(
	express.static(
		__dirname + '/public'
	)
);

app.disable('x-powered-by');
app.listen(8095, () => console.log('App listening on port 8095'));
