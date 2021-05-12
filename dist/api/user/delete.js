import ExpressRouterApi from '../../lib/ExpressRouter/ExpressRouter.js';
import User from '../../class/User/User.js';
;
const router = ExpressRouterApi.route('delete', [
    User.authorise
], async (request, response) => {
    const password = request.body.password;
    const confirmation = request.body.confirmation;
    const id = request.user.email;
    try {
        await User.authenticate(response, id, password);
        await User.delete(response, id);
    }
    catch (error) {
        return response.json(error);
    }
    return response.json({});
});
export default router;
