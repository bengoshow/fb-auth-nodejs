import express from 'express';
import { redirect } from '../controllers';

const router = express.Router();

router.get('/', redirect);

module.exports = router;
