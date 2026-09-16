import Brand from "@/components/ui/Brand";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { GoogleIcon } from "@/components/Icons";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login - Mailgo",
  description: "Log in to your Mailgo account",
};

export default function LoginPage() {
  return (
    <main className="w-full min-h-[calc(100vh-140px)] flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-sm w-full text-gray-300">
        <div className="text-center">
          <Brand className="mx-auto w-32" />
          <div className="mt-5 space-y-2">
            <h1 className="text-white text-2xl font-bold sm:text-3xl">
              Log in to your account
            </h1>
            <p className="text-sm text-gray-400">
              Don&apos;t have an account?{" "}
              <Link
                href="/#pricing"
                className="font-medium text-purple-400 hover:text-purple-300 transition-colors duration-150"
              >
                Get access
              </Link>
            </p>
          </div>
        </div>
        <form className="mt-8 space-y-5">
          <div>
            <label className="text-sm font-medium text-gray-300">Email</label>
            <Input
              type="email"
              required
              placeholder="alex@example.com"
              className="w-full mt-2 text-gray-100 bg-gray-800 border-gray-700 focus:bg-gray-800/80 focus:border-purple-500"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-300">Password</label>
            <Input
              type="password"
              required
              placeholder="••••••••"
              className="w-full mt-2 text-gray-100 bg-gray-800 border-gray-700 focus:bg-gray-800/80 focus:border-purple-500"
            />
          </div>
          <Button className="w-full text-gray-900 bg-gray-100 hover:bg-gray-200 ring-offset-2 focus:ring rounded-lg font-medium">
            Sign in
          </Button>
          <button
            type="button"
            className="w-full flex items-center justify-center gap-x-3 py-2.5 border border-gray-800 rounded-lg text-sm font-medium bg-gray-800/40 hover:bg-gray-800 ring-purple-500 focus:ring duration-150 text-gray-300"
          >
            <GoogleIcon />
            Continue with Google
          </button>
        </form>
      </div>
    </main>
  );
}
