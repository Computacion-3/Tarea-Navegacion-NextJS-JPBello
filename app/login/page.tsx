
"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");

    if (!email.trim() || !password.trim()) {
      setError("Todos los campos son obligatorios");
      return;
    }

    console.log("Formulario válido");
  };

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
          </form>
        </div>
      </div>
    </main>
  );
}
