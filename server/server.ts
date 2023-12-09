import server from './index'

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
