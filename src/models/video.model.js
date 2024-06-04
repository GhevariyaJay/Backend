import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const videoSChema = new Schema({
    videoFile: {
        type: String,   //cloudinary url
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type:String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    views: {
        type: Number,
        default: 0
    },
    thumbnail: {
        type: String,
        required: true
    },
    isPublished: {
        type: Boolean,
        default: true
    },
    owner: {
        type: mongoose.Types.Schema.ObjectId,
        ref: "User"
        
    },

},
{timestamps: true})

videoSChema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video",videoSChema)
