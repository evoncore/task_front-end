import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/testdb');

var Schema = mongoose.Schema;

export default Schema;