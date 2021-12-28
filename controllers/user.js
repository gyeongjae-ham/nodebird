const User = require('../models/user');

exports.addFollowing = async (req, res, next) => {
    try {
        const user = await User.findOne({ where: { id: req.user.id } });
        if (user) {
            await Follow.destroy({ where: { id: req.user.id } });
            res.send('sucess');
        } else {
            res.status(404).send('no user');
        }
    } catch (error) {
        console.error(error);
        next(error);
    }
};
