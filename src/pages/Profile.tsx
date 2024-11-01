import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { LogOut, Mail, Phone, MapPin, Briefcase, DollarSign } from 'lucide-react';

export default function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto p-4">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="h-32 bg-gradient-to-r from-blue-500 to-purple-600"></div>
          <div className="relative px-6 py-8">
            <div className="absolute -top-16 left-6">
              <div className="w-32 h-32 bg-white rounded-full p-2 shadow-lg">
                <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-4xl font-bold text-gray-600">
                    {user.name.first[0]}{user.name.last[0]}
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-16">
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-900">
                  {user.name.first} {user.name.last}
                </h1>
                <button
                  onClick={handleLogout}
                  className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-200"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-700">{user.email}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-700">{user.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-700">{user.address}</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Briefcase className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-700">{user.company}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <DollarSign className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-700">{user.balance}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}