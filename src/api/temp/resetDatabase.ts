import express from 'express';

import ExpressRouterApi from '../../lib/ExpressRouter/ExpressRouter.js';

import Database from '../../class/Database/Database.js';

const router = ExpressRouterApi.route('get', async (
    request : express.Request,
    response : express.Response
) => {
    Database.reset();

    response.json({ });
});

export default router;