import { useCallback, useEffect, useState, useRef } from "preact/hooks";
import { nav } from "~src/nav";

const use_setVh = () => {
  const browserHeight_previousValue = useRef(0);

  useEffect(() => {
    const setVh = () => {
      const measuringStickHeight = document.querySelector("#measuring-stick")!.clientHeight;
      const browserHeight_hasChanged = measuringStickHeight !== browserHeight_previousValue.current;

      if (browserHeight_hasChanged) {
        browserHeight_previousValue.current = measuringStickHeight;
        document.querySelector("html")!.style.setProperty("--vh", window.innerHeight / 100 + "px");
      }
    };

    window.addEventListener("resize", setVh);
    setVh();

    return () => {
      window.removeEventListener("resize", setVh);
    };
  }, []);
};

function MobileMenu() {
  use_setVh();

  const [isOpen, set_isOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    set_isOpen((isOpen) => !isOpen);
  }, [set_isOpen]);

  return (
    <>
      <button
        className={`hamburger hamburger--spin ml-auto sm:hidden z-50 ${isOpen ? "is-active" : ""}`}
        type="button"
        onClick={toggleMenu}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>

      <div
        className={`fixed top-[65px] left-0 w-full transform transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ height: `calc(100 * var(--vh))` }}
      >
        <div className="flex flex-col p-10 gap-10 bg-primary-600 absolute z-10 w-full h-full top-0 right-0">
          {nav.map((item) => (
            <a
              href={item.href}
              className={"text-5xl text-center font-medium text-blue-400 hover:text-secondary-500 transition-colors"}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default MobileMenu;
