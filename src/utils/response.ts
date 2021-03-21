export const responseRequest = (res: any, statusCode: number, data: any) => {
  const response = {
    status: statusCode,
    headers: {
      'Content-Type': 'application/json'
    },
    body: data
  }

  return res.status(statusCode).json(response)
}
