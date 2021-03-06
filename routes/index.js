"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.get('/works', function (req, res) {
    res.send(`Works : \n ${res.statusCode} | ${req.headers}`);
});
router.get('/info', function (req, res) {
    console.dir(req);
});
exports.default = router;
//# sourceMappingURL=index.js.map