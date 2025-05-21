import express from "express"
import userRoutes from './api/user/user.route'
import registrationRoute from './api/Registration/registration.route'
import personaldetailsRoute from './api/Personal/personal.route'
import physicaldetailsRoute from './api/Physical/physical.route'
import educationalRoute from './api/Educational/educational.route'
import documentRoute from './api/Documents/document.route'


const router = express.Router();

router.use("/users",userRoutes);
router.use("/registration",registrationRoute);
router.use('/personal-details',personaldetailsRoute);
router.use('/physical',physicaldetailsRoute);
router.use('/educational',educationalRoute);
router.use('/document',documentRoute);

export default router;