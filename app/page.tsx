import Footer from "./components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-base-200 px-100">
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Welcome your Note Assistant</h1>
            <p className="py-6">
              Spend more time focusing on learning by letting Note Assistant
              take care of the trivial tasks of note taking.
            </p>
            <Link href="/recorder" className="btn btn-primary">
              Get Started
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-base-200">
        <Footer />
      </div>
    </div>
  );
}
