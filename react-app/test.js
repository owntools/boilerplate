import request from 'supertest'

const {SERVER_URL} = process.env
if (!SERVER_URL) throw new Error(`invalid SERVER_URL: ${SERVER_URL}. check env vars.`)

describe('GET /', () => {
  it('responds with json', done => {
    console.log(`using SERVER_URL: ${SERVER_URL}`)
    request(SERVER_URL)
      .get('/posts')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })
})
