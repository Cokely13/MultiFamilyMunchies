const router = require('express').Router()
const { models: { Item}} = require('../db')
module.exports = router


router.get('/', async (req, res, next) => {
  try {
    const items = await Item.findAll();
    res.json(items);
  } catch (err) {
    next(err);
  }
});

//POST: add a new Item
router.post("/", async (req, res, next) => {
  try {
    res.status(201).send(await Item.create(req.body));
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const item = await Item.findByPk(req.params.id)
    res.send(await item.update(req.body));
  } catch (error) {
    next(error);
  }
});

//Get read all items
router.get('/:id', async (req, res, next) => {
  try {
    const item = await Item.findByPk(req.params.id);
    res.json(item);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const item = await Item.findByPk(req.params.id);
    await item.destroy();
    res.send(item);
  } catch (error) {
    next(error);
  }
});
