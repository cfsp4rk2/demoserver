import express from 'express';

import ExpressRouterApi from '../../lib/ExpressRouter/ExpressRouter.js';

import User from '../../class/User/User.js';

interface Dictionary<TValue> { [id : string]: TValue; };

const router = ExpressRouterApi.route('post', [
    User.authorise
], async (
    request : express.Request,
    response : express.Response
) => {
    const firstName = request.body.firstName;

    const lastName = request.body.lastName;

    const email = request.body.email;

    const id = (request as Dictionary<any>).user.email;

    try {
        await User.edit(response, id, firstName, lastName, email);

        if (email != null && id !== email) User.confirmEmailRequest(email);
    
    } catch(error) { return response.json(error); }

    return response.json({ });
});

export default router;