import express, { Request, Response } from 'express'

const app = express()
const port = process.env.PORT || 4000

app.get('/', (req: Request, res: Response) => {
  res.send('An API for the FE')
})

app.listen(port, () => {
  console.log(`Server is running on ${port}`)
})
