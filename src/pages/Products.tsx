import { Navbar } from "../components/Navbar";
import { Products } from "../components/Products";
import { Footer } from "../components/Footer";

export default function ProductsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        <Products />
      </main>

      <Footer />
    </>
  );
}