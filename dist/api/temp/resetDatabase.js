import ExpressRouterApi from '../../lib/ExpressRouter/ExpressRouter.js';
import Database from '../../class/Database/Database.js';
const router = ExpressRouterApi.route('get', async (request, response) => {
    Database.reset();
    response.json({});
});
export default router;
