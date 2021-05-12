import express from 'express';

import ExpressRouterServer from '../lib/ExpressRouterTemp/ExpressRouter.js';

import User from '../class/User/User.js';

const router = ExpressRouterServer.route('get', async (
    request : express.Request,
    response : express.Response
) => {

    return response.render('temp/temp');
});

export default router;