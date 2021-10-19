# Prueba Finamiga

como arrancar la aplicacion
# Como Iniciar  

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

En el proyecto, puedes arrancar:

### `npm start`

Ejecuta la aplicación en el modo de desarrollo. \
Abra [http: // localhost: 3000] (http: // localhost: 3000) para verlo en el navegador.

De este modo se cargara la pagina y se podra visualizar en el navegador 

### `App.js`

Primer componente  donde se realizan las importaciones que se usaran dentro del proyecto.
#### `function App`
funcion render que se encarga de mostrar el navbar y redireccionar cada modulo

### `Navbar.js`
En este componente se realiza la creacion del navbar y la division de los modulos que lo conformaran.
 Un apunte importante para enlazar un elemento HTML a una clase de CSS usaremos en todo el proyecto la propiedad className y no class. Esto es para que React no confunda las clases de JavaScript con las de CSS.

### `Rickandmorty.js`
Componente y primer modulo del navbar, en el se desarrollara todo lo que tendra esta pagina.
se empieza importando las dependencias a usarse de la libreria de React
#### `const Rickandmorty`:
Una funcion constante donde se crearan 3 constantes para almacenar info y revisar su estado.
 
 ### ` useEffect`:

 #### ` function Data`
 Una funcion flecha que contiene varias constantes donde se establece la conexion con la Api para consumirla. 

 se setean los personajes y se filtran para mostrarlos.

 Luego se retorna las etiquetas div que contienen todo el diseño visual.

 ### `libreta.js`
 Este es el segundo modulo que compone el navbar , se incia exportando todas las dependencias que se utilizaran.

#### `const libreta`:
una funcion flecha donde se crean 3  constantes para capturar datos y ver su estado

 ### ` useEffect`:
 Contiene un set de los contactos que se parsean con un JSON para poder almacenarlos en el LocalStorage

#### `const submitForm`:
Contiene un sí condicional donde dependiendo si se registra un contacto este lo setea y lo almacena en una nueva lista en el localstorage

#### `const editValue`:
En esta constante se limpian los campos del formulario una vez se hayan registrado

Por ultimo el `Return`contiene el diseño del formulario y la lista de contactos


 
 

# Prueba_Tecnica
