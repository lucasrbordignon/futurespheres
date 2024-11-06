import { BsCodeSlash } from "react-icons/bs";
import { FaBug, FaFacebook, FaHandsHelping, FaInstagram, FaLinkedin, FaPen } from "react-icons/fa";
import { FaSquareThreads, FaXTwitter } from "react-icons/fa6";
import { GiBrainstorm } from "react-icons/gi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { HiChevronRight } from "react-icons/hi2";
import { LiaTelegramPlane } from 'react-icons/lia';
import { LuLineChart } from "react-icons/lu";
import { TbSettingsAutomation } from "react-icons/tb";
import Background from './components/Background';
import CardModel1 from "./components/Cards/Model1";
import Header from './components/Header';

function App() {
  return (
    <Background>
      <Header/>
    
      <div className='w-full h-auto p-4 flex flex-col lg:items-start items-center'>
        <div className='mt-12'>
          <h2 className='text-amber-600 font-semibold text-center lg:text-start'>CONSTRUINDO O AMANHÃ, HOJE.</h2>
        </div>

        <h1
          className='text-zinc-300 font-bold text-6xl md:text-8xl lg:w-3/4 pt-6 text-center lg:text-start w-full'
          style={{lineHeight: 1.2}}
        >
          Nós somos uma Empresa de Software.
        </h1>

        <button className='text-zinc-300/90 hover:text-zinc-300 border-4 text-xl border-amber-600 hover:shadow-sm hover:shadow-amber-500 hover:cursor-pointer py-4 px-7 mt-12 font-semibold flex items-center gap-1'>
          FALE CONOSCO
        </button>
      </div>

      <div className='w-full h-auto py-4 flex md:flex-row flex-col md:gap-4 md:px-4 md:text-xs lg:text-base gap-8 items-center justify-around text-zinc-300 mt-36'>      
        <div className='h-96 lg:w-96 w-4/5 bg-stone-800 hover:shadow-amber-600 transition-transform transform hover:scale-105 hover:shadow-sm'>
          <div className='p-6'>
            <LiaTelegramPlane size={48} color='#d97706'/>

            <p className='text-zinc-300 font-semibold text-2xl pt-12 pb-6'>Conceitos Futuristas.</p>

            <hr className='border-amber-600 w-20 pb-6'/>

            <p className='text-zinc-400 w-5/6 font-semibold'>Criação de plataformas que atendem a diversas necessidades e habilidades, garantindo que todos possam usufruir da tecnologia sem barreiras.</p>
          </div>
        
        </div>

        <div className='h-96 lg:w-96 w-4/5 bg-stone-800 hover:shadow-amber-600 transition-transform transform hover:scale-105 hover:shadow-sm'>
          <div className='p-6'>
            <GiBrainstorm size={48} color='#d97706'/>

            <p className='text-zinc-300 font-semibold text-2xl pt-12 pb-6'>Grandes Ideias.</p>

            <hr className='border-amber-600 w-20 pb-6'/>

            <p className='text-zinc-400 w-5/6 font-semibold'>Essas ideias transformam o desenvolvimento digital, promovendo eficiência por meio da automação e metodologias ágeis. Interfaces intuitivas e responsivas que melhoram a experiência do usuário.</p>
          </div>
        
        </div>
        
        <div className='h-96 lg:w-96 w-4/5 bg-stone-800 hover:shadow-amber-600 transition-transform transform hover:scale-105 hover:shadow-sm'>
          <div className='p-6'>
            <HiOutlineLightBulb size={48} color='#d97706'/>

            <p className='text-zinc-300 font-semibold text-2xl pt-12 pb-6'>Soluções Criativas.</p>

            <hr className='border-amber-600 w-20 pb-6'/>

            <p className='text-zinc-400 w-5/6 font-semibold'>Soluções criativas no desenvolvimento de software são aquelas que vão além do óbvio para resolver problemas reais e melhorar a vida das pessoas.</p>
          </div>
        
        </div>
      </div>   

      <div className="mt-32 p-4">
        <div className='flex flex-row items-center gap-6'>
          <hr className='border-amber-600 w-14'/>
          <h1 className='text-zinc-300 font-bold text-5xl'>Serviços.</h1>
        </div>

        <div className='mt-6'>
          <p className='text-amber-600 font-semibold'>NOSSOS SERVIÇOS PARA CLIENTES</p>
        </div>
      </div>

      <div className='w-full h-auto py-4 flex items-center flex-wrap gap-9 justify-around mt-24'>        
            
        <CardModel1
          name='Estratégia Digital' 
          description='Criação de plataformas que atendem a diversas necessidades e habilidades, garantindo que todos possam usufruir da tecnologia sem barreiras.'
          icon={<LuLineChart />}
        />

        <CardModel1
          name='UX Designs' 
          description='Criação de plataformas que atendem a diversas necessidades e habilidades, garantindo que todos possam usufruir da tecnologia sem barreiras.'
          icon={<FaPen/>}
        />

        <CardModel1
          name='Desenvolvimento Personalizado' 
          description='Criação de plataformas que atendem a diversas necessidades e habilidades, garantindo que todos possam usufruir da tecnologia sem barreiras.'
          icon={<BsCodeSlash/>}
        />

        <CardModel1
          name='Manutenção de Softwares' 
          description='Criação de plataformas que atendem a diversas necessidades e habilidades, garantindo que todos possam usufruir da tecnologia sem barreiras.'
          icon={<FaBug/>}
        />

        <CardModel1
          name='Consultoria' 
          description='Criação de plataformas que atendem a diversas necessidades e habilidades, garantindo que todos possam usufruir da tecnologia sem barreiras.'
          icon={<FaHandsHelping/>}
        />
        
        <CardModel1
          name='Automação' 
          description='Criação de plataformas que atendem a diversas necessidades e habilidades, garantindo que todos possam usufruir da tecnologia sem barreiras.'
          icon={<TbSettingsAutomation/>}
        />
        
      </div>

      <div className="mt-32 p-4">
        <div className='flex flex-row items-center gap-6'>
          <hr className='border-amber-600 w-14'/>
          <h1 className='text-zinc-300 font-bold text-5xl'>Contato.</h1>
        </div>

        <div className='mt-6'>
          <p className='text-amber-600 font-semibold'>NOSSOS CONTATOS PARA CLIENTES</p>
        </div>
      </div>

      <div className='w-full h-auto overflow-hidden p-4 flex pt-16'>
        <div className="w-1/2">
          <h2 
            className="text-zinc-300 font-semibold text-4xl pb-9 pt-4"
            style={{lineHeight: 1.1}}
          >
            Estamos sempre prontos para ajudá-lo e responder às suas perguntas
          </h2>
          <p  className="text-zinc-400 font-medium py-4">Saíba como nos encontrar.</p>

          <div className='w-full flex py-4 items-center flex-wrap'>
            <div className="w-1/2 flex flex-col items-start gap-4">
              <h3 className="text-zinc-300 font-semibold">Email</h3>
              <p className="text-zinc-400 underline hover:text-zinc-200 cursor-pointer">contato@futurespheres.com.br</p>
            </div>

            <div className="w-1/2 flex flex-col items-start gap-4">
              <h3 className="text-zinc-300 font-semibold">WhatsApp</h3>
              <p className="text-zinc-400">+55 (15) 9 9136-0221</p>
            </div>

            <div className="w-1/2 flex flex-col items-start gap-4 mt-16">
              <h3 className="text-zinc-300 font-semibold">Redes sociais</h3>
              <div className="flex gap-4">
                <FaFacebook size={32} color="#a1a1aa" className="hover:fill-zinc-300 cursor-pointer"/>
                <FaInstagram size={32} color="#a1a1aa" className="hover:fill-zinc-300 cursor-pointer"/>
                <FaLinkedin size={32} color="#a1a1aa" className="hover:fill-zinc-300 cursor-pointer"/>
                <FaXTwitter size={32} color="#a1a1aa" className="hover:fill-zinc-300 cursor-pointer"/>
                <FaSquareThreads size={32} color="#a1a1aa" className="hover:fill-zinc-300 cursor-pointer"/>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2 bg-stone-800/50 px-4 rounded-lg py-12">
        <h2 
            className="text-zinc-300 font-semibold text-4xl"
            style={{lineHeight: 1.1}}
          >
            Entre em Contato
          </h2>

          <p  className="text-zinc-400 font-medium py-6">Defina seus objetivos e identifique as áreas onde podemos agregar valor ao seu negócio.</p>

          <input type="text" name="fullName" id="fullName" className="bg-transparent text-zinc-300 w-full py-2 my-2 border-b-2 border-amber-600 focus:outline-none" placeholder="Nome Completo"/>
          <input type="email" name="email" id="email" className="bg-transparent text-zinc-300 w-full py-2 border-b-2 my-2  border-amber-600 focus:outline-none" placeholder="Email"/>
          <input type="text" name="subject" id="subject" className="bg-transparent text-zinc-300 w-full py-2 border-b-2 my-2  border-amber-600 focus:outline-none" placeholder="Assunto"/>
          <textarea name="body" id="body" className="bg-transparent text-zinc-300 w-full py-2 border-b-2 my-2  border-amber-600 focus:outline-none" placeholder="Mensagem"/>

          <button className="bg-amber-600 text-zinc-300 text-sm flex items-center gap-1 py-2 px-2 rounded-md my-2">
            <HiChevronRight/>
            Enviar uma mensagem
          </button>
        </div>
      </div>

    </Background>
  )
}

export default App
