# People Manager App

A simple Angular Single Page Application to manage a list of people.  
You can list, add, edit, and delete people with fields: **name, age, gender, phone**.

---

## Features

- List all people in a table
- Add a new person
- Edit existing person details
- Delete a person
- Responsive and modern UI

---

## Project Structure

```
src/
  app/
    app.html
    app.css
    app.routes.ts
    app.routes.server.ts
    people-list.component.ts
    person-create.component.ts
    person-edit.component.ts
    person-delete.component.ts
    people.service.ts
    person.model.ts
  styles.css
  main.ts
  main.server.ts
  server.ts
  index.html
angular.json
package.json
```

---

## Getting Started

### 1. Install dependencies

```sh
npm install
```

### 2. Run the development server

```sh
npm start
```
or
```sh
ng serve
```

Visit [http://localhost:4200/](http://localhost:4200/) in your browser.

---

## Building for Production

```sh
ng build
```

---

## Running Unit Tests

```sh
ng test
```

---

## Deployment (SSR/Prerender)

- Static routes (`/`, `/create`) are prerendered.
- Dynamic routes (`/edit/:id`, `/delete/:id`) use server-side rendering.

If you see errors about prerendering parameterized routes, check [`src/app/app.routes.server.ts`](src/app/app.routes.server.ts) for correct `renderMode` settings.

---

## Customization

- To change fields, update [`person.model.ts`](src/app/person.model.ts) and related components.
- To style, edit [`app.css`](src/app/app.css).

---

## License

MIT

---

## Credits

Built with [Angular](https://angular.dev/).


## 🔗 Live Demo

[Click here to view the live site](https://people-manager-app.vercel.app/)
