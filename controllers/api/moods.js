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
      const moods = await Mood.find({ user: userId });
      res.json(moods);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

function newMood(req, res) {
    const newMood = new Mood({
        user: req.user._id, 
        mood: req.body.mood, 
    });  
    newMood.save()
}

function editMood(req, res) {
    const id = req.params.id;
    Mood.findByIdAndUpdate(id, req.body, { new: true })
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
        res.json(mood);
      })
      .catch(err => res.status(500).json({ message: err.message }));
    }