const router = require('express').Router();

const {
    getCourses,
    getSingleCourse,
    createCourse,
    updateCourse,
    deleteCourse,
} = require('../../controllers/courseControllers')

// Route endpoint is /api/courses
router.route('/')
    .get(getCourses)
    .post(createCourse);

// Route endpoint is /api/courses/:courseId
router
    .route('/:courseId')
    .get(getSingleCourse)
    .put(updateCourse)
    .delete(deleteCourse);

module.exports = router;
