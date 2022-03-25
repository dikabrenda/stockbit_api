import users from "../../routes/users.api"
import { describe, test } from "mocha"
import { assert } from "chai"
import * as data from "../../data/GetUsers.data"
import { queryParams } from "../../helper/lib"
import schema from "../../schema/GetUserSchema.json"
import { expect } from "../../helper/assert.helper"

describe('as a client, i want to get the list of data user', () => {

    test('client send a GET request /public-api/users/:UserId', async () => {
        const res = await users.GET()
            assert.equal(res.data.code, 200)
            assert.hasAllKeys(res.data.data, ['id', 'name', 'email', 'gender', 'status'])
            assert.isNotNull(res.data.data)
            expect.JsonSchema(res, schema)
    })

    test('client send a GET request /public-api/users?page=2', async () => {
        const params = queryParams(data.PARAMS_PAGINATION)
        const res = await users.GETALL(params)
            assert.equal(res.data.code, 200)
            assert.equal(res.data.meta.pagination.page, 2)
            assert.equal(res.data.meta.pagination.limit, 20)
            assert.isArray(res.data.data, Array(20))
    })
})