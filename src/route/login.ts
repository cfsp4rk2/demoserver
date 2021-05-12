import express from 'express';

import ExpressRouterServer from '../lib/ExpressRouterTemp/ExpressRouter.js';

const router = ExpressRouterServer.route('get', async (
    request : express.Request,
    response : express.Response
) => {

    return response.render('login/login');
});

export default router;