const router = require('express').Router()
const { models: { ListItem, Vote, User, Item}} = require('../db')
module.exports = router


router.get('/', async (req, res, next) => {
  try {
    const listItems = await ListItem.findAll({
      include: [Vote, User, Item]
    });
    res.json(listItems);
  } catch (err) {
    next(err);
  }
});

//POST: add a new ListItem
router.post("/", async (req, res, next) => {
  try {
    res.status(201).send(await ListItem.create(req.body));
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const listItem = await ListItem.findByPk(req.params.id)
    res.send(await listItem.update(req.body));
  } catch (error) {
    next(error);
  }
});

//Get read all ListItems
router.get('/:id', async (req, res, next) => {
  try {
    const listItem = await ListItem.findByPk(req.params.id, {
      include: [Vote, User, Item]
    });
    res.json(listItem);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const listItem = await ListItem.findByPk(req.params.id);
    await listItem.destroy();
    res.send(listItem);
  } catch (error) {
    next(error);
  }
});
