import mongoose from 'mongoose';

export default (connectionString) => mongoose.connect(connectionString);