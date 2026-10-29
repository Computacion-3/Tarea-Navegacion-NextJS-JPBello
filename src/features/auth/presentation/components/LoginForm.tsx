
"use client";

import Link from "next/link";
import { useLogin } from "../hooks/use-login";

export default function LoginForm() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    error,
    handleSubmit,
  } = useLogin();

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="card bg-base-100 shadow-xl w-full max-w-md">
        <div className="card-body">
          <h1 className="card-title text-2xl">
            Iniciar sesión
          </h1>

          <p>Bienvenido a Routina</p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 mt-4"
            noValidate
          >
            <div>
              <label htmlFor="email" className="label">
                Correo electrónico
              </label>

              <input
                id="email"
                type="email"
                placeholder="correo@ejemplo.com"
                className="input input-bordered w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="password" className="label">
                Contraseña
              </label>

              <input
                id="password"
                type="password"
                placeholder="Ingresa tu contraseña"
                className="input input-bordered w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {error && (
              <p className="text-error text-sm">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="btn btn-primary w-full"
            >
              Iniciar sesión
            </button>

            <p className="text-center text-sm mt-2">
              ¿No tienes una cuenta?{" "}
              <Link
                href="/register"
                className="link link-primary"
              >
                Regístrate aquí
              </Link>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}
