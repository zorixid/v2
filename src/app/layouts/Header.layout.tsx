import { useState, useContext } from "react";
import { Icon } from "@iconify/react";
import useDarkMode from "app/hooks/darkMode.hook";
import { ScrollContext } from "app/components/providers/Scroll.provider";
const userRoutes = [
  { text: "About", url: "/#about" },
  { text: "Services", url: "/#services" },
  { text: "Skills", url: "/#skills" },
  { text: "Experience", url: "/#experience" },
  { text: "Projects", url: "/#projects" },
  { text: "Testimonials", url: "/#testimonials" },
  { text: "Contact", url: "/#contact" },
];

const Header = () => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const { darkModeEnabled, toggleMode } = useDarkMode();
  const { scroll } = useContext(ScrollContext);

  const handleMobileMenuToggle = () => {
    setIsOpenMobileMenu(!isOpenMobileMenu);
  };

  return (
    <header>
      {/* Mobile Menu */}
      <div
        className={`z-20 bg-white/80 md:hidden transition-all duration-300 ease-in-out dark:bg-neutral-950/40 fixed w-full h-full left-0 text-center flex flex-col backdrop-blur-lg justify-center gap-4 text-lg md:opacity-0 ${
          isOpenMobileMenu ? "opacity-100 top-0" : "opacity-0 -top-full"
        }`}
      >
        {userRoutes.map((item) => (
          <div key={`sm-nav-${item.text}`}>
            {item.text && (
              <a
                className={`cursor-pointer m-color-transition ${
                  window.location.href.includes(item.url)
                    ? "text-gold-main"
                    : "  hover:text-gold-main "
                }`}
                onClick={() => {
                  setIsOpenMobileMenu(false);
                }}
                href={item.url}
              >
                {item.text}
              </a>
            )}
          </div>
        ))}
      </div>

      {/* Desktop Navigation */}
      <nav
        className={`z-30 flex items-stretch justify-between lg:justify-around w-full fixed left-0 top-0 px-2 transition-all duration-1000  ${
          scroll > 0 ? "py-2 bg-gray-200/90 dark:bg-dark-light/90  " : "py-5"
        }`}
      >
        <a href="/#hero" className={`flex items-center gap-2 `}>
          <img src="/assets/at-large.png" className="w-12 block" alt="A.T" />
          <div className="text-dark-light dark:text-white font-semibold text-2xl hidden md:block">
            Alexis Tanaka
          </div>
        </a>

        <div className="lg:flex items-center gap-8 ml-4 hidden">
          {userRoutes.map((item) => (
            <div
              key={`lg-nav-${item.text}`}
              className="group relative h-full flex items-center cursor-pointer"
            >
              <a
                className={`cursor-pointer m-transition-color flex items-center gap-1 ${
                  window.location.href.includes(item.url)
                    ? "text-gold-main"
                    : "group-hover:text-dark-main dark:group-hover:text-white "
                }`}
                onClick={() => {
                  setIsOpenMobileMenu(false);
                }}
                href={item.url}
              >
                {item.text}
              </a>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-1">
          <div
            className="p-2 cursor-pointer hover:bg-gray-400/10 dark:hover:bg-neutral-900 rounded-lg  m-color-transition"
            onClick={toggleMode}
          >
            {darkModeEnabled ? (
              <Icon icon={"ph:sun"} className="w-5 h-5 text-gold-main" />
            ) : (
              <Icon icon={"ph:moon"} className="w-5 h-5 text-gold-main" />
            )}
          </div>
          <div
            className="p-2 cursor-pointer hover:bg-gray-400/10 dark:hover:bg-neutral-900 rounded-lg m-color-transition lg:hidden"
            onClick={handleMobileMenuToggle}
          >
            <Icon icon={"ion:menu-sharp"} className="w-5 h-5 text-gold-main" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
