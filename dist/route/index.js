import { LOCATIONS } from '../config.js';
import ExpressRouterServer from '../lib/ExpressRouterTemp/ExpressRouter.js';
const router = ExpressRouterServer.route('get', async (request, response) => {
    const query = request.query.search || "";
    const results = [];
    if (query != "") {
        LOCATIONS.forEach((location) => {
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
