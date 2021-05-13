# vue3whatsapperjs

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Dockerizing App

### Setup
```
docker build . -t h/vue-wsp
```
### Run
```
docker run --name vue_wsp -p 3000:8080 [-d] h/vue-wsp
```

### Exec
```
docker exec vue_wsp
```
