const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const listSchema = new Schema({
  userId: Number,
  favs: [String],
  toWatchList: [String],
  discard: [String],

}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const List = mongoose.model('List', listSchema);
module.exports = List;
