# Frontend para API de Reformato de Información

## Descripción del Proyecto
Este proyecto es una aplicación cliente desarrollada con React, que interactúa con el API de Reformato de Información. La aplicación permite visualizar la información proporcionada por el endpoint `/files/data` del API de manera ordenada en pantalla, siguiendo un diseño específico y los filtros `/files/data?fileName=test9.csv`

## Requisitos
- Node.js v16
- npm (Node Package Manager)
- Docker (para contenerización)

## librerias
- webpack
- babel
- axios
- redux toolkit
- react-redux
- react bootstrap
- jest
- testing-library

## Instalación
Para instalar el proyecto y sus dependencias, sigue estos pasos:
1. Clona el repositorio:
```
git clone [URL_DEL_REPOSITORIO] frontend
cd frontend
```
2. Instala las dependencias del proyecto:
```
npm install
```
## Uso
Para iniciar la aplicación, ejecuta:
```
npm start
```

Esto iniciará el servidor de desarrollo y abrirá automáticamente la aplicación en `http://localhost:8080`.

para iniciar el test
```
npm test
```

## Estructura del Proyecto
La aplicación utiliza React y React Bootstrap para el diseño de la interfaz de usuario. Se ha adoptado un enfoque de programación funcional utilizando Hooks para manejar el estado y los efectos.

### Componentes Principales
- `TableDataSet`: Componente principal que realiza la petición al API `/files/data` mediante createAsyncThunk de redux toolkit y muestra los datos.
- `FilterDropdown`: Componente principal que realiza la petición al API de  `/files/list` para mostrar los archivos disponibles y tambien para el filtro del queryParams

## Dockerización
Para contenerizar la aplicación utilizando Docker, asegúrate de seguir las instrucciones proporcionadas en el README del repositorio API, que incluyen cómo configurar Docker Compose para ejecutar tanto el frontend como el backend simultáneamente.

## Layout
El layout de la aplicación se basa en un wireframe proporcionado, que puedes ver aquí: [Wireframe](https://cs1.ssltrust.me/s/ECH9VusiMmi3ac1).