# Guardian Angels Home Care - Frontend

A modern, responsive marketing homepage for a home care service provider, built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and shadcn/ui.

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm or pnpm

### Installation

1.  Install dependencies:
    ```bash
    npm install
    # or
    pnpm install
    ```

2.  Run the development server:
    ```bash
    npm run dev
    # or
    pnpm dev
    ```

3.  Open [http://localhost:3000](http://localhost:3000) with your browser.

## 🎨 Branding Configuration

All branding assets (colors, contact info, social links) are centralized in `src/config/brand.ts`.

To update the branding:
1.  Open `src/config/brand.ts`.
2.  Edit the `brand` object values.
3.  The changes will propagate across the header, footer, contact forms, and utility bar automatically.

## 📦 Project Structure

-   `src/app`: App Router pages and API routes.
-   `src/components/layout`: Global layout components (Header, Footer).
-   `src/components/marketing`: Homepage section components (Hero, Services, etc.).
-   `src/components/ui`: Reusable UI components from shadcn/ui.
-   `src/config`: Configuration files (brand.ts).

## 🚢 Deployment

### Staging
To deploy to a staging environment (e.g., Vercel Preview):

1.  Push the code to a Git repository (GitHub/GitLab).
2.  Import the project into Vercel.
3.  Vercel will automatically detect the Next.js framework and build settings.
4.  Each Pull Request will generate a preview URL.

### Production
When ready to go live:

1.  Ensure all content in `src/config/brand.ts` is final.
2.  Review SEO metadata in `src/app/layout.tsx` and `src/app/page.tsx`.
3.  Deploy to production on Vercel or your hosting provider.
4.  Update DNS records to point to the new deployment.

## 🛠 Tech Stack

-   **Framework**: Next.js 14
-   **Styling**: Tailwind CSS
-   **Components**: shadcn/ui (Radix UI)
-   **Icons**: Lucide React
-   **Forms**: React Hook Form + Zod

## License

Private. Do not distribute.
