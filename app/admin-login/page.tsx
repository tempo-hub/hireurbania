"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { ArrowRight, Eye, EyeOff, Lock, Mail, ShieldCheck } from "lucide-react";
import { toast } from "react-hot-toast";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const login = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      setLoading(true);

      await signInWithEmailAndPassword(auth, email, password);

      toast.success("Login successful");

      router.push("/admin");
    } catch {
      toast.error("Invalid Login Credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-[#f4f8fc] px-4 py-6 mt-16 sm:px-8 sm:py-10">
      <div className="mx-auto grid min-h-[calc(100vh-3rem)] w-full max-w-6xl overflow-hidden rounded-[2rem] bg-white shadow-[0_24px_80px_rgba(16,51,86,0.14)] lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative hidden overflow-hidden bg-[#0755a5] p-12 text-white lg:flex lg:flex-col lg:justify-between">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border-[28px] border-white/10" />

          <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full border-[36px] border-[#ff6b2c]/70" />

          <div className="relative">
            <div className="mb-10 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#0755a5] shadow-lg">
                <ShieldCheck className="h-6 w-6" />
              </div>

              <span className="text-lg font-bold tracking-tight text-white">
                Hire Urbania
              </span>
            </div>

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Fleet operations
            </p>

            <h2 className="max-w-md text-4xl font-bold leading-tight !text-white">
              Keep every journey moving.
            </h2>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white">
              Manage bookings, routes, and travel content from one secure
              workspace.
            </p>
          </div>

          <p className="relative text-xs text-white">
            Private workspace for authorized team members
          </p>
        </div>

        <div className="flex items-center justify-center p-6 sm:p-12 lg:p-16">
          <div className="w-full max-w-md">
            <div className="mb-9 lg:hidden">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#e8f0fe] text-primary">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Hire Urbania
              </p>
            </div>

            <div className="mb-8">
              <p className="mb-2 text-sm font-semibold text-primary">
                Welcome back
              </p>
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Admin sign in
              </h1>
              <p className="mt-3 text-sm leading-6 text-slate-500">
                Use your team credentials to access the dashboard.
              </p>
            </div>

            <form onSubmit={login} className="space-y-5">
              <div>
                <label
                  htmlFor="admin-email"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Email address
                </label>
                <div className="relative">
                  <Mail
                    aria-hidden="true"
                    className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    id="admin-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="admin@hireurbania.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-primary focus:bg-white focus:ring-4 focus:ring-blue-100"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="admin-password"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Password
                </label>
                <div className="relative">
                  <Lock
                    aria-hidden="true"
                    className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    id="admin-password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-12 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-primary focus:bg-white focus:ring-4 focus:ring-blue-100"
                  />
                  <button
                    type="button"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-200 hover:text-slate-700"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3.5 font-semibold text-white shadow-[0_10px_24px_rgba(7,112,227,0.24)] transition hover:-translate-y-0.5 hover:bg-[#0052cc] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? "Signing in..." : "Sign in to dashboard"}
                {!loading && <ArrowRight className="h-5 w-5" />}
              </button>
            </form>

            <p className="mt-8 flex items-center justify-center gap-2 text-center text-xs text-slate-400">
              <Lock aria-hidden="true" className="h-3.5 w-3.5" /> Authorized
              admin access only
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
