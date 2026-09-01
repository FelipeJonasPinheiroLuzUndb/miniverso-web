import { createServer } from 'node:http'

const port = Number(process.env.PORT) || 3000

const sendJson = (response, statusCode, data) => {
  response.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': 'http://localhost:5187'
  })
  response.end(JSON.stringify(data))
}

const server = createServer((request, response) => {
  if (request.method === 'GET' && request.url === '/api/health') {
    return sendJson(response, 200, {
      status: 'ok',
      service: 'miniverso-api'
    })
  }

  if (request.method === 'GET' && request.url === '/api/projects') {
    return sendJson(response, 200, { projects: [] })
  }

  return sendJson(response, 404, {
    error: 'Rota não encontrada'
  })
})

server.listen(port, () => {
  console.log(`API Miniverso disponível em http://localhost:${port}`)
})
