import supertest from 'supertest';
import app from '../../src/app';
import { readQueries, executeQueries } from '../../src/database/queryUtils';
import conn from '../../src/database/Connection';
const dropQuery = readQueries('../../src/database/dropDatabase.sql');

describe('POST /characters', () => {
	beforeEach(async() => {
		await executeQueries(conn, dropQuery);
		await executeQueries(conn);
	});

	afterAll(async () => {
		await executeQueries(conn, dropQuery);
		await executeQueries(conn);
		await conn.end();
	});

	test('if it creates a character successfully', async () => {
		const response = await supertest(app)
			.post('/characters')
			.send({ name: 'Naruto' });

		expect(response.status).toBe(201);
	});

	test('if it returns a 400 error when name has less than 3 characters', async () => {
		const response = await supertest(app)
			.post('/characters')
			.send({ name: 'Bu' });

		expect(response.status).toBe(400);
		expect(response.body.message).toBe('Name must have at least 3 characters');
	});

	test('if it returns 400 error when no name is sent', async () => {
		const response = await supertest(app)
			.post('/characters')
			.send();

		expect(response.status).toBe(400);
		expect(response.body.message).toBe('Name must be sent');
	});
});