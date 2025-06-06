export const projects = [
  {
    id: 1,
    title: "Ecommerce Dashboard",
    description:
      "Panel de administración para una tienda en línea con análisis de ventas en tiempo real.",
    longDescription:
      "Este dashboard para comercio electrónico proporciona una interfaz completa para gestionar productos, pedidos, clientes y análisis de ventas. Incluye gráficos en tiempo real, estadísticas de ventas, gestión de inventario y sistema de notificaciones. La aplicación está construida con React y TypeScript en el frontend, con una API en Node.js y una base de datos PostgreSQL para el almacenamiento de datos.",
    image:
      "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Chart.js",
      "Express",
      "Redux",
    ],
    type: "Full-stack",
    duration: "3 meses", // <-- agregado
    collaborative: true, // <-- agregado
    featured: true,
    gallery: [
      "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/5466810/pexels-photo-5466810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/93599/pexels-photo-93599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    demoUrl: "https://demo-ecommerce.com",
    repoUrl: "https://github.com/agustin/ecommerce-dashboard",
    features: [
      "Gestión de productos, pedidos y clientes",
      "Análisis de ventas en tiempo real con gráficos interactivos",
      "Gestión de inventario con alertas de stock bajo",
      "Sistema de notificaciones para nuevos pedidos y actualizaciones",
      "Autenticación y autorización segura para administradores",
    ],
  },
  {
    id: 2,
    title: "App de gestión de tareas",
    description:
      "Aplicación de productividad con características avanzadas para gestionar proyectos y tareas.",
    longDescription:
      "Esta aplicación de gestión de tareas permite a los usuarios organizar sus proyectos y tareas diarias con características avanzadas como etiquetas, recordatorios, tareas recurrentes, prioridades y filtros personalizados. Los usuarios pueden colaborar en proyectos compartidos, asignar tareas y recibir notificaciones sobre actualizaciones. La aplicación está optimizada para funcionar tanto en dispositivos móviles como en escritorio.",
    image:
      "https://images.pexels.com/photos/6804581/pexels-photo-6804581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: [
      "React",
      "JavaScript",
      "Express",
      "MongoDB",
      "Socket.io",
      "JWT",
      "Sass",
    ],
    type: "Full-stack",
    duration: "4 meses", // <-- agregado
    collaborative: true, // <-- agregado
    gallery: [
      "https://images.pexels.com/photos/6804581/pexels-photo-6804581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/3770612/pexels-photo-3770612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/5989925/pexels-photo-5989925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    demoUrl: "https://task-app-demo.com",
    repoUrl: "https://github.com/agustin/task-management-app",
    features: [
      "Creación, edición y organización de tareas y proyectos",
      "Etiquetas, recordatorios y tareas recurrentes para mayor productividad",
      "Asignación de tareas y colaboración en proyectos compartidos",
      "Notificaciones en tiempo real usando Socket.io",
      "Autenticación segura con JWT",
      "Filtros personalizados y prioridades para mejor gestión",
    ],
  },
  {
    id: 3,
    title: "Sitio web corporativo",
    description:
      "Sitio web responsive para una empresa de servicios financieros.",
    longDescription:
      "Sitio web corporativo moderno y responsive diseñado para una empresa de servicios financieros. Incluye múltiples páginas como inicio, servicios, sobre nosotros, blog y contacto. El sitio cuenta con animaciones sutiles, formularios de contacto, integración con Google Maps y está optimizado para SEO. El diseño se adapta perfectamente a dispositivos móviles, tablets y escritorio, garantizando una experiencia consistente para todos los usuarios.",
    image:
      "https://images.pexels.com/photos/7681551/pexels-photo-7681551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["HTML", "CSS", "JavaScript", "GSAP", "Webpack", "Sass"],
    type: "Frontend",
    duration: "2 meses", // <-- agregado
    collaborative: false, // <-- agregado
    gallery: [
      "https://images.pexels.com/photos/7681551/pexels-photo-7681551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/5483071/pexels-photo-5483071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    demoUrl: "https://corporate-site-demo.com",
    repoUrl: "https://github.com/agustin/corporate-website",
    features: [
      "Diseño responsive adaptado a móviles, tablets y escritorio",
      "Animaciones sutiles para mejorar la experiencia del usuario",
      "Formularios de contacto con validación",
      "Integración con Google Maps para ubicación",
      "Optimización SEO para mejor posicionamiento en buscadores",
    ],
  },
  {
    id: 4,
    title: "Aplicación de clima",
    description:
      "App que muestra el pronóstico del tiempo utilizando la API de OpenWeather.",
    longDescription:
      "Aplicación web que muestra información meteorológica detallada utilizando la API de OpenWeather. Los usuarios pueden buscar pronósticos por ciudad o utilizar su ubicación actual. La aplicación muestra datos como temperatura actual, sensación térmica, humedad, velocidad del viento, índice UV y pronóstico para los próximos 7 días. Incluye visualizaciones como gráficos de temperatura y animaciones que cambian según las condiciones climáticas actuales.",
    image:
      "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["React", "JavaScript", "API REST", "CSS Modules", "Axios"],
    type: "Frontend",
    duration: "1 mes", // <-- agregado
    collaborative: false, // <-- agregado
    gallery: [
      "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/2448749/pexels-photo-2448749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1089168/pexels-photo-1089168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    demoUrl: "https://weather-app-demo.com",
    repoUrl: "https://github.com/agustin/weather-app",
    features: [
      "Búsqueda de pronósticos por ciudad o ubicación actual",
      "Datos meteorológicos detallados: temperatura, humedad, viento, índice UV",
      "Pronóstico extendido para 7 días",
      "Visualización gráfica de temperatura",
      "Animaciones dinámicas según condiciones climáticas",
    ],
  },
];
