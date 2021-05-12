import express from 'express';

import ExpressRouterApi from '../../lib/ExpressRouter/ExpressRouter.js';

import User from '../../class/User/User.js';

const router = ExpressRouterApi.route('post', [
    User.authorise
], async (
    request : express.Request,
    response : express.Response
) => {
    const accessToken = request.cookies.accessToken;

    try {
        await User.deauthenticate(response, accessToken);
    
    } catch(error) { return response.json(error); }

    return response.json({ });
});

export default router;