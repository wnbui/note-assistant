import Footer from "./components/Footer";
import LogInCard from "./components/LogInCard";

export default function Home() {
  return (
    <div>
      <div className="bg-base-200 px-24">
        <LogInCard />
        <Footer />
      </div>
    </div>
  );
}
