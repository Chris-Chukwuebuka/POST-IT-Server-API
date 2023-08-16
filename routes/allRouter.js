const router = require("express").Router();

const { getAllStories, getAStory } = require("../controllers/storyController");

//routes to get stories regardless of the user
router.get("/", getAllStories);
router.get("/:storyId", getAStory);

module.exports = router;
