import Tilt from "./Tilt";

export default function Owl() {
  return (
    // <div class="pointer-events-none select-none relative">
    <Tilt className="grid grid-cols-1 grid-rows-1 items-center justify-center">
      <img
        alt="owl-eyes"
        src="/assets/website/owl-eyes.svg"
        class="w-[550px] relative z-20 col-start-1 row-start-1"
        style={{ transform: "translateZ(40px)" }}
      />
      <img
        alt="owl-pupils"
        src="/assets/website/owl-pupils.svg"
        class="w-[550px] relative z-30 col-start-1 row-start-1"
        style={{ transform: "translateZ(80px)" }}
      />
      <img
        alt="owl-beak"
        src="/assets/website/owl-beak.svg"
        class="w-[550px]relative z-30 col-start-1 row-start-1"
        style={{ transform: "translateZ(56px)" }}
      />
      <img
        alt="owl-feathers"
        src="/assets/website/owl-feathers.svg"
        class="w-[550px] relative z-10 col-start-1 row-start-1"
        style={{ transform: "translateZ(16px)" }}
      />
      <img
        alt="owl-raccoon"
        src="/assets/website/owl-raccoon.svg"
        class="w-[550px]relative z-0 col-start-1 row-start-1"
        style={{ transform: "translateZ(-40px)" }}
      />
    </Tilt>
    // </div>
  );
}
