import { ShopeeWhatsappLanding } from "@/components/shopee-whatsapp-landing"
import Link from 'next/link';


export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <ShopeeWhatsappLanding />
      </main>
      <footer>
        <nav className="flex justify-center space-x-4 py-4">
          <Link href="/privacy-policy">Política de Privacidade</Link>
          <Link href="/terms-of-use">Termos de Uso</Link>
        </nav>
      </footer>
    </div>
  );
}
