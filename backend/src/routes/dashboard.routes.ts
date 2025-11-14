import express from 'express'
import { DasboardController } from '../controllers/dashboard.controller';


const dashboardRouter = express.Router();

dashboardRouter.route('/')
    .get(DasboardController.todaySaleSummary)


export default dashboardRouter;
