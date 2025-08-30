import type { ComponentChildren } from "preact";
import { useCallback, useEffect, useRef, useState } from "preact/hooks";
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

function MobileMenu({ children }: { children: ComponentChildren }) {
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
        className={`fixed top-[65px] left-0 w-full transform transition-transform bg-background px-8 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ height: `calc(100 * var(--vh))` }}
      >
        <div className="flex flex-col gap-10 my-10">
          {nav.map((item) => (
            <a
              href={item.href}
              className={"text-3xl font-medium text-accent hover:text-secondary-500 transition-colors block"}
            >
              {item.name}
            </a>
          ))}
        </div>
        <p className="text-xs uppercase text-white opacity-70 mb-2">Social Media</p>
        {children}
      </div>
    </>
  );
}

export default MobileMenu;
