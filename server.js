const port = '8080';
const host = '0.0.0.0';
const express = require('express');
const app = express();

app.listen(port, host);

console.log('Server running on %s:%d...', host, port);
