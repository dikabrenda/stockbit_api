import users from "../../routes/users.api";
import { describe, test } from "mocha";
import { assert } from "chai";
import { expect } from "../../helper/assert.helper";
import schema from "../../schema/DeleteUserSchema.json";

describe('as a client, i want to delete user', () => {
    
    test('client send a DELETE request /public-api/users/:UserId', async () => {
        const res = await users.DELETE()
            assert.equal(res.data.code, 204)
            assert.hasAllKeys(res.data, ['code', 'meta', 'data'])
            expect.JsonSchema(res, schema)
    })
})