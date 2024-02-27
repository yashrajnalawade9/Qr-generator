const User = require("../model/user");


async function handleReport(req, res) {
    const userId = req.query.userId; 
    const report = req.body.report;
   
        const user = await User.findById(userId);

        if (!user) {
            console.error("User not found");
            return res.status(404).json({ message: "User not found" });
        }

        user.Report = report;
        await user.save();

        return res.render("prescription",
        {uniqueID : user._id},
        );
}

module.exports = { handleReport};