import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from '../components/Header';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <h1 className="flex justify-center align-center m-20">Home Page</h1>
      </main>
    </>
  );
}
