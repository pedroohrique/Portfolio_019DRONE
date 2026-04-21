import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Política de Privacidade | 019 Drone',
  description: 'Política de privacidade e proteção de dados da 019 Drone.',
};

export default function PoliticaPrivacidade() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Header />
      <div className="pt-32 pb-24 px-4 md:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-12">Política de Privacidade</h1>
        
        <div className="space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">1. Informações Gerais</h2>
            <p className="leading-relaxed text-gray-400">
              A presente Política de Privacidade contém informações sobre coleta, uso, armazenamento, tratamento e proteção dos dados pessoais dos usuários e visitantes do site da 019 Drone, com a finalidade de demonstrar absoluta transparência quanto ao assunto e esclarecer a todos interessados sobre os tipos de dados que são coletados, os motivos da coleta e a forma como os usuários podem gerenciar ou excluir as suas informações pessoais.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">2. Coleta de Dados</h2>
            <p className="leading-relaxed text-gray-400">
              Quando você entra em contato conosco, seja através de formulários no site, e-mail ou WhatsApp corporativo, nós coletamos os dados pessoais que você nos fornece para permitir a comunicação e o agendamento de nossos serviços. Esses dados podem incluir seu nome, telefone, e-mail e detalhes sobre o projeto ou solicitação.
            </p>
            <p className="leading-relaxed mt-4 text-gray-400">
              O site coleta informações de navegação (como endereço IP, dispositivo, navegador) com o objetivo de melhorar a experiência de uso.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">3. Finalidade da Coleta</h2>
            <p className="leading-relaxed text-gray-400">
              Os dados pessoais solicitados a você através do site ou por vias diretas de contato têm como finalidade:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-400">
              <li>Responder a eventuais dúvidas e solicitações;</li>
              <li>Elaborar orçamentos e propostas comerciais;</li>
              <li>Apresentar serviços que possam ser do seu interesse.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">4. Armazenamento e Segurança</h2>
            <p className="leading-relaxed text-gray-400">
              Os dados são mantidos em segurança no sistema da empresa, por tempo estritamente necessário para cada uma das finalidades descritas nesta política. Estamos comprometidos com a segurança e privacidade de seus dados sob nossa responsabilidade e adotaremos as principais medidas de segurança na proteção dessas informações.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">5. Compartilhamento de Dados</h2>
            <p className="leading-relaxed text-gray-400">
              As informações coletadas poderão ser acessadas por colaboradores da 019 Drone, estritamente para propósitos de prestação dos serviços oferecidos. Resguardamos o direito de compartilhar seus dados mediante requisição judicial ou formal de autoridade brasileira competente. Não compartilhamos nem vendemos dados pessoais dos nossos clientes para terceiros.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">6. Alterações</h2>
            <p className="leading-relaxed text-gray-400">
              Ocasionalmente, esta Política de Privacidade poderá passar por atualizações. Recomendamos visitar periodicamente esta página para que você tenha conhecimento sobre as modificações.
            </p>
          </section>

           <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">7. Contato</h2>
            <p className="leading-relaxed text-gray-400">
              Caso tenha dúvidas ou precise falar conosco sobre o uso que fazemos dos seus dados pessoais, estamos à disposição através do nosso WhatsApp corporativo e e-mail de contato disponíveis neste site.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
