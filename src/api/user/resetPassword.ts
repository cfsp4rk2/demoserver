import express from 'express';

import ExpressRouterApi from '../../lib/ExpressRouter/ExpressRouter.js';

import User from '../../class/User/User.js';

const router = ExpressRouterApi.route('post', async (
    request : express.Request,
    response : express.Response
) => {
    const code = request.body.code;

    const password = request.body.password;

    const passwordConfirm = request.body.passwordConfirm;

    try {
        await User.resetPassword(response, code, password, passwordConfirm);
    
    } catch(error) { return response.json(error); }

    return response.json({ });
});

export default router;