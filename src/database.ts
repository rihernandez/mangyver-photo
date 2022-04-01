import { connect } from 'mongoose'

export async function startConnection() {
    const db = await connect('mongodb://localhost/mean-gallery',{});
    console.log('Database is connected');
}