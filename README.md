# App-Santander-Birras

![Drag Racing](https://www.santander.com.ar/banco/contenthandler/!ut/p/digest!XzWpHd4WWNGJyUWtkUvndg/dav/fs-type1/themes/SRP9Theme/images/layout/logo/santander.png)

## Tabla de Contenido

[TOCM]

[TOC]

---

## Frontend

Creado a partir del comando

```bash
create-react-app
```

App que realiza el almacenamiento de meets asignando los usuarios que se encuentren agregados en el backend, integraciones con 2 apis externas para consulta de temperatura actual y temperaturas en días futuros, ademas de conexión con el backend para almacenamiento de data y login de usuarios. Uso de redux para almacenamiento y consulta de store con data de usuario y lenguaje seleccionado, metodologia de containers y componentes, diccionario de lenguajes con español e ingles.

### Requerimientos Frontend

Node ^10.19.0
NPM o YARN para instalación de paquetes

### Paquetes Frontend

#### Dependencias Frontend

|Nombre|Versión|Información|
|------|-------|-----------|
|@testing-library/jest-dom|5.11.6| [@testing-library.md](https://github.com/testing-library/jest-dom/blob/master/README.md) |
|@testing-library/react|11.2.2| [@testing-library/react.md](https://github.com/testing-library/react-testing-library/blob/master/README.md) |
|@testing-library/user-event|12.6.0| [@testing-library/user-event.md](https://github.com/testing-library/user-event/blob/master/README.md) |
|axios|0.21.0| [axios.md](https://github.com/axios/axios/blob/master/README.md) |
|dotenv|8.2.0| [dotenv.md](https://github.com/motdotla/dotenv/blob/master/README.md) |
|moment|2.29.1| [moment.md](https://github.com/moment/moment/blob/develop/README.md) |
|react|17.0.1| [react.md](https://github.com/facebook/react/blob/master/README.md) |
|react-dom|17.0.1| [react-dom.md](https://github.com/facebook/react/blob/master/README.md) |
|react-redux|7.2.2| [react-redux.md](https://github.com/reduxjs/react-redux/blob/master/README.md) |
|react-router-dom|5.2.0| [react-router-dom.md](https://github.com/ReactTraining/react-router/blob/master/README.md) |
|react-scripts|4.0.1| [react-scripts.md](https://github.com/facebook/create-react-app/blob/master/README.md) |
|redux|4.0.5| [redux.md](https://github.com/reduxjs/redux/blob/master/README.md) |
|redux-thunk|2.3.0| [redux-thunk.md](https://github.com/reduxjs/redux-thunk/blob/master/README.md) |
|uid|2.0.0|[uid.md](https://github.com/lukeed/uid) |
|web-vitals|0.2.4| [web-vitals.md](https://github.com/GoogleChrome/web-vitals/blob/master/README.md) |

#### Dependencias-Dev Frontend

|Nombre|Versión|Información|
|------|-------|-----------|
|enzyme|3.11.0| [enzyme.md](https://github.com/enzymejs/enzyme/blob/master/README.md) |
|enzyme-adapter-react-16|1.15.5| [enzyme-adapter-react-16.md](https://github.com/enzymejs/enzyme/blob/master/README.md) |
|enzyme-to-json|3.6.1| [enzyme-to-json.md](https://github.com/adriantoine/enzyme-to-json/blob/master/README.md) |
|redux-devtools-extension|2.13.8| [redux-devtools-extension.md](https://github.com/zalmoxisus/redux-devtools-extension/blob/master/README.md) |
|redux-mock-store|1.5.4| [redux-mock-store.md](https://github.com/reduxjs/redux-mock-store/blob/master/README.md) |

## Backend

Api realizada con Node y el middleware Express para manejo de rutas y peticiones, conexión a MongoBD para almacenamiento de data de meets, el login es un Mock con un array precargado de usuarios, se valida que el usuario exista ese array y que la contraseña sea la correcta para ese usuario.

Se realizo la implementación de Swagger para documentación de rutas, con ejemplos funcionales de uso, tanto con ejemplo de parámetros de entrada como de salida.

### Requerimientos Backend

Node ^10.19.0
NPM o YARN para instalación de paquetes

### Paquetes Backend

#### Dependencias Backend

|Nombre|Versión|Información|
|------|-------|-----------|
|body-parser|1.19.0| [body-parser.md](https://github.com/expressjs/body-parser/blob/master/README.md) |
|errorhandler|1.5.1| [errorhandler.md](https://github.com/expressjs/errorhandler/blob/master/README.md) |
|express|4.17.1| [express.md](https://github.com/expressjs/express/blob/master/Readme.md) |
|method-override|3.0.0| [method-override.md](https://github.com/expressjs/method-override/blob/master/README.md) |
|mongoose|5.11.8| [mongoose.md](https://github.com/Automattic/mongoose/blob/master/README.md) |
|swagger-ui-express|4.1.6| [swagger-ui-express.md](https://github.com/scottie1984/swagger-ui-express/blob/master/README.md) |

#### Dependencias-Dev Backend

|Nombre|Versión|Información|
|------|-------|-----------|
|babel-cli|6.26.0| [babel-cli.md](https://github.com/babel/babel/blob/main/README.md) |
|babel-preset-env|1.7.0| [babel-preset-env.md](https://github.com/babel/babel/blob/main/README.md) |
|concurrently|5.3.0| [concurrently.md](https://github.com/kimmobrunfeldt/concurrently/blob/master/README.md) |
|cross-env|7.0.3| [cross-env.md](https://github.com/kentcdodds/cross-env/blob/master/README.md) |
|nodemon|2.0.6| [nodemon.md](https://github.com/remy/nodemon/blob/master/README.md) |

### Deploy

Para levantar tanto el backend como el frontend, navegar hasta la carpeta back-end y ejecutar el comando

```bash
yarn start
```

Este sera el msj en consola al levantar proyecto de backend correctamente

```bash
$ concurrently --kill-others-on-fail "yarn server" "yarn client"
$ nodemon --exec babel-node server.js
$ cd ../front-end && yarn start
[0] [nodemon] 2.0.6
[0] [nodemon] to restart at any time, enter `rs`
[0] [nodemon] watching path(s): *.*
[0] [nodemon] watching extensions: js,mjs,json
[0] [nodemon] starting `babel-node server.js`
$ react-scripts start
[0] **** Api listening On 8000 ****
[0] * Api Running On undefined *
[0] Registered Routes:
[0] URI: /api-docs - Method:{"get":true}
[0] URI: / - Method:{"get":true}
[0] URI: /meets - Method:{"get":true}
[0] URI: /new_meets - Method:{"get":true}
[0] URI: /meet - Method:{"post":true}
[0] URI: /check_new_meets - Method:{"post":true}
[0] URI: /check_in_meet - Method:{"post":true}
[0] URI: /users - Method:{"get":true}
[0] URI: /login - Method:{"post":true}
[0] Registered Models:
[0] "Meet"
[0] MongoDB Connected
[1] ℹ ｢wds｣: Project is running at http://192.168.0.71/
[1] ℹ ｢wds｣: webpack output is served from 
[1] ℹ ｢wds｣: Content not from webpack is served from /home/jayala/Desarrollo/AppSantander/front-end/public
[1] ℹ ｢wds｣: 404s will fallback to /
[1] Starting the development server...
[1] 
[1] Compiled with warnings.
[1] 
[1] src/services/apiweather.js
[1]   Line 9:5:   Unreachable code  no-unreachable
[1]   Line 24:5:  Unreachable code  no-unreachable
[1] 
[1] Search for the keywords to learn more about each warning.
[1] To ignore, add // eslint-disable-next-line to the line before.
```

Este script levantara primero el backend y luego ira a la carpeta del front end y ejecutara el script de start. Ambos se levantaran en simultáneos, si se cambia algun archivo del backend o del frontend el servicio volverá a ejecutar el script de start para reflejar los cambios de manera automática. En caso de que se modifique el front solo hará refresh el front, lo mismo para el backend.

## Información Extra

* ### Pruebas

Se realizaron par de archivo de pruebas, uno que realiza las pruebas a las apis de clima y otro el renderizado de un componente con redux, se implemento la libreria de enzyme para realizar el uso de la funcion de shallow y comparar snapshots, para ejecutar las pruebas ubicarse en el directorio front-end y ejecutar el comando

```bash
yarn run test
```

* ### MongoDB

Para conexión a MongoDB realice la reutilización de un archivo docker-compose en la que ya tenia toda la configuración necesaria para levantar el servicio de MongoDB y MongoExpress con autenticación WEB, en caso de querer usar esa misma configuración, en este repositorio estaré subiendo en la carpeta de backend/dockers el archivo yml para levantar ese servicio de Mongo y el MongoExpress, la autenticación vía web del mongo express es: admin, admin. corre en el puerto 8081. Este archivo tiene configuracion propia de una red especifica.

Para ejecutar la instalación del docker ejecutar en la carpeta de backend/dockers el siguiente comando

```bash
docker-compose -f mongo.yml up
```

En caso de no usar esta opción, cambiar en el archivo backend/config/db.js la url de conexión al mongo y levantar el backend.
