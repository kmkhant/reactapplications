// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nc from 'next-connect'

const handler = nc()
  .get((req, res) => {
    res.send('ok')
  })
  .post((req, res) => {
    res.json({ message: 'posted' })
  })

export default handler