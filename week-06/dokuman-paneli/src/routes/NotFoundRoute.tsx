import { Link } from "react-router";

export function NotFoundRoute() {
  return (
    <main className="hero min-h-[calc(100vh-4rem)]">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-6xl font-bold">404</h1>
          <p className="py-6 text-base-content/70">
            Aradığınız sayfa bulunamadı.
          </p>
          <Link to="/" className="btn btn-primary">
            Ana sayfaya dön
          </Link>
        </div>
      </div>
    </main>
  );
}
