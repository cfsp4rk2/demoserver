import ExpressRouterApi from '../../lib/ExpressRouter/ExpressRouter.js';
import User from '../../class/User/User.js';
const router = ExpressRouterApi.route('post', async (request, response) => {
    const code = request.body.code;
    try {
        await User.confirmEmail(response, code);
    }
    catch (error) {
        return response.json(error);
    }
    return response.json({});
});
export default router;
