'use client'

import Image from "next/image";
import arrowDownIcon from "@/public/icons/Frame.svg";
import { useEffect } from "react";
import SessionsModal from "./SessionsModals";
import BannerCarousel from "./Carousel";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          entry.target.classList.remove('opacity-0');
          entry.target.classList.remove('translate-y-10');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-animated').forEach((el) => {
      observer.observe(el);
    });

    const handleNavLinkClick = (e: any) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    };

    // Add click event to all navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', handleNavLinkClick);
    });

    // Mobile menu toggle
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeMenuButton = document.querySelector('.close-menu-button');

    if (mobileMenuButton && mobileMenu && closeMenuButton) {
      mobileMenuButton.addEventListener('click', () => {
        if (mobileMenu.classList.contains("hidden")) {
          mobileMenu.classList.remove('hidden');
          mobileMenu.classList.add('flex');
        } else {
          mobileMenu.classList.remove('flex');
          mobileMenu.classList.add('hidden');
        }
      });

      closeMenuButton.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('flex');
      });

      // Close menu when a link is clicked
      document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => {
          mobileMenu.classList.add('hidden');
          mobileMenu.classList.remove('flex');
        });
      });
    }

    // Cleanup
    return () => {
      observer.disconnect();
      document.querySelectorAll('.nav-link').forEach(link => {
        link.removeEventListener('click', handleNavLinkClick);
      });

      if (mobileMenuButton && mobileMenu && closeMenuButton) {
        mobileMenuButton.removeEventListener('click', () => { });
        closeMenuButton.removeEventListener('click', () => { });
        document.querySelectorAll('.mobile-nav-link').forEach(link => {
          link.removeEventListener('click', () => { });
        });
      }
    };
  }, []);

  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:px-52 font-[family-name:var(--font-geist-sans)] relative overflow-hidden">
      {/* Geometric Background Shapes */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        {/* Circular gradient in top left */}
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-gradient-to-br from-[#E3B930] to-[#F28F05] opacity-20 blur-xl"></div>

        {/* Rectangle gradient in bottom right */}
        <div className="absolute bottom-10 right-20 w-72 h-32 rotate-12 bg-gradient-to-r from-[#E3B930] to-[#F28F05] opacity-10 blur-md"></div>

        {/* Triangle shape in middle right - created with CSS */}
        <div className="absolute top-1/3 right-10 w-0 h-0 border-l-[100px] border-l-transparent border-b-[180px] border-b-[#E3B93015] border-r-[100px] border-r-transparent rotate-45"></div>

        {/* Small diamond in top right */}
        <div className="absolute top-40 right-40 w-16 h-16 bg-gradient-to-tr from-[#E3B930] to-[#F28F05] opacity-20 rotate-45"></div>
      </div>

      {/* Fixed Header/Navigation */}
      <header className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md z-50 py-4 px-6 sm:px-10 shadow-md">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <div className="flex items-center">
            <div className="w-24 h-12 relative">
              <Image className="relative" src={"/logo.png"} alt="logo" fill />
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="nav-link text-white hover:text-[#E3B930] transition-colors uppercase font-medium">Home</a>
            <a href="#sobre" className="nav-link text-white hover:text-[#E3B930] transition-colors uppercase font-medium">Sobre</a>
            <a href="#sessoes" className="nav-link text-white hover:text-[#E3B930] transition-colors uppercase font-medium">Sessões</a>
            <a href="#depoimentos" className="nav-link text-white hover:text-[#E3B930] transition-colors uppercase font-medium">Depoimentos</a>
            <a href="#localizacao" className="nav-link text-white hover:text-[#E3B930] transition-colors uppercase font-medium">Localização</a>
            <a href="#contato" className="nav-link text-white hover:text-[#E3B930] transition-colors uppercase font-medium">Contato</a>
          </nav>

          <button className="md:hidden text-white text-xl mobile-menu-button">
            ☰
          </button>

          <button className="hidden md:block bg-gradient-to-r from-[#E3B930] to-[#F28F05] px-4 py-2 rounded-lg text-black font-bold uppercase text-sm hover:shadow-lg hover:shadow-[#E3B93040] transition-all duration-300">
            Agende agora
          </button>
        </div>
      </header>

      <main className="flex flex-col gap-[32px] items-center sm:items-start mx-5 relative z-10 mt-24">
        <section id="home" className="flex flex-col sm:flex-row gap-10 sm:gap-32 min-h-screen items-center sm:items-start px-4 sm:px-6">
          <article className="flex flex-col gap-10 sm:gap-20 w-full sm:w-1/2 items-center scroll-animated opacity-0 translate-y-10 transition-all duration-700">
            <div className="w-40 h-20 sm:w-64 sm:h-32 relative aspect-[3/1]">
              <Image className="relative" src={"/logo.png"} alt="logo" fill />
            </div>

            <div className="flex flex-col items-center gap-6 sm:gap-10 w-full">
              <h1 className="uppercase text-3xl sm:text-4xl md:text-5xl font-black italic text-center">
                seu treino, seu resultado
              </h1>
              <hr className="border border-white w-full" />
              <p className="uppercase text-base sm:text-lg md:text-xl mx-2 sm:mx-6 font-bold text-center">
                Treinamento personalizado e exclusivo para você atingir seus objetivos de forma eficiente, segura e com acompanhamento especializado.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row w-full gap-4 lg:gap-0 lg:justify-around">
              <button
                type="button"
                className="cursor-pointer w-full lg:w-[45%] bg-gradient-to-r from-[#E3B930] to-[#F28F05] p-3 sm:p-5 rounded-xl px-6 sm:px-10 hover:shadow-lg hover:shadow-[#E3B93040] transition-all duration-300"
              >
                <span className="uppercase text-black font-black text-sm sm:text-base">Agende sua avaliação!</span>
              </button>
              <button
                type="button"
                className="cursor-pointer w-full lg:w-[45%] border border-[#E3B930] p-3 sm:p-5 rounded-xl px-6 sm:px-10 hover:bg-[#E3B93015] transition-colors duration-300"
              >
                <span className="uppercase text-sm sm:text-base text-[#E3B930]">conheça o projeto!</span>
              </button>
            </div>

            <a href="#sobre" className="cursor-pointer rounded-full mt-6 sm:mt-14 bg-[#E3B930] animate-bounce">
              <Image src={arrowDownIcon} alt="" fill className="relative! w-15!" />
            </a>
          </article>

          <article className="w-full sm:w-1/2 mt-10 sm:mt-0 scroll-animated opacity-0 translate-y-10 transition-all duration-700 delay-300">
            <div className="relative h-[50vh] sm:h-[70vh] md:h-[85vh] w-full">
              <Image
                className="relative z-10 object-cover"
                src={"/new/IMG_5296.jpg"}
                alt=""
                fill
                priority
              />

              {/* <Image
                className="absolute -bottom-3 -right-3 sm:-bottom-5 sm:-right-2 z-0 h-[103%] sm:h-[105%] w-[104%] sm:w-[112%]!"
                src={bottomRightTriangle}
                alt=""
              /> */}
            </div>
          </article>
        </section>

        <section id="sobre" className="flex flex-col gap-10 sm:gap-14 min-h-screen w-full pt-20">
          <h1 className="uppercase text-3xl sm:text-5xl font-bold text-center scroll-animated opacity-0 translate-y-10 transition-all duration-700">sobre nós</h1>

          <article className="flex flex-col sm:flex-row w-full">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 w-full gap-6">
              <div className="flex flex-col gap-4 bg-[var(--background-light)] px-8 py-6 rounded-xl hover:scale-105 transition-transform duration-100 scroll-animated opacity-0 translate-y-10 transition-all duration-700 delay-100">
                <i className="text-[#E3B930] text-2xl">🏋️</i>
                <h2 className="uppercase font-bold text-lg">atendimento</h2>
                <p>Treinos ajustados para o seu nível e objetivos</p>
              </div>
              <div className="flex flex-col gap-4 bg-[var(--background-light)] px-8 py-6 rounded-xl hover:scale-105 transition-transform duration-100 scroll-animated opacity-0 translate-y-10 transition-all duration-700 delay-200">
                <i className="text-[#E3B930] text-2xl">🥗</i>
                <h2 className="uppercase font-bold text-lg">nutrição</h2>
                <p>Orientação nutricional personalizada para seus objetivos</p>
              </div>
              <div className="flex flex-col gap-4 bg-[var(--background-light)] px-8 py-6 rounded-xl hover:scale-105 transition-transform duration-100 scroll-animated opacity-0 translate-y-10 transition-all duration-700 delay-300">
                <i className="text-[#E3B930] text-2xl">📊</i>
                <h2 className="uppercase font-bold text-lg">avaliação</h2>
                <p>Acompanhamento completo da sua evolução física</p>
              </div>
              <div className="flex flex-col gap-4 bg-[var(--background-light)] px-8 py-6 rounded-xl hover:scale-105 transition-transform duration-100 scroll-animated opacity-0 translate-y-10 transition-all duration-700 delay-400">
                <i className="text-[#E3B930] text-2xl">🔄</i>
                <h2 className="uppercase font-bold text-lg">resultados</h2>
                <p>Metodologia exclusiva para atingir seus objetivos</p>
              </div>
            </div>
          </article>

          <BannerCarousel />
        </section>

        {/* Sessões Section */}
        <section id="sessoes" className="flex flex-col gap-10 sm:gap-16 w-full py-10 relative pt-10">
          {/* Diagonal line accent */}
          <div className="absolute -left-10 top-20 w-32 h-1 bg-gradient-to-r from-[#E3B930] to-[#F28F05] transform -rotate-45 opacity-70"></div>
          <h1 className="uppercase text-3xl sm:text-5xl font-bold text-center scroll-animated opacity-0 translate-y-10 transition-all duration-700">nossas sessões</h1>
          <p className="text-center text-lg max-w-3xl mx-auto scroll-animated opacity-0 translate-y-10 transition-all duration-700 delay-100">
            O Studio Bruno Muniz é o ambiente onde seu objetivo de evoluir se torna realidade. Aprenda a treinar de verdade, se alimentar melhor e obter o melhor que seu corpo pode te oferecer.
          </p>

          {/* Sessions Modal Component */}
          <SessionsModal />

          {/* Circle accent */}
          <div className="absolute -right-16 bottom-40 w-32 h-32 rounded-full border-2 border-[#E3B93030] opacity-50"></div>
          <div className="w-full bg-gradient-to-r from-[#E3B930] to-[#F28F05] p-6 sm:p-10 rounded-xl mt-6 flex flex-col sm:flex-row items-center justify-between relative overflow-hidden scroll-animated opacity-0 translate-y-10 transition-all duration-700">
            {/* Abstract geometric shape in the background */}
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-md"></div>
            <div className="mb-6 sm:mb-0 relative z-10">
              <h3 className="text-black font-bold text-2xl mb-2">Pronto para transformar seu corpo e sua vida?</h3>
              <p className="text-black/80">Agende sua avaliação gratuita e dê o primeiro passo!</p>
            </div>
            <button className="bg-black text-white px-6 py-3 rounded-lg uppercase font-bold hover:bg-black/80 transition-colors relative z-10">
              Agendar agora
            </button>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="depoimentos" className="flex flex-col gap-10 w-full py-10 relative pt-20">
          {/* Triangle accent */}
          <div className="absolute right-10 top-10 w-16 h-16 border-2 border-[#E3B930] rotate-45 opacity-30"></div>

          <h1 className="uppercase text-3xl sm:text-5xl font-bold text-center scroll-animated opacity-0 translate-y-10 transition-all duration-700">depoimentos</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[var(--background-light)] p-6 rounded-xl hover:translate-y-[-8px] transition-transform duration-100 scroll-animated opacity-0 translate-y-10 transition-all duration-700 delay-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#E3B930] to-[#F28F05] mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold">Marcos Silva</h4>
                  <p className="text-sm text-gray-400">Aluno há 8 meses</p>
                </div>
              </div>
              <p className="italic">"Cansado de treinos genéricos e resultados que não aparecem? No Studio Bruno Muniz, encontrei uma abordagem individualizada que realmente funciona!"</p>
            </div>
            <div className="bg-[var(--background-light)] p-6 rounded-xl hover:translate-y-[-8px] transition-transform duration-100 scroll-animated opacity-0 translate-y-10 transition-all duration-700 delay-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#E3B930] to-[#F28F05] mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold">Ana Torres</h4>
                  <p className="text-sm text-gray-400">Aluna há 1 ano</p>
                </div>
              </div>
              <p className="italic">"A equipe multidisciplinar me acompanha em cada etapa da minha jornada. Nunca imaginei que poderia obter tantos resultados em tão pouco tempo!"</p>
            </div>
            <div className="bg-[var(--background-light)] p-6 rounded-xl hover:translate-y-[-8px] transition-transform duration-100 scroll-animated opacity-0 translate-y-10 transition-all duration-700 delay-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#E3B930] to-[#F28F05] mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold">Carlos Mendes</h4>
                  <p className="text-sm text-gray-400">Aluno há 6 meses</p>
                </div>
              </div>
              <p className="italic">"Além dos treinos personalizados, o ambiente acolhedor e a comunidade motivada fazem toda a diferença. Finalmente encontrei um lugar que me entende!"</p>
            </div>
          </div>
        </section>

        {/* Google Maps Location Section */}
        <section id="localizacao" className="flex flex-col gap-8 w-full py-10 relative pt-20">
          <h1 className="uppercase text-3xl sm:text-5xl font-bold text-center scroll-animated opacity-0 translate-y-10 transition-all duration-700">nossa localização</h1>

          <p className="text-center text-lg max-w-3xl mx-auto scroll-animated opacity-0 translate-y-10 transition-all duration-700 delay-100">
            Estamos situados em um local de fácil. Venha nos visitar e conhecer nossa estrutura premium.
          </p>

          <div className="w-full h-96 rounded-xl overflow-hidden scroll-animated opacity-0 translate-y-10 transition-all duration-700 delay-200">
            {/* Google Maps iframe */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.779695064405!2d-44.06481428825406!3d-19.9757650813455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6bfadf847000d%3A0x42f0a7b6772d17b2!2sR.%20Weaver%2C%20170%20-%20Lind%C3%A9ia%2C%20Belo%20Horizonte%20-%20MG%2C%2030690-740!5e0!3m2!1sen!2sbr!4v1748350732999!5m2!1sen!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>

          <div className="flex flex-col md:flex-row w-full mt-4">
            <div className="bg-[var(--background-light)] p-6 rounded-xl scroll-animated opacity-0 translate-y-10 transition-all duration-700 delay-300">
              <h3 className="uppercase font-bold text-lg mb-3">endereço</h3>
              <p>R. Weaver, 170</p>
              <p>Lindéia, Belo Horizonte - MG</p>
              <p>CEP: 3069-740</p>
            </div>
          </div>
        </section>

        <footer id="contato" className="w-full py-10 mt-10 border-t border-white/10 relative">
          {/* Subtle gradient line */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E3B930] to-transparent"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="scroll-animated opacity-0 translate-y-10 transition-all duration-700">
              <h3 className="uppercase font-bold text-xl mb-4">Studio Bruno Muniz</h3>
              <p className="mb-4">Seu treino, seu resultado. Transforme seu corpo e sua vida com nossa metodologia exclusiva.</p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gradient-to-br from-[#E3B930] to-[#F28F05] rounded-full flex items-center justify-center hover:scale-110 transition-transform">FB</a>
                <a href="#" className="w-10 h-10 bg-gradient-to-br from-[#E3B930] to-[#F28F05] rounded-full flex items-center justify-center hover:scale-110 transition-transform">IG</a>
                <a href="#" className="w-10 h-10 bg-gradient-to-br from-[#E3B930] to-[#F28F05] rounded-full flex items-center justify-center hover:scale-110 transition-transform">YT</a>
              </div>
            </div>
            <div className="scroll-animated opacity-0 translate-y-10 transition-all duration-700 delay-100">
              <h3 className="uppercase font-bold text-xl mb-4">Horários</h3>
              <p>Segunda a Sexta: 6h às 22h</p>
              <p>Sábados: Fechado</p>
              <p>Domingos: Fechado</p>
            </div>
            <div className="scroll-animated opacity-0 translate-y-10 transition-all duration-700 delay-200">
              <h3 className="uppercase font-bold text-xl mb-4">Contato</h3>
              <p>Email: contato@studiobrunomuniz.com</p>
              <p>Telefone: (31) 99788-4965</p>
              <p>WhatsApp: (31) 99788-4965</p>
              <button className="mt-4 bg-gradient-to-r from-[#E3B930] to-[#F28F05] px-4 py-2 rounded-lg text-black font-bold uppercase text-sm hover:shadow-lg hover:shadow-[#E3B93040] transition-all duration-300">
                Agende sua avaliação
              </button>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-white/10 text-center text-sm text-white/60">
            <p>© {new Date().getFullYear()} Studio Bruno Muniz. Todos os direitos reservados.</p>
          </div>
        </footer>

        {/* Mobile Menu Overlay */}
        <div className="mobile-menu fixed inset-0 bg-black/95 z-50 hidden flex-col items-center justify-center">
          <button className="absolute top-6 right-6 text-white text-2xl close-menu-button">
            ✕
          </button>
          <nav className="flex flex-col space-y-6 items-center">
            <a href="#home" className="mobile-nav-link text-white text-2xl hover:text-[#E3B930] transition-colors uppercase font-medium">Home</a>
            <a href="#sobre" className="mobile-nav-link text-white text-2xl hover:text-[#E3B930] transition-colors uppercase font-medium">Sobre</a>
            <a href="#sessoes" className="mobile-nav-link text-white text-2xl hover:text-[#E3B930] transition-colors uppercase font-medium">Sessões</a>
            <a href="#depoimentos" className="mobile-nav-link text-white text-2xl hover:text-[#E3B930] transition-colors uppercase font-medium">Depoimentos</a>
            <a href="#localizacao" className="mobile-nav-link text-white text-2xl hover:text-[#E3B930] transition-colors uppercase font-medium">Localização</a>
            <a href="#contato" className="mobile-nav-link text-white text-2xl hover:text-[#E3B930] transition-colors uppercase font-medium">Contato</a>
          </nav>
          <button className="mt-10 bg-gradient-to-r from-[#E3B930] to-[#F28F05] px-6 py-3 rounded-lg text-black font-bold uppercase text-base hover:shadow-lg hover:shadow-[#E3B93040] transition-all duration-300">
            Agende agora
          </button>
        </div>
      </main>
    </div>
  );
}