const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const TweetSchema=new Schema({
    userId:{type:Schema.Types.ObjectId,ref:'User',required:true},
    text:{type:String,required:true},
    createdAt: { type: Date, default: Date.now }
})

// const TweetSchema=new Schema({
//     userId:{type:Schema.Types.ObjectId,ref:'User',required:true},
//     text:{type:String,required:true}
// },{
//     timestamps:true
// })

module.exports=mongoose.model('Tweet',TweetSchema);