export const fontFamily = {
    system: '"Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
    appleSystem: '-apple-system, BlinkMacSystemFont',
    notoSans: 'Noto Sans KR',
    gilroyR: 'Gilroy Regular',
    gilroyB: 'Gilroy ExtraBold',
};

export const color = {
    bg: '#FAF8FF',
    brand400: '#7687F5',
    brand500: '#5E67EB',
    blue100: '#EEF3FB',    
    slate700: '#16263D',
    slate600: '#40577A',
    slate500: '#6F84A3',
    slate400: '#9BAFCC',
    slate300: '#BCCBE0',
    slate200: '#E1E9F5',
    slate100: '#F5F7FA',
    midnight700: 'rgba(28, 31, 41, 0.96)',
    midnight600: 'rgba(28, 31, 41, 0.8)',
    midnight500: 'rgba(42, 47, 61, 0.64)',
    midnight400: 'rgba(42, 47, 61, 0.48)',
    midnight300: 'rgba(42, 47, 61, 0.32)',
    midnight200: 'rgba(42, 47, 61, 0.16)',
    midnight100: 'rgba(42, 47, 61, 0.08)',
};

export const breakPoint = {
    tablet: 1175, // 이하
    mobile: 767, // 이하
};

export const mediaQuery = {
    mediaDesktop: `@media (min-width: ${breakPoint.tablet + 1}px)`,
    mediaTablet: `@media (max-width: ${breakPoint.tablet}px) and (min-width: ${breakPoint.mobile + 1}px)`,
    mediaMobile: `@media (max-width: ${breakPoint.mobile}px)`,
};