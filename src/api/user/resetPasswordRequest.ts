import express from 'express';

import ExpressRouterApi from '../../lib/ExpressRouter/ExpressRouter.js';

import User from '../../class/User/User.js';

const router = ExpressRouterApi.route('post', async (
    request : express.Request,
    response : express.Response
) => {
    const id = request.body.email;

    try {
        User.resetPasswordRequest(id);
    
    } catch(error) { return response.json(error); }

    return response.json({ });
});

export default router;