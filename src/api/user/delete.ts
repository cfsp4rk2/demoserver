import express from 'express';

import ExpressRouterApi from '../../lib/ExpressRouter/ExpressRouter.js';

import User from '../../class/User/User.js';

interface Dictionary<TValue> { [id : string]: TValue; };

const router = ExpressRouterApi.route('delete', [
    User.authorise
], async (
    request : express.Request,
    response : express.Response
) => {
    const password = request.body.password;

    const confirmation = request.body.confirmation;

    const id = (request as Dictionary<any>).user.email;

    try {

        await User.authenticate(response, id, password);

        await User.delete(response, id);
    
    } catch(error) { return response.json(error); }

    return response.json({ });
});

export default router;