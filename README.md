# Prueba-FrontEnd-Grability
Prueba para cargo de Front-End en Grability

## Instrucciones del aplicativo:

El aplicativo lo desarrollé sobre un entorno servidor basado en gulp, mediante el cual compilé los HTML desde jade y las hojas de estilo CSS desde SASS.

A continuación explico el procedimiento para ejecutar el aplicativo correctamente:

- Es necesario tener instalado nodeJs
- También se necesita instalar Gulp de manera global
- Luego clonar el repositorio ,  desde terminal entrar a la carpeta "Prueba-FrontEnd-Grability"  y ejecutar desde consola
```
npm install
```
- El archivo package.json ya está configurado para descargar todo lo necesario.
- Luego de descargar todo simplemente ejecutar desde consola
```
gulp
```
- Este ejecutara la aplicación en el servidor  [http://localhost:8080/](http://localhost:8080/)

Los datos por defecto están cargándose desde el servidor [http://pruebagrability.comxa.com/recibe.php]( http://pruebagrability.comxa.com/recibe.php) por medio de AJAX, y luego son mostrados por medio de [Angular.js]( https://angularjs.org/) . El  código de está configuración está en la carpeta angular/conexion.js
La configuración para la carga local está en la carpeta angular/ app.js
En el archivo index.jade pueden activar o desactivar el tipo de carga mediante comentarios.
```
script(src="angular/conexion.js")
script(src="angular/app.js")
```

- Si hay algún problema con mucho gusto los ayudare, Pueden ver el desarrollo de la prueba en la rama llamada "Brayan-desarrollo".
- Si quieren pueden darme su usuario github para añadirlos como colaboradores.
-También dejo una rama llamada "grability" que está actualizada.

Eso es todo, les agradezco la oportunidad que me están brindando,  y independiente del resultado de la prueba me gustaría tener una retroalimentación por parte de ustedes.
