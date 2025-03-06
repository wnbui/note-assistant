import Footer from "./components/Footer";
import LogInCard from "./components/LogInCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <div className="bg-base-200 px-24">
        <LogInCard />
      </div>

      <Footer />
    </main>
  );
}
