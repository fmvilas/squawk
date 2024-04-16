import { GleeFunctionEvent } from "@asyncapi/glee"
import { SquawkRequest } from "../types/SquawkRequest"

export default async function (event: GleeFunctionEvent) {
  const request: SquawkRequest = event.payload
  const message = `Squawk! ${request.message}! `
    .repeat(request.repeat || 1)
    .trimEnd()
  return {
    send: [{
      payload: message
    }]
  }
}