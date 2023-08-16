const router = require("express").Router();

const {
  getAllUserStories,
  getAUserStory,
  editStory,
  deleteStory,
  createStory,
} = require("../controllers/storyController");



//route foen a particular user
router.route("/").get(getAllUserStories).post(createStory);
router
  .route("/:storyId")
  .get(getAUserStory)
  .patch(editStory)
  .delete(deleteStory);

module.exports = router;
