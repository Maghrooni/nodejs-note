import {Router, Request, Response} from 'express';

var router = Router();

router.get('/works', function (req: Request, res: Response) {
    res.send(`Works : \n ${res.statusCode} | ${req.headers}`);
});

router.get('/info', function (req, res) {
    console.dir(req);
});


export default router;