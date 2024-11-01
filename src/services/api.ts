import { User } from '../types/user';
import usersData from '../data/users.json';

export async function fetchUsers(): Promise<User[]> {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return usersData.users;
  } catch (error) {
    throw new Error('Failed to fetch users');
  }
}

export async function authenticateUser(email: string, password: string): Promise<User | null> {
  try {
    const users = await fetchUsers();
    const user = users.find(u => u.email === email && u.password === password);
    return user || null;
  } catch (error) {
    throw new Error('Authentication failed');
  }
}