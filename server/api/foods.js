const router = require('express').Router()
const { models: { Food, Playlist }} = require('../db')
module.exports = router


router.get('/', async (req, res, next) => {
  try {
    const foods = await Food.findAll({
      include: Playlist,
    });
    res.json(foods);
  } catch (err) {
    next(err);
  }
});

//POST: add a new Food
router.post("/", async (req, res, next) => {
  try {
    res.status(201).send(await Food.create(req.body));
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const food = await Food.findByPk(req.params.id)
    res.send(await food.update(req.body));
  } catch (error) {
    next(error);
  }
});

//Get read all foods
router.get('/:id', async (req, res, next) => {
  try {
    const food = await Food.findByPk(req.params.id, {
      include: Playlist,
    });
    res.json(food);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const food = await Food.findByPk(req.params.id);
    await food.destroy();
    res.send(food);
  } catch (error) {
    next(error);
  }
});
