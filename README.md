<p align="center">
<img src="https://user-images.githubusercontent.com/4296205/71327446-ccb82980-24c5-11ea-8956-284860bfee1b.png" width="500" title="Logo DevSpace" alt="Logo">
</p>

[![license](https://img.shields.io/badge/license-MIT-red)](LICENSE.md)
[![website](https://img.shields.io/badge/website-devspace.mx-blue)](https://devspace.mx/)
[![twitter](https://img.shields.io/twitter/follow/devspacemx?label=Twitter&style=flat&logo=twitter)](https://twitter.com/devspacemx)
[![Discord](https://img.shields.io/discord/635852899066314753?label=Discord&style=flat&logo=discord)](https://discordapp.com/invite/sJ7b9Mr)

# Sitio Web

Este es el repositorio que aloja el código de la página web de DevSpace

## 📖 Índice

- [Sitio Web](#sitio-web)
  - [📖 Índice](#%f0%9f%93%96-%c3%8dndice)
  - [Acerca del proyecto](#acerca-del-proyecto)
  - [Requisitos](#requisitos)
  - [Comienza](#comienza)
    - [Descarga](#descarga)
    - [Ejecución](#ejecuci%c3%b3n)
  - [Contribuye](#contribuye)
  - [Créditos](#cr%c3%a9ditos)
    - [Core-Team](#core-team)
    - [Otros contribuidores](#otros-contribuidores)
  - [Licencia](#licencia)

## Acerca del proyecto

En DevSpace queremos tener presencia en todos los lugares donde sea posible, además una página web nos viene muy bien para que otras personas conozcan del proyecto y además puedan sumarse.

Usamos [hugo](https://gohugo.io/) para generar la página web con contenido estático, esto nos da la ventaja de tener un sitio tipo "blog" pero sin tener que cargar tantos recursos y además se comporta como una página web con únicamente archivos y un poco de JavaScript (Cero frameworks para frontend).

Usamos Github pages para alojar el sitio de manera gratuita, para ver el contenido que se entrega en la dirección de [devspace.mx](https://devspace.mx) consulta la rama **gh-pages**

## Requisitos

Si deseas colaborar con el proyecto es necesario que cumplas con unos cuantos requisitos

- Editor de código
- Hugo instalado en tu máquina [https://gohugo.io/getting-started/installing/](https://gohugo.io/getting-started/installing/)
- Git
- Un navegador web para ver los cambios

## Comienza

### Descarga

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/DevSpaceMX/devspace.mx.git
   cd devspace.mx
   ```

    Estos comandos van a clonar el repositorio y abrir la carpeta del repo

### Ejecución

1. **Levantar servidor con Hugo**

   ```bash
   hugo server -D
   ```

    El comando "hugo server" va a levantar un servidor live reload para que puedas ver los cambios hechos en tiempo real a tu código

Una vez te sientas cómodo con los cambios que haz realizado, crea un Pull Request describiendo los cambios que realizaste, si dichos cambios son apropiados y además no rompen la página entonces aceptaremos tu Pull Request y se hará merge con la rama master del proyecto.

## Contribuye

¿Cómo puedo contribuir a la página web?

- Añadiendo secciones que tú creas puedan ser útiles
- Resolviendo bugs (por ejemplo algún detalle del diseño)
- Escribiendo artículos y haciendo correciones en los que ya están escritos

## Créditos

### Core-Team

- [Alfonso Reyes](http://github.com/mrarc)

### Otros contribuidores

Tema original basado en novela para hugo (<https://github.com/forestryio/hugo-theme-novela/blob/master/archetypes/default.md)>

`{}` con ❤️ por la comunidad de [DevSpace](http://www.devspace.mx).

## Licencia

[MIT](LICENSE)
