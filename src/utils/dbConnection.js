import mongoose from 'mongoose';
import { CONNECTION_STRING } from '../config';

export default () => mongoose.connect(CONNECTION_STRING);