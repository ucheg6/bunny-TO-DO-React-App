const Koa = require('koa');
const serve = require('koa-static');

const app = new Koa();
const port = process.env.PORT || 5400;

app.use(serve(__dirname + '/public'));

app.listen(port, () => console.log('Server running on port', port));
