import { useState } from 'react';
import { HiChevronDown, HiMenu, HiX } from 'react-icons/hi';
import logo from '../assets/logo_amber.svg';

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="w-full flex justify-between items-center p-4 z-50 sticky top-0">
      <div className="flex items-center hover:cursor-pointer">
        <img src={logo} alt="Logo" className="h-24 w-auto" />
        <h1 className="font-semibold text-zinc-300 text-2xl">
          FUTURESPHERES
        </h1>
      </div>

      <nav className="hidden lg:flex gap-4 items-center text-zinc-300 font-semibold text-base">
        <p className="hover:border-b-2 hover:border-amber-600 hover:cursor-pointer py-3 px-3">
          INÍCIO
        </p>
        <p className="hover:border-b-2 hover:border-amber-600 hover:cursor-pointer py-3 px-3 flex items-center gap-1">
          SERVIÇOS
          <HiChevronDown color="#D4D4D8" />
        </p>
        <p className="hover:border-b-2 hover:border-amber-600 hover:cursor-pointer py-3 px-3">
          TRABALHOS
        </p>
        <p className="hover:border-b-2 hover:border-amber-600 hover:cursor-pointer py-3 px-3">
          SOBRE
        </p>
        <p className="border-2 border-amber-600 hover:shadow-sm hover:shadow-amber-400 hover:cursor-pointer py-3 px-3 flex items-center gap-1">
          CONTATO
          <HiChevronDown color="#D4D4D8" />
        </p>
      </nav>

      <div className="lg:hidden">
        <button onClick={toggleSidebar} className="text-zinc-300 text-3xl">
          <HiMenu />
        </button>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-stone-800 shadow-lg transform ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <div className="flex flex-col items-start p-6 text-zinc-300 font-semibold text-base space-y-4">

          <button onClick={toggleSidebar} className="self-end text-2xl text-zinc-300 mb-4">
            <HiX />
          </button>
          <p className="hover:border-b-2 hover:border-amber-600 hover:cursor-pointer py-3 px-3 w-full text-left">
            INÍCIO
          </p>
          <p className="hover:border-b-2 hover:border-amber-600 hover:cursor-pointer py-3 px-3 w-full text-left flex items-center gap-1">
            SERVIÇOS
            <HiChevronDown color="#D4D4D8" />
          </p>
          <p className="hover:border-b-2 hover:border-amber-600 hover:cursor-pointer py-3 px-3 w-full text-left">
            TRABALHOS
          </p>
          <p className="hover:border-b-2 hover:border-amber-600 hover:cursor-pointer py-3 px-3 w-full text-left">
            SOBRE
          </p>
          <p className="border-2 border-amber-600 hover:shadow-sm hover:shadow-amber-400 hover:cursor-pointer py-3 px-3 w-full text-left flex items-center gap-1">
            CONTATO
            <HiChevronDown color="#D4D4D8" />
          </p>
        </div>
      </div>

      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
        />
      )}
    </header>
  );
}

export default Header;
