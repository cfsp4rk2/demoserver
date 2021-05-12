import ExpressRouterServer from '../lib/ExpressRouterTemp/ExpressRouter.js';
const router = ExpressRouterServer.route('get', async (request, response) => {
    return response.render('login/login');
});
export default router;
