import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { LogOut, User as UserIcon, Mail, Phone, Building, MapPin } from 'lucide-react';
import Button from './ui/Button';

export default function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Profile</h1>
          <div className="w-32">
          <Button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 text-white rounded-lg flex items-center gap-2"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <img
                src={user.picture}
                alt={`${user.name.first} ${user.name.last}`}
                className="w-20 h-20 rounded-full"
              />
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">
                  {user.name.first} {user.name.last}
                </h2>
                <p className="text-gray-600">{user.company}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-600">
                <UserIcon className="w-5 h-5" />
                <span>Age: {user.age} • Eye Color: {user.eyeColor}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Mail className="w-5 h-5" />
                <span>{user.email}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Phone className="w-5 h-5" />
                <span>{user.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Building className="w-5 h-5" />
                <span>{user.company}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <MapPin className="w-5 h-5" />
                <span>{user.address}</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Account Details</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Account Status</p>
                <p className="font-medium">
                  {user.isActive ? (
                    <span className="text-green-600">Active</span>
                  ) : (
                    <span className="text-red-600">Inactive</span>
                  )}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Balance</p>
                <p className="font-medium">{user.balance}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">User ID</p>
                <p className="font-medium text-gray-600">{user._id}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}