export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

export default {
  home: '/',
  register: '/api/auth/register',
  login: '/api/auth/login',
  dashboard: '/dashboard',
  account: '/dashboard/account',
  bookmarked: '/dashboard/bookmarked',
} as const