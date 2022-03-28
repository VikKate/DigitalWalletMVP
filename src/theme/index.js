import {extendTheme} from 'native-base';

export const theme = extendTheme({
  colors: {
    secondaryText: '#a3a3a3', // trueGray.400
    bgLight: '#fafafa', // trueGray.50
    bgDark: '#171717', // trueGray.900
    tabBarBgLight: '#fff', // white
    tabBarBgDark: '#27272a', // gray.800
    tabBarActiveText: '#06b6d4', // primary.500
    tabBarInactiveText: '#a1a1aa', // gray.400
    listItemBgLight: '#fff', // white
    listItemBgDark: '#262626', // trueGray.800
    cardBgLight: '#cffafe', // primary.100
    cardBgDark: '#155e75', // primary.800
    incomeText: '#22c55e', // success.500
    expenseText: '#ef4444', // error.500
  },
  components: {
    Text: {
      variants: {
        secondary: {
          color: 'secondaryText',
        }
      },
    },
  },
  config: {
    useSystemColorMode: true,
  },
});
