# Capa de Presentación - Proyecto IoT

Este repositorio contiene el desarrollo de la **Capa de Presentación** del sistema IoT, que permite a los **usuarios finales** y a los **administradores** interactuar con los dispositivos IoT a través de una interfaz web. La interacción se realiza mediante la **API RESTful** conectada a la capa de **almacenamiento**, permitiendo gestionar dispositivos, consultar datos y realizar actualizaciones.

---

## Descripción General

La **Capa de Presentación** proporciona una **interfaz web** que permite a los **usuarios** y **administradores** interactuar con el sistema IoT. Sus principales funcionalidades son:

### Para los usuarios finales:
- **Autenticación**: Los usuarios pueden iniciar sesión si están registrados en la base de datos.
- **Interacción con dispositivos**: Acceden a un **dashboard** donde pueden visualizar y monitorear los datos de sus dispositivos en tiempo real.
- **Control y configuración**: Los usuarios pueden modificar configuraciones del dispositivo y enviar comandos a través de la interfaz.

### Para los administradores (equipo de soporte):
- **Gestión del sistema**: Los administradores pueden iniciar sesión para llevar a cabo tareas de soporte y mantenimiento del sistema.
- **Actualización del firmware de dispositivos**: Subir nuevas versiones de firmware para los dispositivos IoT.
- **Revisión de bugs y fallos**: Acceso a logs y monitoreo del sistema para identificar y resolver problemas.
- **Mantenimiento general**: Supervisar la estabilidad del sistema IoT y realizar pruebas de seguridad.

---

## Estructura del Proyecto

El proyecto se organiza en las siguientes carpetas:

```yaml
/capa_de_presentacion  
  ├── A_requisitos/  
  ├── B_investigacion/  
  ├── C_prototipo/  
  ├── D_presentacion/  
  └── README.md  
```

### Descripción de Carpetas:

- **A_requisitos**: Contiene la definición de los requisitos funcionales, tanto para los usuarios finales como para los administradores. Incluye las características clave que debe implementar la capa de presentación.
  
- **B_investigacion**: Contiene la documentación y recursos que se han investigado para desarrollar la capa de presentación, como el uso de frameworks de frontend, integración con la API RESTful, entre otros.
  
- **C_prototipo**: Aquí se incluye el código fuente del prototipo de la interfaz web, que puede ir evolucionando con el tiempo. Esta carpeta contiene los archivos HTML, CSS y JavaScript que forman la interfaz web.
  
- **D_presentacion**: Carpeta que almacena la presentación final del proyecto en los formatos que el equipo decida utilizar (PDF, MP3, MP4, etc.).

---

## Funcionalidades Implementadas

### 1. Autenticación
- Los usuarios finales y administradores pueden iniciar sesión con sus credenciales.
- Las credenciales se validan con la **API RESTful**, que asigna los permisos adecuados según el rol (usuario o administrador).

### 2. Dashboard de Usuario Final
- Visualización de los datos recolectados por sus dispositivos IoT en tiempo real.
- Los usuarios pueden modificar **parámetros del dispositivo** y **enviar comandos** a través del dashboard.

### 3. Panel de Administración
- Los administradores pueden realizar tareas de **mantenimiento del sistema**, como actualizar el firmware de los dispositivos.
- Revisión de **logs** para identificar problemas técnicos y garantizar la estabilidad del sistema.

---

## Interacción con la API RESTful

### Autenticación y Permisos
- La autenticación se maneja mediante **tokens JWT** para usuarios finales y administradores.
- Los permisos se gestionan en la base de datos, controlados a través de la API.

### Consulta y Gestión de Datos
- Peticiones GET para **consultar datos** recolectados por los dispositivos IoT.
- Los usuarios pueden enviar peticiones POST/PUT para modificar configuraciones o enviar comandos.

### Control de Dispositivos
- Los administradores pueden actualizar el **firmware** a través de la API y revisar logs del sistema.

---

### Pruebas y Validación  
**El prototipo ha sido probado para:**  

- Autenticación: Verificación de credenciales de usuarios y administradores.
- Interacción con dispositivos IoT: Pruebas de consulta de datos en
tiempo real y envío de comandos.
- Panel de administración: Actualización de firmware y revisión de logs del sistema.

### Próximos Pasos
* Ampliar las funcionalidades del panel de administración, integrando herramientas de análisis de logs.
* Mejorar el dashboard de usuario con visualizaciones más avanzadas y opciones de configuración personalizadas.
* Optimizar la seguridad y rendimiento del sistema para manejar datos en tiempo real.  

### Licencia  
Este proyecto se encuentra bajo la licencia MIT. Puedes consultar más detalles en el archivo LICENSE.  
