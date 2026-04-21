import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Termos de Uso | 019 Drone',
  description: 'Termos e Condições de Uso dos serviços da 019 Drone.',
};

export default function TermosUso() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      <div className="pt-32 pb-24 px-4 md:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-12">Termos de Uso</h1>
        
        <div className="space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">1. Aceitação dos Termos</h2>
            <p className="leading-relaxed text-gray-400">
              Ao acessar o site da 019 Drone e solicitar a prestação de nossos serviços, você concorda em cumprir e ficar vinculado aos seguintes Termos e Condições de Uso. Caso não concorde com alguma parte destes termos, você não deve utilizar o site ou nossos serviços.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">2. Serviços</h2>
            <p className="leading-relaxed text-gray-400">
              A 019 Drone fornece serviços variados no segmento de captação de imagens (foto e vídeo) e acompanhamento por drone (acompanhamento de obras, vistoria predial, cobertura de eventos, aerofotogrametria, entre outros).
            </p>
            <p className="leading-relaxed mt-4 text-gray-400">
              Todos os voos e serviços estão sujeitos às condições climáticas do local e dia definidos pelas partes e às restrições de voo do espaço aéreo, conforme regulamentações da ANAC e DECEA, cabendo à 019 Drone determinar a viabilidade ou alteração na prestação do serviço por questões de segurança.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">3. Direitos Autorais e Propriedade Intelectual</h2>
            <p className="leading-relaxed text-gray-400">
              O material registrado (fotos e vídeos) permanece com titularidade de direitos autorais primários para a 019 Drone, e, a menos que especificado de outra forma em contrato, é concedido ao Cliente uma licença de uso para a sua finalidade e/ou promoção do próprio em caráter permanente, livre de pagamento de royalties a partir da quitação dos serviços referidos.
            </p>
            <p className="leading-relaxed mt-4 text-gray-400">
              Informações do site, vídeos de portfólio, logos e outros conteúdos audiovisuais aqui presentes estão sob propriedade intelectual da 019 Drone e a cópia ou utilização indevida é proibida.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">4. Obrigações do Cliente</h2>
            <p className="leading-relaxed text-gray-400">
              Para viabilização dos serviços nos locais com infraestrutura privada e eventos, o Cliente deve prover a respectiva autorização formal para acesso de nossa equipe para a realização dos voos e tomada de imagens.
            </p>
            <p className="leading-relaxed mt-4 text-gray-400">
              O Cliente exime a 019 Drone de qualquer dano, multa ou ônus oriundos da não obtenção junto à administração de condomínios, eventos privados ou prefeituras de acesso/autorização sobre o local requisitado.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">5. Limitação de Responsabilidade</h2>
            <p className="leading-relaxed text-gray-400">
              A 019 Drone opera seus equipamentos respeitando a legislação em vigor e sempre priorizando a segurança de pessoas ao redor. A empresa não poderá ser responsabilizada por lucros cessantes por motivo de postergação de diárias por causas naturais extremas (ventos severos, chuvas e raios) ou por razões de restrição de zonas de voos estabelecidas pelos órgãos de controle.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">6. Modificações nestes Termos</h2>
            <p className="leading-relaxed text-gray-400">
              A 019 Drone reserva o direito de alterar as condições dos presentes Termos de Uso em qualquer tempo, de modo que sempre recomendamos a sua visualização prévia à contratação e à utilização do nosso site.
            </p>
          </section>

        </div>
      </div>
      <Footer />
    </main>
  );
}
