import chai, { assert } from "chai"
import chaiJsonSchema from "chai-json-schema"

chai.use(chaiJsonSchema)

export const expect = {
      JsonSchema: (res, data) => {
            if(!data){
                  throw new Error(`${data}`)
            } else {
                  assert.jsonSchema(res.data, data)
            }
            
      },
}