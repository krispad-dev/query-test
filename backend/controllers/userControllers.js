
import { User } from '../models/User.js'

export async function getAllUsers(req, res) {

	try {
		const users = await User.Find();
		res.json({ succes: true, users });
	} catch (err) {
		res.json({ succes: false, message: err });
	}

}

export async function createUser(req, res) {

	try {
		const newUser = req.body;

		const createdUser = await User.CreateOne(newUser)

		res.json({ succes: true });
	} catch (err) {
		res.json({ succes: false, message: err });
	}
}

