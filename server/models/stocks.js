import mongoose from 'mongoose';

const schema = new mongoose.Schema({
	date:String,
	symbol:String,
	open: {type: Number, default: 0},
	close:{type: Number, default: 0},
	low:{type: Number, default: 0},
	high:{type: Number, default: 0},
	volume:{type: Number, default: 0}
});



export default mongoose.model("Stocks",schema);