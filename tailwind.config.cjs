const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

const CUSTOM_COLORS = {
  primary: {
    50: "#D6EAFF",
    100: "#B3D6FF",
    200: "#61A3FF",
    300: "#1D6DF6",
    400: "#0E43B4",
    500: "#0D2466",
    600: "#07215A",
    700: "#031F4E",
    800: "#00193D",
    900: "#00152E",
  },
  secondary: {
    50: "#FFF9F5",
    100: "#FFF4EB",
    200: "#FFEAD1",
    300: "#FFE1B8",
    400: "#FFD48A",
    500: "#FFC74D",
    600: "#FFAF24",
    700: "#FF9500",
    800: "#E67A00",
    900: "#C76000",
  },
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            blockquote: {
              fontWeight: 400,
              borderColor: colors.blue["500"],
            },
            code: {
              background: CUSTOM_COLORS.secondary["500"],
              color: CUSTOM_COLORS.primary["500"] + " !important",
              fontWeight: 400,
              padding: defaultTheme.spacing["1"],
              borderRadius: defaultTheme.borderRadius.md,
            },
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
          },
        },
      },
      colors: CUSTOM_COLORS,
    },
    container: {
      center: true,
      padding: {
        DEFAULT: defaultTheme.spacing[4],
        lg: defaultTheme.spacing[8],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
