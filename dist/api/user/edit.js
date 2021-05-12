import ExpressRouterApi from '../../lib/ExpressRouter/ExpressRouter.js';
import User from '../../class/User/User.js';
;
const router = ExpressRouterApi.route('post', [
    User.authorise
], async (request, response) => {
    const firstName = request.body.firstName;
    const lastName = request.body.lastName;
    const email = request.body.email;
    const id = request.user.email;
    try {
        await User.edit(response, id, firstName, lastName, email);
        if (email != null && id !== email)
            User.confirmEmailRequest(email);
    }
    catch (error) {
        return response.json(error);
    }
    return response.json({});
});
export default router;
