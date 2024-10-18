"use client";

import React from 'react';
import { Button } from "@/components/ui/button"
import Image from 'next/image';
import Link from 'next/link';

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-500 to-red-600 text-white">
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <Image src="/shopee-logo-0.png" alt="Shopee Logo" width={120} height={120} objectFit="contain" />
        <Link href="/">
          <Button 
            variant="outline" 
            className="text-white border-white hover:bg-white hover:text-orange-500 rounded-full px-6 py-2 shadow-lg transition-all duration-300 ease-in-out hover:scale-105"
          >
            Voltar
          </Button>
        </Link>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-lg p-8 shadow-2xl">
          <h1 className="text-5xl font-bold mb-6 text-center text-white">Termos de Uso</h1>
          <p className="mb-8 text-center text-gray-200 text-lg">Grupo WhatsApp de Ofertas Shopee</p>
          <p className="mb-12 text-center text-gray-300">Última atualização: 17 de outubro de 2024</p>
          
          {[...Array(10)].map((_, index) => (
            <section key={index} className="mb-12 hover:bg-white/5 transition-colors duration-300 rounded-lg p-4">
              <h2 className="text-3xl font-semibold mb-4 text-orange-300">{index + 1}. {getTermTitle(index)}</h2>
              <div className="text-gray-200 space-y-4">
                {getTermContent(index)}
              </div>
            </section>
          ))}
          
          <p className="mt-12 text-gray-200 text-center text-lg font-semibold">
            Ao participar do Grupo WhatsApp de Ofertas Shopee, você confirma que leu, entendeu e concordou com estes Termos de Uso.
          </p>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm">
            <p>&copy; 2024 Achadinhos com ofertas. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function getTermTitle(index: number): string {
  const titles = [
    "Aceitação dos Termos",
    "Descrição do Serviço",
    "Elegibilidade",
    "Regras de Conduta",
    "Conteúdo e Ofertas",
    "Propriedade Intelectual",
    "Limitação de Responsabilidade",
    "Modificações dos Termos",
    "Rescisão",
    "Lei Aplicável"
  ];
  return titles[index];
}

function getTermContent(index: number): React.ReactNode {
  const contents = [
    <p>Ao participar do Grupo WhatsApp de Ofertas Shopee, você concorda com estes Termos de Uso. Se você não concordar com estes termos, por favor, não participe do grupo.</p>,
    <p>O Grupo WhatsApp de Ofertas Shopee é um serviço gratuito que fornece aos membros acesso a ofertas exclusivas e promoções da Shopee.</p>,
    <ul className="list-disc list-inside">
      <li>Ter pelo menos 18 anos de idade</li>
      <li>Possuir uma conta ativa no WhatsApp</li>
      <li>Residir em um país onde a Shopee opera</li>
    </ul>,
    <ul className="list-disc list-inside">
      <li>Não compartilhar conteúdo ofensivo, ilegal ou inadequado</li>
      <li>Não fazer spam ou enviar mensagens não relacionadas às ofertas da Shopee</li>
      <li>Respeitar outros membros do grupo e os administradores</li>
      <li>Não compartilhar informações do grupo com não-membros</li>
    </ul>,
    <ul className="list-disc list-inside">
      <li>As ofertas compartilhadas são de responsabilidade da Shopee</li>
      <li>Não garantimos a disponibilidade ou os preços das ofertas</li>
      <li>Reservamo-nos o direito de remover qualquer conteúdo inadequado</li>
    </ul>,
    <p>Todo o conteúdo compartilhado no grupo, incluindo logotipos e marcas registradas, é propriedade de seus respectivos donos e não deve ser usado sem permissão.</p>,
    <p>Não nos responsabilizamos por perdas ou danos resultantes do uso das informações do grupo, problemas técnicos do WhatsApp ou da Shopee, ou ações de outros membros do grupo.</p>,
    <p>Reservamo-nos o direito de modificar estes termos a qualquer momento. Alterações significativas serão notificadas no grupo.</p>,
    <p>Reservamo-nos o direito de remover qualquer membro do grupo que viole estes termos ou por qualquer outro motivo, a nosso critério.</p>,
    <p>Estes termos são regidos pelas leis do Brasil.</p>
  ];
  return contents[index];
}
