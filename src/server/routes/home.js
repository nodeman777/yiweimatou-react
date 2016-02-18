import _router from 'koa-router';

const router = new _router();
router.get('/', function*() {
    this.body = 'hello koa!!';
});
export default router;