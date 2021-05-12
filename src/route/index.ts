import express from 'express';
import { LOCATIONS } from '../config.js'
import ExpressRouterServer from '../lib/ExpressRouterTemp/ExpressRouter.js';

import User from '../class/User/User.js';

const router = ExpressRouterServer.route('get', async (
    request : express.Request,
    response : express.Response
) => {

    const query = request.query.search || "";

    const results : Array<string> = [];
    if (query != "") {
        LOCATIONS.forEach((location : string) => {
            if (location.toLowerCase().includes(query.toString().toLowerCase())) {
                results.push(location);
            }
        });
    }

    return response.render('index/index', {
        query,
        results
    });
});

export default router;