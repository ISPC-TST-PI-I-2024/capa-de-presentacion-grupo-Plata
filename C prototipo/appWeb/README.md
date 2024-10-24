# Proyecto de Desarrollo Web para Plataforma IoT - README.md

## Descripción General del Proyecto

Este proyecto consiste en el desarrollo de una plataforma web para la gestión y monitoreo de dispositivos IoT de una empresa que ofrece soluciones inteligentes a sus clientes. La plataforma está diseñada para permitir a los usuarios finales interactuar con sus dispositivos de manera remota, mientras que los administradores de la empresa tienen acceso a un panel para gestionar los dispositivos, usuarios, actualizaciones de firmware y monitoreo general. El objetivo principal es ofrecer una experiencia fluida y eficiente tanto para usuarios finales como para administradores.

---

## Árbol de Desarrollo del Proyecto

La estructura del proyecto está organizada de manera clara para facilitar su desarrollo, mantenimiento y expansibilidad. A continuación se detalla la estructura de archivos y carpetas del proyecto:

```
root/
│
├── index.html                   # Página de inicio de la empresa
├── login.html                   # Página de inicio de sesión
├── user_panel.html              # Panel de usuario final
├── admin_panel.html             # Panel de administración
│
├── css/                         # Carpeta para hojas de estilo
│   ├── styles.css               # Hoja de estilo principal
│   └── admin_styles.css         # Estilos específicos para el panel de administración
│
├── js/                          # Carpeta para archivos JavaScript
│   ├── main.js                  # Lógica JavaScript general (inicio, navegación, etc.)
│   ├── user_panel.js            # Lógica para el panel de usuario final
│   └── admin_panel.js           # Lógica para el panel de administración
│
├── assets/                      # Carpeta para recursos estáticos (imágenes, íconos, etc.)
│   ├── images/
│   │   ├── logo.png             # Logo de la empresa
│   │   └── dispositivo.jpg      # Ejemplo de imagen de un dispositivo IoT
│   └── icons/
│       ├── user_icon.svg        # Icono de usuario
│       └── admin_icon.svg       # Icono de administración
│
├── docs/                        # Carpeta para documentación
│   └── api_reference.pdf        # Referencia de la API RESTful (manual)
│
└── README.md                    # Archivo de documentación general del proyecto
```

---

## Descripción de Componentes

### 1. Páginas Principales
- **index.html**: Página de inicio del sitio web, donde se presentan los servicios y productos de la empresa, con enlaces a las secciones de usuario y administración.
- **login.html**: Página de inicio de sesión para usuarios finales y administradores. Redirige a los paneles correspondientes dependiendo del tipo de cuenta.
- **user_panel.html**: Panel de control para los usuarios finales, que les permite ver y controlar sus dispositivos IoT.
- **admin_panel.html**: Panel administrativo que permite a los administradores gestionar dispositivos, actualizaciones de firmware, proyectos, etc.

### 2. Hojas de Estilo (CSS)
- **css/styles.css**: Hoja de estilo principal que define el diseño de la página de inicio, login, y el panel de usuario. Está enfocado en ofrecer una experiencia visual amigable y profesional.
- **css/admin_styles.css**: Hojas de estilo específicas para el panel administrativo, con un enfoque en funcionalidad y usabilidad para tareas administrativas.

### 3. JavaScript (JS)
- **js/main.js**: Contiene la lógica JavaScript general del sitio, incluyendo funcionalidades de navegación y validaciones básicas de formularios.
- **js/user_panel.js**: Lógica específica para el panel del usuario, que incluye la comunicación con la API RESTful para obtener y actualizar información de los dispositivos.
- **js/admin_panel.js**: Lógica específica para el panel de administración, que permite la gestión de dispositivos, usuarios, y actualizaciones de firmware.

### 4. Recursos Estáticos
- **assets/images/**: Contiene todas las imágenes necesarias, como el logo de la empresa y fotos de los dispositivos IoT.
- **assets/icons/**: Contiene los íconos utilizados en los paneles de usuario y administración para mejorar la experiencia visual y navegación.

### 5. Documentación
- **docs/api_reference.pdf**: Manual de referencia de la API RESTful que describe los endpoints disponibles para el consumo de la API. Es fundamental para los desarrolladores que necesiten interactuar con el backend del sistema.

### 6. Archivo de Documentación General
- **README.md**: Este archivo contiene la descripción general del proyecto, información sobre la estructura de archivos y carpetas, instrucciones para la instalación y configuración, y detalles sobre cómo contribuir al proyecto.

---

## Alcance del Proyecto

### Usuarios Finales
El proyecto está dirigido a usuarios que posean dispositivos IoT proporcionados por la empresa. Los usuarios finales pueden interactuar con sus dispositivos de manera remota, controlarlos, ver el estado actual, y realizar configuraciones básicas a través del panel de usuario. El acceso inicial se realiza mediante un token proporcionado al adquirir el dispositivo, y posteriormente se configuran las credenciales personalizadas para acceder al sistema.

### Administradores
Los administradores tienen acceso a un panel específico que les permite gestionar todos los dispositivos registrados en la plataforma, los usuarios asociados, y realizar tareas como actualizaciones de firmware y monitoreo de la red de dispositivos. Los administradores pueden gestionar usuarios, asignar proyectos, y obtener información estadística del funcionamiento de los dispositivos.

### Seguridad y Autenticación
- **Usuarios Finales**: Inicialmente, los usuarios se autentican con un token proporcionado al comprar el dispositivo. Luego, se les solicita definir credenciales personalizadas.
- **Administradores**: Tienen credenciales predeterminadas que permiten el acceso a un proyecto especial en la base de datos que los clasifica como administradores. Posteriormente, pueden cambiar las contraseñas por defecto.

---

## Tecnologías Utilizadas
- **HTML, CSS y JavaScript**: Utilizados para crear la estructura, el diseño y la interactividad del sitio web.
- **API RESTful**: Para gestionar la comunicación entre el frontend y el backend, permitiendo la gestión de dispositivos IoT y usuarios.
- **Backend (No incluido en el proyecto actual)**: Se hace uso de una API RESTful documentada en `docs/api_reference.pdf`.

---

## Instrucciones de Instalación y Configuración

1. **Clonar el Repositorio**:
   ```
   git clone https://github.com/empresa-iot/proyecto-web-iot.git
   ```

2. **Configurar el Servidor**:
   - Asegúrate de tener acceso a la API RESTful para que el sitio pueda interactuar con el backend.
   - Configura las URLs de la API en los archivos JavaScript (`user_panel.js` y `admin_panel.js`).

3. **Desplegar el Sitio**:
   - Puedes usar un servidor local como **XAMPP**, **WAMP**, o simplemente desplegarlo con **Live Server** de VSCode para pruebas locales.

---

## Contribución

Si deseas contribuir a este proyecto, por favor sigue los pasos a continuación:

1. Haz un **fork** del repositorio.
2. Crea una nueva rama para tu función o corrección.
3. Envía un **pull request** describiendo los cambios realizados y su propósito.