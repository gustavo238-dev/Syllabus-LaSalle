# Sylabus LaSalle

Sistema de Gestión de Diseño Pedagógico Universitario — Universidad De La Salle.

## Requisitos Previos

- **PHP** 8.2+
- **Composer**
- **Node.js** 18+ (para frontend)
- **MySQL** 8.0+ (o MariaDB 10.6+)

## Instalación

### 1. Clonar el proyecto
```bash
git clone <repo-url>
cd sylabus-lasalle-main
```

### 2. Instalar dependencias PHP
```bash
composer install
```

### 3. Instalar dependencias Node.js
```bash
npm install
```

### 4. Configurar entorno
```bash
cp .env.example .env
```

### 5. Generar clave de aplicación
```bash
php artisan key:generate
```

### 6. Configurar base de datos

Edita el archivo `.env` con tus credenciales:
```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=sylabus
DB_USERNAME=root
DB_PASSWORD=
```

### 7. Migraciones y seeders
```bash
php artisan migrate --seed
```

### 8. Compilar assets
```bash
npm run build
```

## Ejecución

### Desarrollo
```bash
# Iniciar servidor Laravel
php artisan serve

# En otra terminal: watcher de assets
npm run dev
```

Accede a: `http://localhost:8000`

### Producción
```bash
php artisan serve --host=0.0.0.0 --port=80
```

## Comandos Útiles

```bash
# Limpiar caché
php artisan optimize:clear

# Ver rutas
php artisan route:list

# Ejecutar tests
php artisan test
```

## Stack

| Capa | Tecnología |
|------|-------------|
| Backend | Laravel 12, PHP 8.2+ |
| Frontend | React 19, TypeScript, Inertia.js |
| Estilos | Tailwind CSS 4.x, shadcn/ui |
| DB | MySQL 8.0+ |
| Auth | Laravel Fortify |