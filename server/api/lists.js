const router = require('express').Router()
const { models: { List, ListItem}} = require('../db')
module.exports = router


router.get('/', async (req, res, next) => {
  try {
    const lists = await List.findAll({
      include: ListItem,
    });
    res.json(lists);
  } catch (err) {
    next(err);
  }
});

//POST: add a new List
router.post("/", async (req, res, next) => {
  try {
    res.status(201).send(await List.create(req.body));
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const list = await List.findByPk(req.params.id)
    res.send(await list.update(req.body));
  } catch (error) {
    next(error);
  }
});

//Get read all lists
router.get('/:id', async (req, res, next) => {
  try {
    const list = await List.findByPk(req.params.id, {
      include: ListItem,
    });
    res.json(list);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const list = await List.findByPk(req.params.id);
    await list.destroy();
    res.send(list);
  } catch (error) {
    next(error);
  }
});
