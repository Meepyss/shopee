'use client'

import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ShoppingBag, Smartphone, Zap, Users, CheckCircle, Star, TrendingUp, Gift } from 'lucide-react'

export function ShopeeWhatsappLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-500 to-red-600 text-white">
      <header className="container mx-auto py-6 flex justify-between items-center">
        <img src="./shopee-logo-0.png" alt="Shopee Logo" style={{ height: '120px', width: 'auto' }} />
        <Button 
          variant="outline" 
          className="text-white border-white hover:bg-white hover:text-orange-500 rounded-full px-6 py-2 shadow-lg transition-transform transform hover:scale-105"
          onClick={() => window.location.href = 'https://chat.whatsapp.com/EXZyzCPQ7baH5PXC9Ue3jl'}
        >
          Entrar
        </Button>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-bounce">Não Perca Nenhuma Promoção da Shopee!</h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in">Junte-se ao nosso grupo exclusivo do WhatsApp e receba as melhores ofertas em primeira mão.</p>
          <Button 
            size="lg" 
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-xl transition-transform transform hover:scale-110 hover:rotate-3"
            onClick={() => window.location.href = 'https://chat.whatsapp.com/EXZyzCPQ7baH5PXC9Ue3jl'}
          >
            Entrar no Grupo Agora
          </Button>
        </section>

        <section className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white/10 rounded-lg p-6 flex items-start space-x-4 hover:shadow-lg transition-shadow">
            <ShoppingBag className="text-yellow-300 flex-shrink-0" size={24} />
            <div>
              <h3 className="text-xl font-semibold mb-2">Ofertas Exclusivas</h3>
              <p>Acesso antecipado às melhores promoções da Shopee antes de qualquer outra pessoa.</p>
            </div>
          </div>
          <div className="bg-white/10 rounded-lg p-6 flex items-start space-x-4 hover:shadow-lg transition-shadow">
            <Zap className="text-yellow-300 flex-shrink-0" size={24} />
            <div>
              <h3 className="text-xl font-semibold mb-2">Alertas Instantâneos</h3>
              <p>Receba notificações em tempo real sobre descontos relâmpago e ofertas por tempo limitado.</p>
            </div>
          </div>
          <div className="bg-white/10 rounded-lg p-6 flex items-start space-x-4 hover:shadow-lg transition-shadow">
            <Users className="text-yellow-300 flex-shrink-0" size={24} />
            <div>
              <h3 className="text-xl font-semibold mb-2">Comunidade Engajada</h3>
              <p>Compartilhe dicas de compras e descubra ofertas ocultas com outros membros do grupo.</p>
            </div>
          </div>
          <div className="bg-white/10 rounded-lg p-6 flex items-start space-x-4 hover:shadow-lg transition-shadow">
            <Smartphone className="text-yellow-300 flex-shrink-0" size={24} />
            <div>
              <h3 className="text-xl font-semibold mb-2">Fácil de Usar</h3>
              <p>Basta ter o WhatsApp instalado para começar a receber as melhores ofertas da Shopee.</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center animate-pulse">O Que Nossos Membros Dizem</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 rounded-lg p-6 hover:scale-105 transition-transform">
              <div className="flex items-center mb-4">
                <div>
                  <h4 className="font-semibold">Maria S.</h4>
                  <div className="flex text-yellow-300">
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                  </div>
                </div>
              </div>
              <p>"Esse grupo é incrível! Já economizei mais de R$500 em compras na Shopee graças às ofertas exclusivas."</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 hover:scale-105 transition-transform">
              <div className="flex items-center mb-4">
                <div>
                  <h4 className="font-semibold">João P.</h4>
                  <div className="flex text-yellow-300">
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                  </div>
                </div>
              </div>
              <p>"As notificações em tempo real são ótimas! Nunca mais perdi uma promoção relâmpago desde que entrei no grupo."</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 hover:scale-105 transition-transform">
              <div className="flex items-center mb-4">
                <div>
                  <h4 className="font-semibold">Ana L.</h4>
                  <div className="flex text-yellow-300">
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                  </div>
                </div>
              </div>
              <p>"A comunidade é super prestativa! Sempre encontro alguém para tirar minhas dúvidas sobre produtos e ofertas."</p>
            </div>
          </div>
        </section>

        <section className="bg-white/10 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center animate-pulse">Por Que Nosso Grupo é Especial</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center hover:scale-105 transition-transform">
              <TrendingUp size={48} className="mx-auto mb-4 text-yellow-300" />
              <h3 className="text-xl font-semibold mb-2">Ofertas Curadas</h3>
              <p>Nossa equipe seleciona cuidadosamente as melhores ofertas para garantir que você economize de verdade.</p>
            </div>
            <div className="text-center hover:scale-105 transition-transform">
              <Gift size={48} className="mx-auto mb-4 text-yellow-300" />
              <h3 className="text-xl font-semibold mb-2">Brindes Exclusivos</h3>
              <p>Membros do grupo têm acesso a sorteios e brindes exclusivos da Shopee.</p>
            </div>
            <div className="text-center hover:scale-105 transition-transform">
              <Users size={48} className="mx-auto mb-4 text-yellow-300" />
              <h3 className="text-xl font-semibold mb-2">Networking</h3>
              <p>Conecte-se com outros compradores inteligentes e troque dicas de economia.</p>
            </div>
          </div>
        </section>

        <section className="max-w-2xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center animate-pulse">Perguntas Frequentes</h2>
          <Accordion type="single" collapsible className="bg-white/10 rounded-lg">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">É gratuito participar do grupo?</AccordionTrigger>
              <AccordionContent>
                Sim, a participação no grupo é totalmente gratuita. Você só paga pelas compras que fizer na Shopee.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">Com que frequência receberei ofertas?</AccordionTrigger>
              <AccordionContent>
                Enviamos ofertas diariamente, mas nos concentramos nas melhores promoções para não sobrecarregar o grupo.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">Posso sair do grupo quando quiser?</AccordionTrigger>
              <AccordionContent>
                Absolutamente! Você pode sair do grupo a qualquer momento, sem nenhum compromisso.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-bold mb-6 animate-bounce">Não Perca Tempo!</h2>
          <p className="text-xl mb-8 animate-fade-in">Junte-se a milhares de pessoas que já estão economizando com as melhores ofertas da Shopee.</p>
          <Button 
            size="lg" 
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-xl transition-transform transform hover:scale-110 hover:rotate-3"
            onClick={() => window.location.href = 'https://chat.whatsapp.com/EXZyzCPQ7baH5PXC9Ue3jl'}
          >
            Entrar no Grupo Agora
          </Button>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <img src="./shopee-logo-0.png" alt="Shopee Logo" style={{ height: '120px', width: 'auto' }} />
              <p className="text-sm">Receba as melhores ofertas da Shopee diretamente no seu WhatsApp.</p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-4">Links Úteis</h3>
              <ul className="space-y-2">
                <li><a href="/terms-of-use" className="hover:underline">Termos de Uso</a></li>
                <li><a href="/privacy-policy" className="hover:underline">Política de Privacidade</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
            <p>&copy; 2024 Achadinhos com ofertas. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
