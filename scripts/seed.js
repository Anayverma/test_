const {db} = require("@vercel/postgres");

async function createTable(client) {
    try {
        await client.sql`
            CREATE TABLE IF NOT EXISTS names (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL
            );
        `;
        console.log("Table 'names' created successfully");
    } catch (error) {
        console.error('Error creating table:', error);
        throw error;
    }
}

async function main(){
    const client = await db.connect();
    await createTable(client);
    await client.end();
}

main().catch((err)=>{
    console.error(
        "An error occured.",err,
    );
})