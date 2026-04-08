export default {
  content: [
        './resources/**/*.antlers.html',
        './resources/**/*.blade.php',
        './content/**/*.md'
    ],
    theme: {
        fontFamily: {
            sans: ['Source Sans 3', 'Helvetica', 'Arial', 'sans-serif'],
            display: ['Albert Sans', 'Helvetica', 'Arial', 'sans-serif'],
            mono: ['Menlo', 'monospace']
        },
        extend: {
            colors: {
                'teal': '#C21F0A',
                'teal-light': '#e04e2b',
                'cream': '#e7e4d3'
            }
        }
    },
    plugins: [],
    important: true
}