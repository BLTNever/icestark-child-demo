const proxy = require('http-proxy-middleware');


module.exports = function (app) {
  app.use(proxy('/item-center', { target: 'http://172.16.4.159:10003', changeOrigin: true }));
  app.use(proxy('/oms', { target: 'http://172.16.4.176:28080/', changeOrigin: true }));


};