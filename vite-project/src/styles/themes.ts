export const lightTheme = {
  // Backgrounds
  background: '#F8F9FC',
  cardBackground: '#FFFFFF',
  headerBackground: '#FFFFFF',

  // Colors
  primary: '#0070F3',
  primaryHover: '#0051C2',
  primaryLight: '#E6F2FF',
  secondary: '#FFFFFF',

  // Text
  textPrimary: '#1A202C',
  textSecondary: '#718096',
  textLight: '#A0AEC0',

  // Borders
  borderColor: '#E2E8F0',
  borderLight: '#EDF2F7',

  // Status Colors
  success: '#48BB78',
  warning: '#ECC94B',
  error: '#F56565',
  info: '#4299E1',

  // Chart Colors
  chartPrimary: 'rgb(0, 112, 243)',
  chartBackground: 'rgba(0, 112, 243, 0.1)',
  chartGrid: '#E2E8F0',

  // Shadows
  shadowSm: '0 1px 3px rgba(0, 0, 0, 0.05)',
  shadowMd: '0 4px 6px rgba(0, 0, 0, 0.05)',
  shadowLg: '0 10px 15px rgba(0, 0, 0, 0.08)',
}

export const darkTheme = {
  // Backgrounds
  background: '#0F1419',
  cardBackground: '#1A202C',
  headerBackground: '#1A202C',

  // Colors
  primary: '#3182CE',
  primaryHover: '#2C5AA0',
  primaryLight: '#1A365D',
  secondary: '#2D3748',

  // Text
  textPrimary: '#F7FAFC',
  textSecondary: '#CBD5E0',
  textLight: '#A0AEC0',

  // Borders
  borderColor: '#2D3748',
  borderLight: '#4A5568',

  // Status Colors
  success: '#48BB78',
  warning: '#ECC94B',
  error: '#F56565',
  info: '#4299E1',

  // Chart Colors
  chartPrimary: 'rgb(49, 130, 206)',
  chartBackground: 'rgba(49, 130, 206, 0.2)',
  chartGrid: '#2D3748',

  // Shadows
  shadowSm: '0 1px 3px rgba(0, 0, 0, 0.3)',
  shadowMd: '0 4px 6px rgba(0, 0, 0, 0.3)',
  shadowLg: '0 10px 15px rgba(0, 0, 0, 0.4)',
}

export type Theme = typeof lightTheme
