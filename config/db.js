import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: 'bienesraices'
        } );
        console.log('Conectado a la base de datos...');
    } catch (error) {
        console.log('ERROR');
        console.log(error);
        process.exit(1); 
    }
}

export default connectDB;