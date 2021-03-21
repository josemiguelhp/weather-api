# weather-api

## Developers guidelines:

El proyecto es una API desarrollada con Typescript, tiene configurado un linter para llevar una convencion de reglas de codigo estandar entre los desarrolladores, como evitar el uso de console.logs o loops for y while. Tambien tiene configurado prettier como formateador de codigo. recomiendo instalar la extension de vscode de prettier.

cree un .env y agregue la configuracion del proyecto ejemplo:

APP_NAME = 'weather-api'
API_PORT = 8080
API_BASE_PATH = '/v1'
API_VERSION = '1.0.0'

para levantar la aplicacion localmente en un primer uso con `npm install && npm run start` deberia ser suficiente.

para debuggear la aplicacion en visual studio utilize el siguiente launch.json config file:

```
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "skipFiles": ["<node_internals>/**"],
      "program": "${workspaceFolder}/src/index.ts",
      "preLaunchTask": "tsc: build - tsconfig.json",
      "outFiles": ["${workspaceFolder}/**/*.js"]
    }
  ]
}
```
