// Mock data for testing authentication
// In production, this would be handled by the backend API

interface MockUser {
  id: number
  name: string
  email: string
  password: string // For testing only - never do this in production!
}

// Initialize with some test users
const MOCK_USERS_KEY = 'mock_users'
const DEFAULT_MOCK_USERS: MockUser[] = [
  {
    id: 1,
    name: 'Felipe Trevizam',
    email: 'felipe_trevizam@icloud.com',
    password: 'senha123',
  },
  {
    id: 2,
    name: 'Admin User',
    email: 'admin@example.com',
    password: 'admin123',
  },
]

// Initialize mock users in localStorage if not exists
function initializeMockUsers() {
  const stored = localStorage.getItem(MOCK_USERS_KEY)
  if (!stored) {
    localStorage.setItem(MOCK_USERS_KEY, JSON.stringify(DEFAULT_MOCK_USERS))
  }
}

// Get all mock users
export function getMockUsers(): MockUser[] {
  initializeMockUsers()
  const stored = localStorage.getItem(MOCK_USERS_KEY)
  return stored ? JSON.parse(stored) : DEFAULT_MOCK_USERS
}

// Find user by email and password
export function findMockUser(
  email: string,
  password: string
): MockUser | undefined {
  const users = getMockUsers()
  return users.find(
    (user) => user.email === email && user.password === password
  )
}

// Find user by email
export function findUserByEmail(email: string): MockUser | undefined {
  const users = getMockUsers()
  return users.find((user) => user.email === email)
}

// Create new user (for registration)
export function createMockUser(
  name: string,
  email: string,
  password: string
): MockUser | null {
  // Check if email already exists
  if (findUserByEmail(email)) {
    return null // User already exists
  }

  const users = getMockUsers()
  const newUser: MockUser = {
    id: Math.max(...users.map((u) => u.id)) + 1,
    name,
    email,
    password,
  }

  users.push(newUser)
  localStorage.setItem(MOCK_USERS_KEY, JSON.stringify(users))

  return newUser
}

// Initialize on load
initializeMockUsers()
