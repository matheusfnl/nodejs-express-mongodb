import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://matheusfunil:123@alura.jeqxf98.mongodb.net/alura-node');

export default mongoose.connection;