# Ease Book FE

**Ease Book FE** es una aplicación web construida con TypeScript, Express y Node.js, utilizando PostgreSQL como base de datos. Este proyecto está diseñado para ofrecer una solución robusta y escalable, con una configuración moderna y fácil de mantener.

## Características

- **Desarrollado con TypeScript:** Proporciona una experiencia de desarrollo con tipado estático.
- **Backend en Express:** Manejo eficiente de rutas y middleware.
- **Base de Datos PostgreSQL:** Almacenamiento y gestión de datos confiables.
- **Documentación API con Swagger:** Interfaz interactiva para explorar la API.
- **Health Check:** Verifica la disponibilidad de la aplicación.

## Requisitos

- [Node.js](https://nodejs.org/) (v16 o superior)
- [Yarn](https://yarnpkg.com/) (opcional, pero recomendado)
- [PostgreSQL](https://www.postgresql.org/)

## Configuración del Proyecto

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/tu-usuario/ease-book-fe.git
   cd ease-book-fe
   ```

2. **Instala las dependencias:**

   Si no tienes Yarn, puedes instalarlo con:

   ```bash
   npm install -g yarn
   ```

   Luego, instala las dependencias del proyecto:

   ```bash
   yarn install
   ```

3. **Configura las variables de entorno:**

   Copia el archivo de ejemplo `.env.example` y renómbralo a `.env`. Ajusta las variables de entorno en el archivo `.env` según tu configuración local:

   ```bash
   cp .env.example .env
   ```

   Edita el archivo `.env` para configurar los detalles de la base de datos y otras variables necesarias.

4. **Inicia el servidor:**

   Para iniciar la aplicación, utiliza el siguiente comando:

   ```bash
   yarn dev
   ```

## Migraciones de Base de Datos

Para gestionar las migraciones de la base de datos, utiliza los siguientes comandos:

- **Crear una nueva migración:**

  ```bash
  npx typeorm migration:create src/migrations/<name>
  ```

  Reemplaza `<name>` con un nombre descriptivo para tu migración.

- **Ejecutar migraciones pendientes:**

  ```bash
  yarn migrate:run
  ```

## Documentación API

La API está documentada usando Swagger. Para explorar la documentación interactiva, accede a la siguiente URL en tu navegador:

- [/docs](http://localhost:8080/docs)

## Health Check

Para verificar el estado de la aplicación, accede al siguiente endpoint en tu navegador:

- [/health](http://localhost:8080/health)

## Carga de Datos Iniciales

Para facilitar la configuración inicial de la base de datos, proporcionamos un archivo SQL que contiene datos de ejemplo. Este archivo puede ser utilizado para poblar la base de datos con información inicial útil para el desarrollo y pruebas.

### Archivo de Datos Iniciales

- **Archivo:** `data/base_data.sql`

### Cómo Usar el Archivo

1. **Asegúrate de que la base de datos esté creada:**

   Antes de cargar los datos, asegúrate de que la base de datos PostgreSQL esté creada y configurada correctamente en tu archivo `.env`.

2. **Ejecuta el archivo SQL:**

   Puedes usar `psql`, la herramienta de línea de comandos de PostgreSQL, para ejecutar el archivo SQL y cargar los datos en la base de datos. Usa el siguiente comando:

   ```bash
   psql -U <usuario> -d <nombre_base_de_datos> -f data/base_data.sql
   ```


Este endpoint te proporcionará información sobre el estado actual de la aplicación y su disponibilidad.

## Contribuciones

Las contribuciones son bienvenidas. Si tienes alguna sugerencia o encuentras un problema, por favor abre un [issue](https://github.com/tu-usuario/ease-book-fe/issues) o envía un [pull request](https://github.com/tu-usuario/ease-book-fe/pulls).

## Licencia

Este proyecto está licenciado bajo la [Licencia MIT](LICENSE).
