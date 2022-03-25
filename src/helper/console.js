import prettier from 'prettier'

const consol = (res) => {
      console.log(prettier.format(JSON.stringify(res.data), {
            semi: false,
            parser: "json-stringify"
      }));
      console.log(res.headers.date)
}

export default consol