const Message = require("../models/Message");
const router = require("express").Router();

//add a message
router.post("/", async (req, res)=>{
    const newMessage = new Message(req.body);
    try {
        const savedMessage = await newMessage.save();
        res.status(200).send(savedMessage);
    }
    catch(error) {
        res.status(500).send(error);
    }
})

//get a message
router.get("/:conversationId", async (req, res)=>{
    try {
        const messages = await Message.find({
            conversationId: req.params.conversationId
        })
        res.status(200).send(messages);
    }
    catch(error) {
        res.status(500).send(error);
    }
})
module.exports = router;