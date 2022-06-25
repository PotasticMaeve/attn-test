# Media App
Masonry Layout Website as a Reqruiting Test 

## Demo App
http://media.claudiafelicia.com/  

## What's inside
- [x] a masonry layout with alphabetically sorted name
- [x] search feature by name
- [x] lazy load feature
- [x] responsive design
- [x] test case   

## Installation
This section contains how to install the project on your machine

### Manual
```
$ git clone git@github.com:PotasticMaeve/media-app.git
$ cd media-app
$ yarn install
$ yarn start
```

### Using Docker Compose
```
$ docker-compose up -d
```

## Build the project
```
$ yarn build
```

## Deployment
### Build the image
```
$ docker-compose build --no-cache
```

### Push image to dockerhub
```
$ docker login -u <username> -p <password>
$ docker push claudiadev/media-app:<tag>
```