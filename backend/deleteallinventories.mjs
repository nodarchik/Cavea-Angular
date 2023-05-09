import pkg from 'pg';
const { Pool } = pkg;

async function deleteAllInventories() {
  const pool = new Pool({
    host: 'localhost',
    user: 'admin',
    password: 'admin',
    database: 'cavea',
    port: 5432,
  });

  try {
    await pool.connect();
    await pool.query('DELETE FROM "Inventories";');
    console.log('All inventories deleted successfully.');
  } catch (err) {
    console.error('Error deleting all inventories: ', err);
  } finally {
    await pool.end();
  }
}

deleteAllInventories();
