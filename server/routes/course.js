/*
import express from "express";
import { checkout, fectchLecture, fetchLectures, getAllCourses, getSingleCourse, paymentVerification} from "../controllers/course.js";
import { isAuth } from "../middlewares/isAuth.js";
import { getMyCourses } from "../controllers/admin.js";

const router = express.Router();

router.get("/course/all", getAllCourses);
router.get("/course/:id", getSingleCourse);
router.get("/lectures/:id", isAuth, fetchLectures);
router.get("/lecture/:id", isAuth, fectchLecture);
router.get("/mycourse", isAuth, getMyCourses);
router.post("/course/checkout/:id",isAuth,checkout);
router.post("/verification/:id",isAuth, paymentVerification);

export default router;
*/

import express from "express";
import {
  getAllCourses,
  getSingleCourse,
  fetchLectures,
  fetchLecture,
  getMyCourses,
  checkout,
  paymentVerification,
} from "../controllers/course.js";
import { isAuth } from "../middlewares/isAuth.js";

const router = express.Router();

router.get("/course/all", getAllCourses);
router.get("/course/:id", getSingleCourse);
router.get("/lectures/:id", isAuth, fetchLectures);
router.get("/lecture/:id", isAuth, fetchLecture);
router.get("/mycourse", isAuth, getMyCourses);
router.post("/course/checkout/:id", isAuth, checkout);
router.post("/verification/:id", isAuth, paymentVerification);

export default router;

