module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "pets-wallpaper":
          "url('http://pets-images.dev-apis.com/pets/wallpaperB.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
