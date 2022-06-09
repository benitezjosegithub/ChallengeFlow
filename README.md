# ChallengeFlow

Este es un challenge donde se crea una API que provee en formato JSON el estado del tiempo basado en diferentes endpoints.
##Introducción
El siguiente ejercicio plantea el desarrollo de una aplicación de consulta de clima que pueda
visualizar el pronóstico actual, próximos 5 días para la ciudad actual y de otras 5 ciudades seleccionables.
Además del desarrollo específico de las funcionalidades, se requiere identificar y generar los casos de prueba que se consideren necesarios.
El código se entregará en algún repositorio público, por ejemplo Github, Githlab, Bitbucket.
Se recomienda utilizar servicio API de weather Open Weather Map, pero se puede usar utilizar cualquier otro de preferencia.
La ciudad actual se debe detectar con la IP del usuario, no la IP del servidor.
Las configuraciones extra y variables de entorno necesarias para iniciar la aplicación deben estar documentadas y/o enviadas por email.

## Detalles técnicos

Esta API es creada en nodejs v18.3.0 con

- **fastify** para crear el servidor
- **tap** para los tests

se utilizan APIS para obtener los datos del clima y la ubicación

- [**openweathermap**](https://openweathermap.org/) Ejemplo (https://api.openweathermap.org/data/2.5/weather?q=Rosario&appid=${API_KEY})
- [**positionstack**](https://positionstack.com/documentation) Ejemplo (http://api.positionstack.com/v1/forward?access_key=${API_KEY}&query=Rosario)

- se debe de crear un archivo .env para las variables de entorno **_OPENWEATHER_API_KEY, POSITIONSTACK_API_KEY, PORT_**
- debe acceder a la pagina de [**openweathermap**](https://openweathermap.org/) para obtener un token esta se utiliza para obtener el clima
- debe acceder a la pagina de [**positionstack**](https://positionstack.com/documentation) para obtener un token esta se utiliza para obtener datos de la ubicación
