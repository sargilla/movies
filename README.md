# Movies App
Esta es una app de prueba para mostrar en vide de deploy en heroku.

Para poder hacerlo funcional deben clonar el repo y dentro de la carpeta hacer:

```
npm install 

cp .env.example .env
```

Configurar el .env con los datos de su base de datos


```
DB_USER=
DB_PASS=
DB_NAME=
DB_PORT=
```

y poner a andar el proyecto

```
npm start
```

Esta app tambien tiene incorporado un dashboard en React (/dashboard), que consulta algunos datos de productos ficticios, en caso de querer hacer modificaciones sobre el dashboard deberan ingresar a la carpeta /src/dashboard y hacer:

```js
// Instalar los paquetes 
npm install
// desarrollo
npm run serve
// produccion
npm run build
```

una vez compilado deben copiar la carpeta static que genera al  public.


La base de datos de ejemplo esta en src/database (movies_db.sql)