import { IncomingMessage, ServerResponse } from "http";

const allAvos = (request: IncomingMessage, response: ServerResponse) => {
  response.end(JSON.stringify({ hello: 'world' }))
}

export default allAvos;