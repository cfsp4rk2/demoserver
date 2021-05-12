import express from 'express';

import ExpressRouterServer from '../lib/ExpressRouterTemp/ExpressRouter.js';

import User from '../class/User/User.js';

const router = ExpressRouterServer.route('get', [
    // User.authorise
], async (
    request : express.Request,
    response : express.Response
) => {

    return response.render('dashboard/dashboard');
});

export default router;