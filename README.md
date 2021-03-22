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

para levantar la imagen docker puede usar `chmod 777 ./dockerRun.sh && ./dockerRun.sh`

## CI/CD

Se configuro un pipeline de github actions para que en ambientes previos cuando se pushee codigo nuevo se corran los steps de quality y tests, para produccion se corren los mismos steps, se buildea la imagen y se deploya en AWS.

## Infrastructure

Se uso AWS para hostear la aplicion, principalmente por motivos de aprendizaje, use AMmazon ECR para hostear las imagenes docker de la aplicacion, y luego deployo con Amazon ECS con la modalidad AWS Fargate, tambien se configuro un balanceador de carga ALB.

## Usage

Para obtener la ciudad actual del cliente que hizo un request puede usar `/v1/location`, para obtener informacion respecto al clima de una ciudad en especifico `/v1/current/{city}` donde city es opcional si no se usara la ubicacion del cliente que hizo el request, para obtener el pronostico del tiempo en los proximos 5 dias puede utilizar `/v1/forecast` donde city es opcional si no se usara la ubicacion del cliente que hizo el request.

La app esta desplegada en: <http://weather-api-alb-192873902.sa-east-1.elb.amazonaws.com>

request de ejemplos:

# /v1/location

<http://weather-api-alb-192873902.sa-east-1.elb.amazonaws.com/v1/location>

# /v1/current/{city}

<http://weather-api-alb-192873902.sa-east-1.elb.amazonaws.com/v1/current/rosario>

# /v1/forecast

<http://weather-api-alb-192873902.sa-east-1.elb.amazonaws.com/v1/forecast/cordoba>
