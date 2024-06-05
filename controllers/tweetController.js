const Tweet=require('../models/tweet');

const postTweet=async(req,res)=>{
    const {text}=req.body;

    try{
        const tweet=new Tweet({
            userId:req.user.id,
            text
        });

        await tweet.save();
        res.json(tweet);
    }catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

const getUserTimeline = async (req, res) => {
    const { userId } = req.params;
    console.log(userId);
    const { cursor, limit = 10 } = req.query; 

    try {
        const query = { userId };
        if (cursor) {
            query._id = { $lt: cursor };   // less than the cursor value initially null
        }

        const tweets = await Tweet.find(query)
            .sort({ createdAt: -1 })  // -1 as we want the latest created tweet
            .limit(parseInt(limit) + 1); // limit + 1 to check if there exist next page

        const hasNextPage = tweets.length > limit;
        if (hasNextPage) {
            tweets.pop();  // remove the extra tweet
        }

        res.json({
            tweets,
            nextCursor: hasNextPage ? tweets[tweets.length - 1]._id : null
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

module.exports = {
    postTweet,
    getUserTimeline
};