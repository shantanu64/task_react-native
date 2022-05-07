// tailwind.config.js
const plugin = require('tailwindcss/plugin');

module.exports = {
    theme: {
        screens: {
            sm: '380px',
            md: '420px',
            lg: '680px',
            // or maybe name them after devices for `tablet:flex-row`
            tablet: '1024px',
        },
    },
    plugins: [
        plugin(({ addUtilities }) => {
            addUtilities({
                btn: {
                    background: `linear-gradient(169.23deg, rgba(255, 255, 255, 0.25) -0.52%, rgba(255, 255, 255, 0) 104.4%)`,
                    filter: `drop-shadow(0px -4px 20px rgba(255, 255, 255, 0.15))`,
                    backdropFilter: `blur(8px)`,
                },
                boxshdw: {
                    boxShadow: ` 13px 10px 25px -5px rgba(24, 178, 222, 0.4),-13px -10px 25px -5px rgba(251, 55, 255, 0.4)`,
                },
                dropshadow: {
                    filter: ` drop-shadow(0px 21px 64px #84E4FF)`,
                },
                newborder: {
                    position: `relative`,
                    background: `linear-gradient(315deg, hsla(193, 80%, 48%, 1) 0%, hsla(0, 0%, 0%, 1) 30%, hsla(0, 0%, 0%, 1) 70%, hsla(299, 100%, 61%, 1) 100%)`,
                    padding: `1.8px`
                }

            });
        }),
    ],
};