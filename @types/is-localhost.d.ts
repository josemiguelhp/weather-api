// declaring module will allow typescript to import the module
declare module 'is-localhost' {
  // typing module default export as `any` will allow you to access its members without compiler warning
  const islocalhostJs: any
  export default islocalhostJs
}
