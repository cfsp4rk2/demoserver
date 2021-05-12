import express from 'express';

import ExpressRouterApi from '../../lib/ExpressRouter/ExpressRouter.js';

import User from '../../class/User/User.js';

const router = ExpressRouterApi.route('put', async (
    request : express.Request,
    response : express.Response
) => {
    const id = request.body.email;

    const password = request.body.password;

    const passwordConfirm = request.body.passwordConfirm;

    const firstName = request.body.firstName;

    const lastName = request.body.lastName;

    try {
        await User.create(response, firstName, lastName, id, password, passwordConfirm);

        User.confirmEmailRequest(id);
    
    } catch(error) { return response.json(error); }

    return response.json({ });
});

export default router;