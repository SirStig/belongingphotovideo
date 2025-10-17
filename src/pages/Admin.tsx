import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Settings, Image, Users, BarChart, LogOut, Eye, EyeOff } from 'lucide-react';
import { useCMS } from '../contexts/CMSContext';

const Admin: React.FC = () => {
  const { appMode, toggleDemoMode, logout } = useCMS();
  const [activeTab, setActiveTab] = useState<'dashboard' | 'content' | 'albums' | 'settings'>('dashboard');

  // Simple authentication check - in production, this would be more robust
  if (!appMode.isAuthenticated && !appMode.isDemo) {
    return <LoginScreen />;
  }

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart },
    { id: 'content', label: 'Content', icon: Settings },
    { id: 'albums', label: 'Albums', icon: Image },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-neutral-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-neutral-900">Admin Panel</h1>
              {appMode.isDemo && (
                <span className="ml-3 px-3 py-1 text-sm bg-yellow-400 text-black rounded-full">
                  DEMO MODE
                </span>
              )}
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleDemoMode}
                className="flex items-center px-3 py-2 text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                {appMode.isDemo ? <EyeOff size={16} /> : <Eye size={16} />}
                <span className="ml-2">
                  {appMode.isDemo ? 'Exit Demo' : 'Demo Mode'}
                </span>
              </button>
              
              {appMode.isAuthenticated && (
                <button
                  onClick={logout}
                  className="flex items-center px-3 py-2 text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                >
                  <LogOut size={16} />
                  <span className="ml-2">Logout</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <nav className="space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`
                    w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors
                    ${activeTab === tab.id
                      ? 'bg-primary-500 text-white'
                      : 'bg-white text-neutral-700 hover:bg-neutral-50'
                    }
                  `}
                >
                  <tab.icon size={20} className="mr-3" />
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-sm p-6"
            >
              {activeTab === 'dashboard' && <DashboardContent />}
              {activeTab === 'content' && <ContentManagement />}
              {activeTab === 'albums' && <AlbumManagement />}
              {activeTab === 'settings' && <SettingsContent />}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

const LoginScreen: React.FC = () => {
  const { login } = useCMS();

  const handleDemoLogin = () => {
    login({
      id: 'demo',
      email: 'demo@belongingphotovideo.com',
      name: 'Demo User',
      role: 'admin',
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-100">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-neutral-900 mb-2">Admin Login</h1>
          <p className="text-neutral-600">Access the content management system</p>
        </div>

        <div className="space-y-4">
          <button
            onClick={handleDemoLogin}
            className="w-full btn-primary"
          >
            Demo Login
          </button>
          
          <div className="text-center">
            <p className="text-sm text-neutral-500">
              In production, this would integrate with Google OAuth or another authentication provider.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const DashboardContent: React.FC = () => {
  const { albums, weddingAlbums } = useCMS();

  const stats = [
    { label: 'Total Albums', value: albums.length + weddingAlbums.length },
    { label: 'Branding Albums', value: albums.filter(a => a.category === 'branding').length },
    { label: 'Wedding Albums', value: weddingAlbums.length },
    { label: 'Featured Albums', value: albums.filter(a => a.featured).length },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-neutral-900 mb-6">Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-neutral-50 p-6 rounded-lg">
            <h3 className="text-sm font-medium text-neutral-500 mb-2">{stat.label}</h3>
            <p className="text-3xl font-bold text-neutral-900">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="font-semibold text-blue-900 mb-2">Welcome to the Admin Panel</h3>
        <p className="text-blue-800 text-sm">
          This is a demo of the content management system. In production, you would be able to:
        </p>
        <ul className="list-disc list-inside text-blue-800 text-sm mt-2 space-y-1">
          <li>Edit homepage content and hero section</li>
          <li>Manage photo albums and galleries</li>
          <li>Upload and organize images with drag-and-drop</li>
          <li>Update contact information and about content</li>
          <li>Manage SEO settings and meta tags</li>
        </ul>
      </div>
    </div>
  );
};

const ContentManagement: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-neutral-900 mb-6">Content Management</h2>
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <p className="text-yellow-800">
          Content editing interface would be implemented here. This would include:
        </p>
        <ul className="list-disc list-inside text-yellow-800 text-sm mt-2 space-y-1">
          <li>Hero section editor</li>
          <li>About section content</li>
          <li>Contact information</li>
          <li>SEO meta tags</li>
        </ul>
      </div>
    </div>
  );
};

const AlbumManagement: React.FC = () => {
  const { albums, weddingAlbums } = useCMS();

  return (
    <div>
      <h2 className="text-2xl font-bold text-neutral-900 mb-6">Album Management</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-neutral-900 mb-4">Branding Albums ({albums.length})</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {albums.map((album) => (
              <div key={album.id} className="border rounded-lg p-4">
                <img
                  src={album.coverImage}
                  alt={album.title}
                  className="w-full h-32 object-cover rounded mb-3"
                />
                <h4 className="font-medium text-neutral-900">{album.title}</h4>
                <p className="text-sm text-neutral-600 mb-2">{album.images.length} images</p>
                <div className="flex justify-between items-center">
                  <span className={`px-2 py-1 text-xs rounded ${
                    album.featured ? 'bg-green-100 text-green-800' : 'bg-neutral-100 text-neutral-600'
                  }`}>
                    {album.featured ? 'Featured' : 'Standard'}
                  </span>
                  <button className="text-primary-600 hover:text-primary-700 text-sm">
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-neutral-900 mb-4">Wedding Albums ({weddingAlbums.length})</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {weddingAlbums.map((album) => (
              <div key={album.id} className="border rounded-lg p-4">
                <img
                  src={album.coverImage}
                  alt={album.title}
                  className="w-full h-32 object-cover rounded mb-3"
                />
                <h4 className="font-medium text-neutral-900">{album.title}</h4>
                <p className="text-sm text-neutral-600 mb-2">{album.images.length} images</p>
                <button className="text-primary-600 hover:text-primary-700 text-sm">
                  Edit
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const SettingsContent: React.FC = () => {
  const { appMode, toggleDemoMode } = useCMS();

  return (
    <div>
      <h2 className="text-2xl font-bold text-neutral-900 mb-6">Settings</h2>
      
      <div className="space-y-6">
        <div className="border rounded-lg p-6">
          <h3 className="text-lg font-semibold text-neutral-900 mb-4">Application Mode</h3>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-neutral-700">Demo Mode</p>
              <p className="text-sm text-neutral-500">
                {appMode.isDemo 
                  ? 'Currently using demo data. Changes will not be saved.'
                  : 'Using production data. Changes will be saved to localStorage.'
                }
              </p>
            </div>
            <button
              onClick={toggleDemoMode}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                appMode.isDemo
                  ? 'bg-yellow-500 text-white hover:bg-yellow-600'
                  : 'bg-green-500 text-white hover:bg-green-600'
              }`}
            >
              {appMode.isDemo ? 'Exit Demo' : 'Enter Demo'}
            </button>
          </div>
        </div>

        <div className="bg-neutral-50 border rounded-lg p-4">
          <h3 className="font-semibold text-neutral-900 mb-2">Production Features</h3>
          <p className="text-neutral-600 text-sm mb-3">
            In a production environment, this settings panel would include:
          </p>
          <ul className="list-disc list-inside text-neutral-600 text-sm space-y-1">
            <li>Google OAuth configuration</li>
            <li>Image upload settings and cloud storage</li>
            <li>SEO and analytics configuration</li>
            <li>Email notification settings</li>
            <li>Backup and export options</li>
            <li>User management and permissions</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Admin;
