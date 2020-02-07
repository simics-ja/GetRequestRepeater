const axios = require('axios')
module.exports = async (req, res) => {
  console.log('Request start')
  console.log('headers')
  console.log(req.headers)

  const origin = req.headers.origin
  if (!['http://localhost:3000', process.env.ALLOW_ORIGIN].includes(origin)) { console.log('denied'); res.end(); return; }

  await axios.get(process.env.TARGET_URL).then((axres) => {
    res.setHeader('content-type', axres.headers['content-type'])
    res.setHeader('Access-Control-Allow-Origin', origin)
    res.status(200).send(axres.data)
  }).catch((e) => {
    console.log(e)
    res.status(500).send('Internal Server Error.')
  })
  res.end()
  console.log('Response end')
}
