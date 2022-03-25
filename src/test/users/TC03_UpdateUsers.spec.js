import users from "../../routes/users.api";
import schema from "../../schema/PutUserSchema.json";
import { describe, test } from "mocha";
import { assert } from "chai";
import * as data from "../../data/UpdateUsers.data";
import { expect } from "../../helper/assert.helper";

describe('as a client, i want to update user', () => {

    test('client send a PUT request /public-api/users/:UserId', async () => {
        const res = await users.PUT(data.UPDATE_USERS)
            assert.equal(res.data.code, 200)
            assert.hasAllKeys(res.data.data, ['id', 'name', 'email', 'gender', 'status'])
            assert.isNotNull(res.data.data)
            expect.JsonSchema(res, schema)
    });

    test('Parameter Email, Name, Gender, Status should be required', async () => {
        const res = await users.PUT(data.REQUIRED_FIELD)
            assert.equal(res.data.code, 422)
            assert.equal(res.data.data[0].message, "can't be blank")
    })
})