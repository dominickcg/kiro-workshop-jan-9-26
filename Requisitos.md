Requisitos EARS (MVP con backend)
A. Funcionalidad base

REQ-001 (Ubicuidad)
Siempre que el sistema esté activo, el sistema deberá permitir crear tareas con título y prioridad (alta, media, baja).

REQ-002 (Ubicuidad)
Siempre que el sistema esté activo, el sistema deberá permitir marcar tareas como completadas y desmarcarlas.

REQ-003 (Ubicuidad)
Siempre que el sistema esté activo, el sistema deberá permitir filtrar tareas por estado: todas, pendientes, completadas.

REQ-004 (Ubicuidad)
Siempre que el sistema esté activo, el sistema deberá mostrar estadísticas: total, completadas, pendientes.

B. Tipos (TypeScript)

REQ-005 (Ubicuidad)
Siempre que se definan entidades del dominio, el sistema deberá usar TypeScript con la interfaz Task: id, titulo, estado, prioridad, fechaCreacion.

REQ-006 (Ubicuidad)
Siempre que se represente prioridad, el sistema deberá definir el tipo Priority con "alta" | "media" | "baja".

REQ-007 (Ubicuidad)
Siempre que se representen estadísticas, el sistema deberá definir el tipo TaskStats con total, completadas, pendientes.

C. Lógica de negocio (pura e inmutable)

REQ-008 (Ubicuidad)
Siempre que el sistema procese tareas, el sistema deberá implementar funciones puras e inmutables para: crear tarea, conmutar completado, filtrar por estado y calcular estadísticas.

D. Backend (API REST)

REQ-009 (Ubicuidad)
Siempre que el backend esté disponible, el sistema deberá exponer endpoints REST para:
a. crear tarea, b. listar tareas, c. actualizar estado de completado, d. obtener estadísticas.

REQ-010 (Ubicuidad)
Siempre que el backend responda, el sistema deberá usar un formato JSON estandarizado con: statusCode y data en éxito, o statusCode y error en fallo.

REQ-011 (Condicional)
Si el cliente envía una tarea sin título o con más de 100 caracteres, el backend deberá rechazar la solicitud con un error claro.

E. Frontend (consumo de API)

REQ-012 (Evento)
Cuando el usuario abra la aplicación, el frontend deberá cargar la lista de tareas desde la API.

REQ-013 (Evento)
Cuando el usuario cree o actualice una tarea, el frontend deberá reflejar los cambios reconsultando o actualizando el estado con la respuesta de la API.

REQ-014 (Ubicuidad)
Siempre que el usuario interactúe con la vista principal, el frontend deberá renderizar: formulario, lista de tareas, filtros por estado y panel de estadísticas.

F. Validaciones (frontend)

REQ-015 (Condicional)
Si el usuario intenta enviar una tarea sin título o con más de 100 caracteres, el frontend deberá impedir el envío y mostrar un mensaje de error claro.

G. UI/UX (mínima)

REQ-016 (Ubicuidad)
Siempre que se muestren tareas, el frontend deberá aplicar estilos simples por prioridad.

REQ-017 (Ubicuidad)
Siempre que se use la aplicación en móvil, el frontend deberá mantener un layout responsive básico.

H. Ejecución local y pruebas

REQ-018 (Ubicuidad)
Siempre que se realice un cambio funcional, el sistema deberá poder ejecutarse en local con un único flujo claro: iniciar backend y frontend.

REQ-019 (Evento)
Cuando se ejecute la suite de pruebas en local, el sistema deberá incluir al menos pruebas unitarias para las funciones puras de dominio (crear, toggle, filtrar, stats).

REQ-020 (Evento)
Cuando se ejecute el sistema en local, el sistema deberá incluir un mecanismo simple de configuración por variables de entorno (por ejemplo API_BASE_URL).