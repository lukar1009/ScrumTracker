import { createPool } from 'mysql2/promise';

export async function connect() {
    const connection = await createPool({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'scrum_tracker_db'
    });
    return connection;
}