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
                primary: '#0075C9',
                secondary: '#0075C9'
            },
            accent: {
                gray: {
                    light: colors.gray[300],
                    dark: colors.gray[500]
                },
                default: '#0075C9'
            }
        }
    }
}
