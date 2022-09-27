const Comment = require("../models/Comment");

module.exports = {
    createComment: async (req, res) => {
    try {
        //const comentUser = await User.findById(req.user.id)

        await Comment.create({
            comment: req.body.comment,
            likes: 0,
            post: req.params.id,
            createdBy: req.user.userName,
            createdById: req.user.id
        });
        console.log("Comment has been added!");
        res.redirect("/post/"+req.params.id); //go to server.js to see the path
    } catch (err) {
        console.log(err);
    }
    },
    deleteComments: async (req, res) => {
        try {
            await Comment.deleteOne({_id: req.params.commentid})
            res.redirect(res.redirect("/post/"+req.params.postid))
        } catch(err) {
            console.log(err)
        }
    }
};