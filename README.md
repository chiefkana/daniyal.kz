# daniyal.kz

Welcome to the **daniyal.kz** monorepo!
This repository contains two main applications:

- **[Strapi](https://strapi.io/)** – A headless CMS for managing product data and content.
- **[Astro](https://astro.build/)** – A modern, performant front-end framework for building the public-facing website.

Both applications are managed via **[pnpm](https://pnpm.io/)** in a single workspace, making it straightforward to develop and deploy them together.

---

## Table of Contents

1. [Project Structure](#project-structure)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Usage](#usage)
   - [Running the Apps](#running-the-apps)
   - [Strapi Configuration](#strapi-configuration)
   - [Astro Configuration](#astro-configuration)
5. [Integrating with 1C (Optional)](#integrating-with-1c-optional)
6. [Deployment](#deployment)
7. [License](#license)
8. [Contact & Contributing](#contact--contributing)

---

## Project Structure

```txt
daniyal.kz/
├─ astro/
│  ├─ package.json
│  ├─ src/
│  │  └─ pages/
│  │      └─ products.astro
│  └─ ...
├─ strapi/
│  ├─ package.json
│  ├─ config/
│  ├─ src/
│  │  └─ api/
│  │      └─ product/
│  └─ ...
├─ package.json
├─ pnpm-workspace.yaml
├─ README.md
└─ LICENSE.md
```

- **`astro/`**: Contains the Astro front end, including routes, components, and configuration.
- **`strapi/`**: Contains the Strapi CMS code, including content-types, controllers, and plugins.
- **`pnpm-workspace.yaml`**: Declares the workspace packages (`astro` and `strapi`).
- **`package.json`** (root): Manages workspace-wide scripts and metadata.

---

## Prerequisites

1. **Node.js** (v16+ recommended).
2. **pnpm** (v7+ recommended). Install via:
   ```bash
   npm install -g pnpm
   ```
3. A text editor or IDE of your choice.

---

## Installation

1. **Clone this repository** (or download it):

   ```bash
   git clone https://github.com/chiefkana/daniyal.kz.git
   cd daniyal.kz
   ```

2. **Install dependencies** for all packages:
   ```bash
   pnpm install
   ```
   This will install all necessary dependencies in the root and link them to the sub-projects (`astro`, `strapi`).

---

## Usage

### Running the Apps

- **Start Strapi** in development mode:

  ```bash
  pnpm --filter strapi develop
  ```

  or (if you’ve set up a root script in `package.json`):

  ```bash
  pnpm run dev:strapi
  ```

  By default, Strapi will run on [http://localhost:1337](http://localhost:1337).

- **Start Astro** in development mode:

  ```bash
  pnpm --filter astro dev
  ```

  or:

  ```bash
  pnpm run dev:astro
  ```

  By default, Astro will run on [http://localhost:4321](http://localhost:4321).

Open two terminals if you want both servers running at once. Otherwise, you can run them sequentially as needed.

### Strapi Configuration

- **Database**: By default, Strapi uses SQLite for quick setup. For production, switch to a more robust database (e.g., PostgreSQL or MySQL).
- **Admin Account**: On first run (`pnpm --filter strapi develop`), visit [http://localhost:1337/admin](http://localhost:1337/admin) to create your Strapi admin account.
- **Content Types**: Set up your **Product**, **Category**, etc. in the Strapi admin under **Content-Types Builder**.
- **Permissions**: Ensure you enable public or authenticated roles under **Settings** > **Roles** so Astro can fetch data.

### Astro Configuration

- **Fetching from Strapi**: In your Astro pages (e.g., `astro/src/pages/products.astro`), you can fetch data:
  ```astro
  ---
  const STRAPI_URL = 'http://localhost:1337';
  const res = await fetch(`${STRAPI_URL}/api/products?populate=*`);
  const data = await res.json();
  const products = data.data;
  ---
  <html>
    <body>
      <h1>Products</h1>
      {products.map((item) => (
        <p>{item.attributes.name}</p>
      ))}
    </body>
  </html>
  ```
- **Environment Variables**: For production, store your Strapi endpoint in an `.env` file:

  ```bash
  # astro/.env
  PUBLIC_STRAPI_URL=https://api.example.com
  ```

  Then reference it in your code:

  ```astro
  const baseUrl = import.meta.env.PUBLIC_STRAPI_URL;
  ```

---

## Integrating with 1C (Optional)

If you plan to synchronize product data or orders with **1C**:

1. **Create a Strapi service** to **pull** data from 1C or **push** data into 1C. For example, `strapi/src/api/product/services/sync1C.js`.
2. **Automate** using a scheduled cron job or triggered endpoint in Strapi.
3. **Map fields** carefully between your Strapi data model (e.g., `Product`) and 1C’s data structure.
4. **Security**: Ensure you handle authentication and any required credentials for the 1C API.

---

## Deployment

1. **Deploy Strapi**:
   - Host on services like **Railway**, **DigitalOcean**, or **AWS**.
   - Ensure you move from SQLite to a more scalable DB (e.g., PostgreSQL, MySQL).
   - Update your environment variables (database credentials, etc.) accordingly.
2. **Deploy Astro**:
   - If using static site generation, run `pnpm --filter astro build` and deploy the `astro/dist` folder to **Netlify**, **Vercel**, or another static hosting provider.
   - If you need SSR, use the official **Vercel** or **Netlify** adapter for Astro.

---

## License

This project is provided under a **Proprietary License**. Please see the **[LICENSE](./LICENSE.md)** file for full terms and conditions.

---

## Contact & Contributing

- For feature requests, bug reports, or general inquiries, open an **issue** on this repository or reach out to `kanat@bektursyn.kz`.
- Pull requests are welcome but will be reviewed under the constraints of the **Proprietary License** and the project’s policies.

Thank you for using **daniyal.kz**! If you have any questions, feel free to contact us or open an issue. Happy coding!
