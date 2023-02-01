const colors = require('tailwindcss/colors')

module.exports = {
    /**
     * Color Palette - Default (Never remove this)
     */
    default: {
        colors: {
            primary: colors.gray[700],
            secondary: '#0075C9',
            dark: {
                primary: colors.sky[300],
                secondary: colors.sky[500]
            },
            accent: {
                gray: {
                    light: colors.gray[300],
                    dark: colors.gray[500]
                },
                default: colors.sky[700]
            }
        }
    }
}
