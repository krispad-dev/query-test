import { all, run } from '../helpers/sqLiteFunctions.js';

export const User = {

	Find: async () => {
    
        const data = all(`SELECT * FROM users`)
		return data;

	},


	CreateOne: async ({ username }) => {
    
        const query = `INSERT INTO users( username ) VALUES(:username)`
		const data = run(query, { username })

		return data;

	},

};


