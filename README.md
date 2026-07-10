# 📱 Dupe Instagram - Clon Móvil de Instagram

## 🎯 Objetivo
Aplicación móvil estilo Instagram desarrollada con **React Native** y **Expo** que replica la interfaz oficial de Instagram para dispositivos móviles. Consume datos dinámicos en tiempo real desde **The Cat API** para simular un feed real con funcionalidades completas de navegación, visualización de perfiles y detalle de posts.

---

## 📦 Tecnologías Utilizadas

- **React Native** 0.81.5
- **Expo** ~54.0.34
- **React Navigation** (Stack + Bottom Tabs)
- **Axios** para consumo de APIs
- **React Hooks** (useState, useEffect)
- **StyleSheet** de React Native (exclusivamente)

---

## 🗂️ Estructura del Proyecto

```
DupeInstagram/
├── App.js                          # Punto de entrada con SafeAreaProvider y NavigationContainer
├── StackNavigator.js               # Configuración de Stack Navigator (3 pantallas)
├── index.js                        # Entry point
├── app.json                        # Config Expo (splash, icon, StatusBar)
├── package.json                    # Dependencias del proyecto
│
├── pages/                          # Pantallas principales de la app
│   ├── Home.js                    # Feed principal con Stories y FlatList
│   ├── Perfil.js                  # Perfil de usuario con grid 3x3
│   └── PostDetalle.js             # Vista ampliada del post con comentarios
│
├── componentes/                    # Componentes reutilizables
│   ├── Header.js                  # Barra superior con logo
│   ├── Stories.js                 # Carrusel horizontal de historias
│   ├── Feed.js                    # FlatList optimizada 
│   ├── Post.js                    # Componente del post individual
│   └── Footer.js                  # Navegación inferior (5 botones)
│
├── services/                       # Servicios externos
│   └── CatApi.js                  # Consumo de The Cat API con Axios
│
├── assets/                         # Recursos gráficos
│   ├── InfoUsuario.js             # Datos simulados del usuario
│   └── [iconos y logo]
│
├──UsoDeLaIa.txt                    #Explicación y proceso del uso de la IA
└── README.md                        # Documentación (este archivo)
```

---

## 🧩 Descripción de Componentes

### **Header.js**
Barra superior con logo de Instagram e iconos interactivos.
- **Props:** `navigation`, `posts`
- **Estilos:** Logo centrado, iconos en extremos

### **Stories.js** 
Carrusel horizontal de historias simuladas (primeros 8 posts).
- **Props:** `posts`
- **Características:** 
  - Scroll horizontal 
  - Avatares con ring 

### **Feed.js** ⭐ 
Renderizado optimizado del feed usando FlatList (NO `.map()`).
- **Props:** `posts`, `navigation`
- **Características:**
  - Componente FlatList nativo
  - `keyExtractor` para IDs únicos
  - `showsVerticalScrollIndicator={false}`
  - Evita re-renders innecesarios

### **Post.js**
Componente modular del post individual, reutilizable en Feed y PostDetalle.
- **Props:** 
  - `img`: URL de imagen
  - `user`: nombre del usuario
  - `likes`: contador de likes
  - `comments`: contador de comentarios
  - `location`: ubicación simulada
  - `post`: objeto completo del post
  - `navigation`: navegador
  - `enDetalle`: boolean para estilos
  - `comentarios`: array de comentarios

- **Estados Locales:**
  - `liked`: boolean para estado del me gusta
  - `currentLikes`: contador numérico

- **Interacciones:**
  - Click en avatar → navega a Perfil
  - Click en botón like → incrementa/decrementa contador + cambia color
  - Click en imagen → abre PostDetalle

### **PostDetalle.js**
Vista ampliada del post con comentarios simulados.
- **Recibe:** `post` vía `route.params`
- **Incluye:**
  - Componente Post en modo `enDetalle={true}`
  - Listado de comentarios simulados (FlatList)

### **Perfil.js**
Pantalla del usuario con información y cuadrícula de posts.
- **Contiene:**
  - Avatar circular (90x90)
  - Estadísticas: Posts, Seguidores, Seguidos
  - Nombre completo y biografía
  - Botón "Editar perfil"
  - **Cuadrícula de 3 columnas** (numColumns={3})

### **Footer.js**
Barra de navegación inferior con 5 botones.
- **Botones:** Home, Buscar, +, Likes, Perfil
- **Navegación:** Acceso rápido a Home y Perfil
- **Avatar:** Muestra primera imagen de post

---

## 🔄 Flujo de Navegación

```
Home (Feed)
  ↓
  ├─→ Click Post → PostDetalle (Stack)
  │      ↓
  │      └─→ Click Avatar → Perfil (Stack)
  │
  └─→ Footer → Perfil
       ↓
       Click Grid → PostDetalle
```


### **Home.js** (Local)
```javascript
const [posts, setPosts] = useState([]);  // Posts cargados de API
```
- Se carga en `useEffect` al montar
- Consumo: 12 imágenes de gatos

### **Post.js** (Local)
```javascript
const [liked, setLiked] = useState(false);      // Estado del botón
const [currentLikes, setLikes] = useState(likes); // Contador dinámico
```
- Se actualiza con `handleLike()`
- Refleja cambios en tiempo real

### **Perfil.js** (Local)
```javascript
const profilePosts = route?.params?.posts ?? posts;
```
- Recibe posts vía navegación

---

## 📡 Consumo de API

### **Endpoint**
- **URL:** `https://api.thecatapi.com/v1/images/search`
- **Parámetro:** `?limit=12` (mínimo 10 requerido)
- **Formato:** JSON con array de objetos

### **Mapeo de datos**
```javascript
const formattedPosts = data.map((cat, index) => ({
  id: cat.id,
  image: cat.url,
  username: `cat_user_${index + 1}`,
  likes: 120 + Math.random() * 100,
  comments: 20 + Math.random() * 50,
  location: ["Buenos Aires", "Córdoba", "Mendoza"][index % 3]
}));
```

---

## 🚀 Instalación y Ejecución

```bash
# Instalar dependencias
npm install

# Iniciar la app
expo start --tunnel


## 📸 Referencia Visual

La aplicación respeta la estética oficial de Instagram para móviles:
- Paleta monocromática blanca/negra
- Espaciados proporcionales
- Iconografía de acciones estándar
- Jerarquía visual clara

**Mockup de referencia:** [Figma - Instagram Mobile Design](https://www.figma.com/design/9pZ9T1PhWdiu6dVgAIWusc/Instagram-UI-Screens--Community-?node-id=0-2&t=eVPzjVVX9jygtKXX-1)

---
---

