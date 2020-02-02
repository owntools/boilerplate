import express from 'express'
import morgan from 'morgan'

const app = express()
const port = parseInt((process.env.PORT || '3000'), 10)

// logging middleware
app.use(morgan('combined'))

app.get('/', (req, res) => {
  res.send('nothing yet')
})

if (require.main === module) {
  app.listen(port, () => console.log(`Example app listening on port ${port}!`))
}

export default app
