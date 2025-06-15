

const aiService = require('../services/ai.services');

module.exports.getReview = async (req, res) => {
    const code  = req.body.code;

    if (!code) {
        return res.status(400).send("Prompt is required");
    }

    try {
        const response = await aiService(code);
        res.send(response);
    } catch (error) {
        console.error("Error generating response:", error);
        res.status(500).send("Error generating response");
    }
};



// module.exports.getReview = async (req, res) => {
//     const code  = req.body.code;

//     if (!code) {
//         return res.status(400).json({ error: "Code is required" });
//     }

//     try {
//         const response = await aiService(code);
//         res.json({ review: response });
//     } catch (error) {
//         console.error("Error generating response:", error);
//         res.status(500).json({ 
//             error: error.message || "Error generating response" 
//         });
//     }
// };