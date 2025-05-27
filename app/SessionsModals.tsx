import React, { useEffect, useState } from 'react';
import Image from 'next/image';

type Session = {
  id: string;
  title: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  gallery: string[];
}

const SessionsModal = () => {
  const [selectedSession, setSelectedSession] = useState<Session | null>(null);

  const sessions: Session[] = [
    {
      id: 'musculacao',
      title: 'Musculação',
      image: '/new/musculacao.jpg',
      shortDescription: 'Desde iniciantes até atletas de alta performance. Oferecemos preparação completa para todas as idades e níveis, incluindo consciência corporal e preparação infanto-juvenil.',
      fullDescription: 'Nossa musculação é adaptada para atender desde pessoas sem nenhuma experiência até atletas de alta performance. Trabalhamos com preparação infanto-juvenil e desenvolvemos consciência corporal em todas as idades. Nossos programas são estruturados de acordo com seu nível atual e objetivos específicos.',
      benefits: [
        'Preparação para iniciantes, intermediários e avançados',
        'Programa infanto-juvenil especializado',
        'Desenvolvimento de consciência corporal',
        'Treinamento para atletas de alta performance',
        'Metodologia adaptada para todas as idades'
      ],
      gallery: [
        '/new/IMG_5239.jpg',
        '/new/IMG_5255.JPG',
        '/new/IMG_5258.jpg'
      ]
    },
    {
      id: 'funcional',
      title: 'Treinamento Funcional',
      image: '/new/func.jpg',
      shortDescription: 'Desenvolva percepção, coordenação motora e capacidade aeróbica. Exercícios específicos para melhoria da mobilidade e movimentos naturais do corpo.',
      fullDescription: 'Nosso treinamento funcional foca no desenvolvimento de habilidades motoras essenciais para o dia a dia. Trabalhamos com exercícios aeróbicos, percepção corporal e coordenação motora, sempre visando a melhoria da mobilidade e funcionalidade do seu corpo.',
      benefits: [
        'Melhoria da capacidade aeróbica',
        'Desenvolvimento da percepção corporal',
        'Aprimoramento da coordenação motora',
        'Exercícios para mobilidade articular',
        'Movimentos funcionais para o cotidiano'
      ],
      gallery: [
        '/saude-integrada.jpg',
        '/new/IMG_5296.jpg',
        '/new/IMG_0196.JPG'
      ]
    },
    {
      id: 'massoterapia',
      title: 'Massoterapia Esportiva',
      image: '/new/IMG_5221.jpg',
      shortDescription: 'Tratamentos especializados com liberação mio-fascial, dryneeling, ventosaterapia, imersão em gelo, eletroestimulação e muito mais para sua recuperação completa.',
      fullDescription: 'Nossa massoterapia esportiva oferece um conjunto completo de técnicas terapêuticas para recuperação muscular, alívio de tensões e melhoria da performance. Utilizamos métodos modernos e eficazes para cuidar do seu corpo.',
      benefits: [
        'Liberação mio-fascial especializada',
        'Técnica de Dryneeling',
        'Anatomia palpatória precisa',
        'Ventosaterapia terapêutica',
        'Correção muscular',
        'Imersão em gelo para recuperação',
        'Eletroestimulação muscular',
        'Drenagem linfática e modeladora',
        'Massagem esportiva profissional'
      ],
      gallery: [
        '/performance.jpg',
        '/new/IMG_5296.jpg',
        '/new/IMG_0196.JPG'
      ]
    },
    {
      id: 'nutricao-fisioterapia',
      title: 'Nutrição & Fisioterapia',
      image: '/new/IMG_9520.jpg',
      shortDescription: 'Parcerias especializadas em nutrição esportiva e fisioterapia para casos complexos, garantindo abordagem completa e assertiva para seus objetivos.',
      fullDescription: 'Através de parcerias estratégicas, oferecemos suporte nutricional especializado e fisioterapia para casos de maior complexidade. Nossa rede de profissionais trabalha de forma integrada para proporcionar resultados mais assertivos.',
      benefits: [
        'Parceria com nutricionistas esportivos',
        'Planejamento alimentar personalizado',
        'Integração completa exercício-nutrição',
        'Fisioterapia para casos complexos',
        'Abordagem multidisciplinar',
        'Acompanhamento especializado'
      ],
      gallery: [
        '/comunidade.jpg',
        '/new/IMG_5296.jpg',
        '/new/IMG_0196.JPG'
      ]
    }
  ];

  const openModal = (session: Session) => {
    setSelectedSession(session);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedSession(null);
    document.body.style.overflow = 'unset';
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const modalBg = document.getElementById("modal-background");
      if (e.target === modalBg) {
        closeModal();
      }
    };

    if (selectedSession) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectedSession]);


  return (
    <>
      {/* Session Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {sessions.map((session, index) => (
          <div
            key={session.id}
            className="bg-[var(--background-light)] rounded-xl overflow-hidden group hover:shadow-lg transition-all duration-300 cursor-pointer scroll-animated opacity-0 translate-y-10 transition-all duration-700"
            style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            onClick={() => openModal(session)}
          >
            <div className="relative h-60 w-full overflow-hidden">
              <Image
                src={session.image}
                alt={session.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10"></div>
              <h3 className="absolute bottom-4 left-4 text-2xl font-bold uppercase text-white">{session.title}</h3>
            </div>
            <div className="p-6">
              <p className="mb-4">{session.shortDescription}</p>
              <button className="uppercase font-bold text-sm bg-gradient-to-r from-[#E3B930] to-[#F28F05] py-2 px-4 rounded-lg hover:shadow-md hover:shadow-[#E3B93030] transition-all duration-300 text-black">
                Saiba mais
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedSession && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 h-full"
          id="modal-background"
        >
          <div
            className="bg-[var(--background)] max-w-4xl w-full max-h-[80vh] overflow-y-auto rounded-xl relative mt-[8vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white text-xl transition-colors"
            >
              ✕
            </button>

            {/* Modal Header */}
            <div className="relative h-64 sm:h-80 w-full overflow-hidden">
              <Image
                src={selectedSession.image}
                alt={selectedSession.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h2 className="text-3xl sm:text-4xl font-bold uppercase text-white mb-2">
                  {selectedSession.title}
                </h2>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8">
              {/* Description */}
              <div className="mb-8">
                <h3 className="text-xl sm:text-2xl font-bold uppercase mb-4 text-[#E3B930]">
                  Sobre este programa
                </h3>
                <p className="text-base sm:text-lg leading-relaxed mb-6">
                  {selectedSession.fullDescription}
                </p>
              </div>

              {/* Benefits */}
              <div className="mb-8">
                <h3 className="text-xl sm:text-2xl font-bold uppercase mb-4 text-[#E3B930]">
                  Benefícios
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedSession.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-[#E3B930] to-[#F28F05] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm sm:text-base">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gallery */}
              {/* <div className="mb-8">
                <h3 className="text-xl sm:text-2xl font-bold uppercase mb-4 text-[#E3B930]">
                  Galeria
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {selectedSession.gallery.map((image, index) => (
                    <div key={index} className="relative h-32 sm:h-40 rounded-lg overflow-hidden">
                      <Image
                        src={image}
                        alt={`${selectedSession.title} - Imagem ${index + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div> */}

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-white/10">
                <button className="flex-1 bg-gradient-to-r from-[#E3B930] to-[#F28F05] py-3 px-6 rounded-lg text-black font-bold uppercase hover:shadow-lg hover:shadow-[#E3B93040] transition-all duration-300">
                  Agende sua avaliação
                </button>
                <button className="flex-1 border border-[#E3B930] py-3 px-6 rounded-lg text-[#E3B930] font-bold uppercase hover:bg-[#E3B93015] transition-colors duration-300">
                  Saiba mais no WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SessionsModal;