import _router from 'koa-router';
import home from './home.js';

const router = new _router();
router.use(home.routes());

export default router;
