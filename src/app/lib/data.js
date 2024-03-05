

export default async function InsertDB(name){
    try {
        await db.connect();
        await db.query('INSERT INTO your_table_name (name) VALUES ($1)', [name]);
        console.log("Name inserted successfully into the database");
    } catch (error) {
        console.error('Error inserting name into database:', error);
    } finally {
        await db.end();
    }
}

