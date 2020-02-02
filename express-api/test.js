import request from 'supertest'

const {API_URL} = process.env
if (!API_URL) throw new Error(`invalid API_URL: ${API_URL}. check env vars.`)

describe('GET /', () => {
  it('responds with json', done => {
    request(API_URL)
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })
})
