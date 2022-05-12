import { AnyError, Db, MongoClient } from 'mongodb';

const client = new MongoClient(process.env.DATABASE_URI ?? '');

let dbConnection: Db;

export default {
  connectToServer: (callback: (err?: AnyError) => void) => {
    client.connect((err, db) => {
      if (err || !db) {
        return callback(err);
      }

      dbConnection = db.db(process.env.DATABASE_NAME);

      console.log('🔌 Server successfully connected to MongoDB');

      return callback();
    });
  },
  getDb: () => dbConnection,
};
