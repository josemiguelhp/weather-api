#!/bin/bash
IMAGE_NAME=weather-api
## estas lineas borran todas las imagenes y contenedores! comentar si no se quiere ejecutar
docker rm -vf $(docker ps -a -q)
docker rmi -f $(docker images -a -q)
##################
docker build -t $IMAGE_NAME  .
docker logs --follow $(docker run -p 8080:8080 -d $IMAGE_NAME)