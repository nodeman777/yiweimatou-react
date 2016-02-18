import Koa from 'koa'
//var _debug =require('debug')
import config from '../config'
import routers from './routes'

//const debug = _debug('app:server');
const app = new Koa();
//debug('server init');
if(config.env === 'development'){
    var serve = require('koa-static');
    app.use(serve(config.utils_paths.base(config.dir_dist)));
}
app.use(routers.routes());

export default app;

