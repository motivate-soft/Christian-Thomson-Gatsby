// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: [
    './src/**/*.js',
  ],
  theme: {
    extend: {
      width: {
        '1/10': '10%',
        '2/10': '20%',
        '3/10': '30%',
        '4/10': '40%',
        '5/10': '50%',
        '6/10': '60%',
        '7/10': '70%',
        '8/10': '80%',
        '9/10': '90%',
      },
      textColor: {
        'primary': '#264386',
        'second': '#66ADCC',
        'black': '#2B2B2B',
        'black-1': '#363636',
        'black-2': '#454545',
        'grey': '#B4B4B4',
        'grey-1': '#707070',
        'red': '#D84664',
        'red-1': '#DA4764',
      },
      backgroundColor: {
        'primary': '#264386',
        'second': '#66ADCC',
        'black': '#363636',
        'grey': '#E0E0E0',
        'grey-1': '#F2F2F2',
        'green': '#53B48B'
      },
      gradientColorStops: {
        'blue': '#264386',
        'dark-blue': '#0C2150',
        'red': '#D74663'
      },
      fontFamily: {
        'con-regular': ['CondensedRegular'],
        'con-bold': ['CondensedBold'],
        'slab-regular': ['SlabRegular'],
        'slab-bold': ['SlabBold'],
        'menlo-regular': ['MenloRegular'],
        'menlo-bold': ['MenloBold']
      },
      borderRadius: {
        'large': '15px'
      }
    },
  },
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [require("@tailwindcss/custom-forms")],
};
