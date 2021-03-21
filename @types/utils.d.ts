export interface IHttpRequest {
  setUrl(url: string): void
  setBody(body: any): void
  setPath(path: string): void
  setHeader(header: any): void
  post(): any
  get(): any
  patch(): any
}
