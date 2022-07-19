const Conversation = require("../models/Conversation");
const router = require("express").Router();

router.post("/",async (req, res) => {
    const newConversation = new Conversation({
        members: [req.body.senderId, req.body.receiverId]
    })
    try {
        const savedConversation = await newConversation.save();
        res.status(200).json(savedConversation);
    }
    catch(error) {
        res.status(500).json(error);
    }
});

router.get("/:userId", async (req, res)=>{
    console.log(req.params.userId);
    try {
        const conversation = await Conversation.find({
            members: {$in: [req.params.userId]}
        });
        res.status(200).send(conversation);
    }
    catch(err) {
        res.status(500).send(err);
    }
})

module.exports = router;