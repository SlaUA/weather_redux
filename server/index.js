const express = require('express');
const app = express();
const path = require('path');
const port = require('../config').port;

// share source folder
app.use(express.static(path.join(__dirname, '../build')));

// give html for each request as a SPA
app.get('*', function (req, res) {
	res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(port, function () {
	require('opn')(`http://localhost:${port}`);
});