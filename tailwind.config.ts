import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ["./**/*.tsx"],
  theme: {
    container: { center: true },
    extend: {
      animation: {
        sliding: "sliding 30s linear infinite",
      },
      dropShadow: {
        "custom-box": "0 0 1px rgb(237, 237, 237)",
        "custom-box2": "0 0 2px rgb(237, 237, 237)",
        "custom-box3": "0 0 3px rgb(237, 237, 237)",
      },
      keyframes: {
        sliding: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
};
