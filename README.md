# 🩺 MedGest Backend

**MedGest Backend** es la API REST construida con **NestJS**, que potencia el sistema de gestión médica para clínicas y consultorios. Administra usuarios, roles, pacientes, citas médicas, historial clínico, facturación, y más.

---

## 🚀 Tecnologías

- ⚙️ **NestJS** – Framework backend progresivo
- 💾 **PostgreSQL** – Base de datos relacional
- ✨ **Prisma ORM** – Acceso tipado y seguro a la base de datos
- 🔐 **JWT** – Autenticación robusta
- 🔧 **Class Validator** – Validaciones DTO automáticas
- 📦 **Railway** – Plataforma para deploy y base de datos

---

## 🧱 Arquitectura

rc/
├── auth/ # Login, JWT, estrategias
├── users/ # CRUD de usuarios
├── roles/ # Módulo de roles
├── patients/ # Gestión de pacientes
├── appointments/ # Citas médicas
├── medical-records/ # Historial clínico
├── billing/ # Facturación
├── uploads/ # Subida de archivos
├── notifications/ # Notificaciones internas
├── common/ # PrismaService, guards, utils
├── dtos/ # DTOs compartidos
├── app.module.ts # Módulo principal
└── main.ts # Punto de entrada del servidor



---

## 📦 Instalación

```bash
npm install


