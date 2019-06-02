"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
router.get('/all');
router.get('/profile/:username');
router.get('/profile');
router.post('/register');
router.post('/login');
router.put('/profile');
router.delete('/profile');
exports.default = router;
//# sourceMappingURL=userRoutes.js.map