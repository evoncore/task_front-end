import mongoose from 'mongoose';
import Schema from '../db';

var userSchema = new Schema({
  login: {
    type: String,
    min: 3, max: 26,
    unique: true
  },
  passwords: []
});

var User = mongoose.model('User', userSchema);

export default User;