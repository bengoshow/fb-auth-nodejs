import express from 'express';
import { webhook } from '../controllers';

const router = express.Router();

router.post('/', webhook);

module.exports = router;
