import { connect } from 'mongoose'

export async function startConnection() {
    const db = await connect('mongodb+srv://root:toor@cluster0.pb9qa.mongodb.net/mangyver-photo?retryWrites=true&w=majority',{});
    console.log('Database is connected');
}