export class HandledError extends Error {
  constructor(message: string) {
    super(message)
  }
}

export class HttpRequestError extends HandledError {
  constructor() {
    super('ERROR_HTTP_REQUEST')
  }
}
export class ServiceError extends HandledError {
  constructor(message: string) {
    super(message)
  }
}

export class ResourceNotFound extends HandledError {
  private resource: any
  constructor(resource: any, message: string) {
    super(message)
    this.resource = resource
  }
}
