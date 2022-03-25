import users from "../../routes/users.api";
import { describe, test } from "mocha";
import { expect } from "../../helper/assert.helper";
import * as data from "../../data/CreateUsers.data";
import * as schema from "../../schema/CreateUserSchema.json";
import { assert } from "chai";

describe('as a client, i want to create new user', () => {

    test('client send a POST request /public-api/users', async () => {
        const res = await users.POST(data.CREATE_USERS)
            assert.equal(res.data.code, 201)
            assert.equal(res.headers['content-type'], 'application/json; charset=utf-8')
            assert.hasAllKeys(res.data.data, ['id', 'name', 'email', 'gender', 'status'])
            assert.isNotNull(res.data.data)
            expect.JsonSchema(res, schema)
            localStorage.setItem('UserId', res.data.data.id)
    })

    test('Parameter email should be unique', async () => {
        const res = await users.POST(data.CREATE_USERS)
            assert.equal(res.data.code, 422)
            assert.equal(res.data.data[0].message, 'has already been taken')
    })

    test('Parameter Email, Name, Gender, Status should be required', async () => {
        const res = await users.POST(data.REQUIRED_FIELD)
            assert.equal(res.data.code, 422)
            assert.equal(res.data.data[0].message, "can't be blank")
    })
})