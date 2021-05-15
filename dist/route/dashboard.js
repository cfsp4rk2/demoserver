import ExpressRouterServer from '../lib/ExpressRouterTemp/ExpressRouter.js';
import User from '../class/User/User.js';
const router = ExpressRouterServer.route('get', [
    User.authorise
], async (request, response) => {
    return response.render('dashboard/dashboard');
});
export default router;
