# Full Stack Open — Parte 6

Ejercicios de la Parte 6 del curso [Full Stack Open](https://fullstackopen.com/), centrada en la gestión de estado en aplicaciones React usando Redux y React Query (TanStack Query). Este repositorio contiene tres aplicaciones independientes, cada una enfocada en distintos objetivos de aprendizaje de la parte.

## Contenido del repositorio

- `unicafe-redux/`
  - Reimplementación de la app Unicafe utilizando Redux para manejar el estado (contadores de feedback, estadísticas y reseteo).
- `redux-anecdotes/`
  - Anecdotes con Redux Toolkit: creación de store y slices, acciones asíncronas (thunks), notificaciones y filtrado. Suele integrarse con una API para persistir votos y nuevas anécdotas.
- `query-anecdotes/`
  - Anecdotes usando React Query (TanStack Query): obtención y mutación de datos (votos/creación), manejo de caché, estados de carga/errores y revalidación.

## Requisitos

- Node.js LTS (recomendado 18.x o superior)
- npm (o pnpm/yarn, si lo prefieres)

Puedes verificar tu versión con:

```bash
node -v
npm -v
```

## Cómo ejecutar cada proyecto

Cada subcarpeta es una app independiente. Entra en la carpeta correspondiente y ejecuta su servidor de desarrollo.

### 1) Unicafe Redux

```bash
cd unicafe-redux
npm install
# Dependiendo del tooling del proyecto, arranca con uno de estos:
npm run dev   # común en Vite
npm start     # común en Create React App
```

### 2) Redux Anecdotes

```bash
cd redux-anecdotes
npm install
npm run dev   # o
npm start
```

### 3) Query Anecdotes

```bash
cd query-anecdotes
npm install
npm run dev   # o
npm start
```

Notas:
- El comando exacto puede variar según el `package.json` de cada app. Si un comando no existe, revisa la sección `scripts` en el `package.json` para ver el nombre correcto.
- El servidor de desarrollo mostrará en consola la URL (p. ej., `http://localhost:5173` en Vite o `http://localhost:3000` en CRA).

## Backend / API

Algunas apps de esta parte consumen una API (por ejemplo, para listar/votar anécdotas). En los ejercicios del curso, ese backend puede estar en un repositorio/proyecto distinto (proporcionado por Full Stack Open) o simulado.

- Si necesitas configurar una URL base para la API, revisa el código en `src/services/` o archivos donde se creen las solicitudes HTTP; a veces se utiliza una variable de entorno (por ejemplo, `VITE_API_URL` en Vite o `REACT_APP_*` en CRA).
- Sigue las instrucciones de la Parte 6 del curso para levantar el servidor de ejemplo cuando corresponda.

## Tecnologías destacadas

- React
- Redux Toolkit (slices, store, reducers, thunks)
- React Query (TanStack Query) para fetching/mutaciones y caché de datos
- Axios o fetch para solicitudes HTTP (según el ejercicio)

## Estructura a alto nivel

```
part6/
├─ unicafe-redux/
├─ redux-anecdotes/
└─ query-anecdotes/
```

Cada carpeta contiene su propio `package.json`, código fuente en `src/`, y los assets/plantillas en `public/`.

## Estado del proyecto

Este repositorio corresponde a la resolución de los ejercicios de la Parte 6. Está pensado con fines educativos y de práctica, no como un producto listo para producción.

## Enlaces útiles

- Documentación del curso: https://fullstackopen.com/
- Parte 6 (State management): https://fullstackopen.com/en/part6/ (o versión en español si está disponible)
- Redux Toolkit: https://redux-toolkit.js.org/
- TanStack Query: https://tanstack.com/query/latest

## Licencia

Uso educativo en el contexto del curso Full Stack Open.
