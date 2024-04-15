
export default async function (event: any) {
  const message: any = `Squawk! ${event.payload.message}! `
    .repeat(event.payload.repeat || 1)
    .trimEnd()
  return {
    send: [{
      payload: message
    }]
  }
}