import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center p-24 bg-slate-950">
      <div className="space-y-6 text-center">
        <h1 className="text-6xl font-semibold text-white drop-shadow-md">
          Auth
        </h1>
        <p className="text-white text-lg ">Next Auth v5</p>
        <div>
          <LoginButton>
            <Button size="lg" className="bg-lime-600 hover:bg-lime-800">
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
