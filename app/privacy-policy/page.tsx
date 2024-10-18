"use client";

import React from 'react';
import { Button } from "@/components/ui/button"
import Image from 'next/image';
import Link from 'next/link';

export default function PrivacyPolicy() {
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
          <h1 className="text-5xl font-bold mb-6 text-center text-white">Política de Privacidade</h1>
          <p className="mb-8 text-center text-gray-200 text-lg">Grupo WhatsApp de Ofertas Shopee</p>
          <p className="mb-12 text-center text-gray-300">Última atualização: 17 de outubro de 2024</p>
          
          {privacySections.map((section, index) => (
            <section key={index} className="mb-12 hover:bg-white/5 transition-colors duration-300 rounded-lg p-4">
              <h2 className="text-3xl font-semibold mb-4 text-orange-300">{index + 1}. {section.title}</h2>
              <div className="text-gray-200 space-y-4">
                {section.content}
              </div>
            </section>
          ))}
          
          <p className="mt-12 text-gray-200 text-center text-lg font-semibold">
            Ao participar do nosso grupo WhatsApp, você concorda com esta Política de Privacidade.
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

const privacySections = [
  {
    title: "Introdução",
    content: (
      <p>
        Bem-vindo à Política de Privacidade do Grupo WhatsApp de Ofertas Shopee. Esta política descreve como coletamos, usamos e protegemos suas informações pessoais quando você participa do nosso grupo.
      </p>
    )
  },
  {
    title: "Informações que Coletamos",
    content: (
      <>
        <p>Coletamos as seguintes informações:</p>
        <ul className="list-disc list-inside mt-2">
          <li>Seu número de telefone do WhatsApp</li>
          <li>Nome de usuário do WhatsApp</li>
          <li>Interações no grupo (mensagens, reações, etc.)</li>
        </ul>
      </>
    )
  },
  {
    title: "Como Usamos Suas Informações",
    content: (
      <>
        <p>Utilizamos suas informações para:</p>
        <ul className="list-disc list-inside mt-2">
          <li>Adicionar você ao grupo do WhatsApp</li>
          <li>Enviar ofertas e promoções da Shopee</li>
          <li>Melhorar nossos serviços e a experiência do usuário</li>
          <li>Análises e estatísticas do grupo (de forma anônima)</li>
        </ul>
      </>
    )
  },
  {
    title: "Compartilhamento de Informações",
    content: (
      <>
        <p>Não compartilhamos suas informações pessoais com terceiros, exceto:</p>
        <ul className="list-disc list-inside mt-2">
          <li>Com a Shopee, para fins de verificação de ofertas e promoções</li>
          <li>Quando exigido por lei</li>
        </ul>
      </>
    )
  },
  {
    title: "Segurança dos Dados",
    content: (
      <p>
        Implementamos medidas de segurança para proteger suas informações, mas lembre-se de que nenhum método de transmissão pela internet é 100% seguro.
      </p>
    )
  },
  {
    title: "Seus Direitos",
    content: (
      <>
        <p>Você tem o direito de:</p>
        <ul className="list-disc list-inside mt-2">
          <li>Acessar suas informações pessoais</li>
          <li>Solicitar a correção de informações incorretas</li>
          <li>Solicitar a exclusão de suas informações</li>
          <li>Sair do grupo a qualquer momento</li>
        </ul>
      </>
    )
  },
  {
    title: "Alterações nesta Política",
    content: (
      <p>
        Podemos atualizar esta política periodicamente. Notificaremos você sobre quaisquer mudanças significativas.
      </p>
    )
  },
  {
    title: "Contato",
    content: (
      <p>
        Para questões sobre esta política, entre em contato conosco pelo e-mail: <a href="mailto:privacidade@gruposhopeewhatsapp.com" className="text-blue-300 hover:underline">privacidade@gruposhopeewhatsapp.com</a>
      </p>
    )
  }
];
