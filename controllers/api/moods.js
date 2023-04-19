const Mood = require('../../models/mood');

module.exports = {
  index,
  newMood,
  editMood,
  deleteMood
}

async function index(req, res) {
  try {
    const userId = req.user._id;
    const mood = await Mood.findOne({ user: userId }).sort({ date: -1 });
    res.json(mood);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

  function newMood(req, res) {
    const newMood = new Mood({
      user: req.user._id, 
      feeling: req.body.feeling, 
      emotions: req.body.emotions,
      triggers: req.body.triggers,
      reflection: req.body.reflection,
    });  
    newMood.save()
      .then(() => {
        res.status(201).json(newMood);
      })
      .catch((error) => {
        res.status(500).json({ error: error.message });
      });
}

function editMood(req, res) {
  const id = req.params.id;
  const updatedMood = {
    feeling: req.body.feeling,
    emotions: req.body.emotions,
    triggers: req.body.triggers,
    reflection: req.body.reflection
  };
  Mood.findByIdAndUpdate(id, updatedMood, { new: true })
    .then(mood => res.json(mood))
    .catch(err => res.status(500).json({ message: err.message }));
}

  
function deleteMood(req, res) {
  const id = req.params.id;
  Mood.findByIdAndRemove(id)
    .then(mood => {
      if (!mood) {
        return res.status(404).json({ message: "Mood not found" });
      }
      res.json({ message: "Mood successfully deleted" });
    })
    .catch(err => res.status(500).json({ message: err.message }));
}