
"use client";

import Link from "next/link";
import { useRegister } from "../hooks/use-register";

export default function RegisterForm() {
  const {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    error,
    success,
    handleSubmit,
  } = useRegister();

  const passwordsMismatch =
    error === "Las contraseñas no coinciden";

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="card bg-base-100 shadow-xl w-full max-w-md">
        <div className="card-body">
          <h1 className="card-title text-2xl">
            Crear cuenta
          </h1>

          <p>Regístrate en Routina</p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 mt-4"
            noValidate
          >
            <div>
              <label htmlFor="name" className="label">
                Nombre
              </label>
              <input
                id="name"
                type="text"
                placeholder="Tu nombre"
                className="input input-bordered w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

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
                placeholder="Ingresa una contraseña"
                className={`input input-bordered w-full ${
                  passwordsMismatch ? "input-error" : ""
                }`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="label">
                Confirmar contraseña
              </label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="Repite tu contraseña"
                className={`input input-bordered w-full ${
                  passwordsMismatch ? "input-error" : ""
                }`}
                value={confirmPassword}
                onChange={(e) =>
                  setConfirmPassword(e.target.value)
                }
              />
            </div>

            {error && (
              <p className="text-error text-sm" role="alert">
                {error}
              </p>
            )}

            {success && (
              <div className="alert alert-success">
                Registro completado correctamente
              </div>
            )}

            <button
              type="submit"
              className="btn btn-primary w-full"
            >
              Registrarse
            </button>

            <p className="text-center text-sm mt-2">
              ¿Ya tienes una cuenta?{" "}
              <Link
                href="/login"
                className="link link-primary"
              >
                Inicia sesión
              </Link>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}
