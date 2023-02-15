import React, { useState } from 'react';
import { SiNintendogamecube } from 'react-icons/si';
import { GiHamburgerMenu } from 'react-icons/gi';
import Typewriter from 'typewriter-effect';
import ToggleTheme from './components/toggle-theme.component';
import NavLinks from './components/nav-links.component';
import Item from './components/item.component';

const App = () => {
  const [menu, setMenu] = useState(false);

  return (
    <React.Fragment>
      <section
        id='home'
        className='relative h-1/2 overflow-hidden bg-gradient-to-t from-indigo-200 dark:from-slate-800 dark:to-slate-900 lg:h-screen'>
        <nav className='fixed top-0 z-10 w-full bg-white dark:bg-slate-900'>
          <div className='container mx-auto flex items-center justify-between py-5 md:px-0'>
            {/* logo */}
            <div className='flex items-center justify-center gap-2'>
              <SiNintendogamecube className='h-8 w-8 text-indigo-500 dark:text-gray-100' />
              <h1 className='text-2xl font-bold text-indigo-500 dark:text-gray-100'>
                <span className='hidden md:block'>Portfolio</span>
              </h1>
            </div>
            {/* desktop menu */}
            <ul className='hidden space-x-10 text-sm font-bold uppercase text-[#303030] dark:text-gray-100 md:flex'>
              <NavLinks func={setMenu} />
              <ToggleTheme isMobileMenu={false} />
            </ul>
            <GiHamburgerMenu
              className={`z-10 h-6 w-6 cursor-pointer text-[#303030] dark:text-gray-100 ${
                menu && 'text-white'
              } ${menu ? 'md:block' : 'md:hidden'}`}
              onClick={() => setMenu(!menu)}
            />
            {/* mobile menu */}
            <ul
              className={`absolute left-0 top-0 w-full space-y-5 rounded-b-xl bg-indigo-900 p-10 text-center uppercase text-gray-100 dark:bg-slate-900 ${
                menu ? 'block' : 'hidden'
              }`}>
              <NavLinks func={setMenu} />
              <ToggleTheme isMobileMenu={true} func={setMenu} />
            </ul>
          </div>
        </nav>

        {/* animated text */}
        <div
          className={`absolute top-1/2 left-0 right-0 mx-auto w-fit text-3xl font-bold sm:text-4xl md:top-1/3 md:left-48 md:mx-0 md:text-6xl xl:text-7xl ${
            menu && '-z-10'
          }`}>
          <span className='text-center text-indigo-500 md:text-start'>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString('Java')
                  .pauseFor(500)
                  .deleteAll()
                  .typeString('ReactJs')
                  .pauseFor(500)
                  .deleteAll()
                  .start();
              }}
              options={{ loop: true, cursor: '', deleteSpeed: 100 }}
            />
          </span>
          <p className='text-[#303030] dark:text-gray-300'>Developer</p>
        </div>
        {/* text card */}
        <div
          className={`absolute top-0 bottom-0 right-10 m-auto hidden h-fit w-1/3 flex-col gap-5 rounded-md bg-white p-6 shadow-xl dark:bg-slate-900 dark:shadow-slate-800 lg:flex ${
            menu && '-z-10'
          }`}>
          <h2 className='text-4xl font-bold text-indigo-500'>Hi, I'm Igor</h2>
          <p className='text-gray-400'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <a
            className='w-fit rounded-md bg-indigo-600 px-3 py-2 text-xl font-semibold text-white'
            href='https://github.com/igorcossta'
            target={'_blank'}>
            Hire me
          </a>
        </div>
      </section>

      {/* works */}
      <section id='works' class='scroll-mt-16 py-10 dark:bg-slate-900'>
        <div class='container mx-auto'>
          <div class='flex flex-col items-center gap-3'>
            <h1 class='font-bold text-indigo-500'>PORTFOLIO</h1>
            <h2 class='flex flex-col items-center gap-1 text-3xl text-[#303030] dark:text-gray-100 mini:flex-row'>
              <span>Works</span>
              <span>&</span>
              <span>Projects</span>
            </h2>
            <p class='w-full px-2 text-center text-gray-400 md:w-1/2'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>

          {/* fetch my projects from API */}
          <div class='flex flex-wrap justify-between p-5 sm:p-0'>
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
          </div>
        </div>
      </section>

      {/* footer */}
      <footer class='relative bottom-0 w-full bg-gray-800'>
        <div class='container mx-auto flex items-center justify-center gap-2 py-5 md:justify-between'>
          <a href='https://github.com/igorcossta' target={'_blank'}>
            <span className='font-medium text-gray-100'>Portfolio</span>
          </a>
          <span class='font-medium text-gray-100'>© 2023</span>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default App;
