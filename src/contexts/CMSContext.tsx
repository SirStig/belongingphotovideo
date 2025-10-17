import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Album, CMSContent, AppMode, User } from '../types/index.js';
import { demoAlbums, demoWeddingAlbums, demoCMSContent } from '../data/demoData';

interface CMSContextType {
  // Content
  albums: Album[];
  weddingAlbums: Album[];
  cmsContent: CMSContent;
  
  // App state
  appMode: AppMode;
  
  // Actions
  updateAlbum: (albumId: string, updates: Partial<Album>) => void;
  addAlbum: (album: Omit<Album, 'id' | 'createdAt' | 'updatedAt'>) => void;
  deleteAlbum: (albumId: string) => void;
  updateCMSContent: (section: keyof CMSContent, updates: any) => void;
  
  // Auth actions
  login: (user: User) => void;
  logout: () => void;
  toggleDemoMode: () => void;
}

const CMSContext = createContext<CMSContextType | undefined>(undefined);

export const useCMS = () => {
  const context = useContext(CMSContext);
  if (!context) {
    throw new Error('useCMS must be used within a CMSProvider');
  }
  return context;
};

interface CMSProviderProps {
  children: React.ReactNode;
}

export const CMSProvider: React.FC<CMSProviderProps> = ({ children }) => {
  // Initialize with demo data
  const [albums, setAlbums] = useState<Album[]>(demoAlbums);
  const [weddingAlbums, setWeddingAlbums] = useState<Album[]>(demoWeddingAlbums);
  const [cmsContent, setCMSContent] = useState<CMSContent>(demoCMSContent);
  const [appMode, setAppMode] = useState<AppMode>({
    isDemo: true,
    isAuthenticated: false,
  });

  // Load data from localStorage on mount
  useEffect(() => {
    const savedMode = localStorage.getItem('belongingpv_mode');
    const savedAlbums = localStorage.getItem('belongingpv_albums');
    const savedWeddingAlbums = localStorage.getItem('belongingpv_wedding_albums');
    const savedContent = localStorage.getItem('belongingpv_content');
    const savedUser = localStorage.getItem('belongingpv_user');

    if (savedMode) {
      const mode = JSON.parse(savedMode);
      setAppMode(mode);
    }

    if (savedAlbums && !appMode.isDemo) {
      setAlbums(JSON.parse(savedAlbums));
    }

    if (savedWeddingAlbums && !appMode.isDemo) {
      setWeddingAlbums(JSON.parse(savedWeddingAlbums));
    }

    if (savedContent && !appMode.isDemo) {
      setCMSContent(JSON.parse(savedContent));
    }

    if (savedUser && !appMode.isDemo) {
      const user = JSON.parse(savedUser);
      setAppMode(prev => ({ ...prev, user, isAuthenticated: true }));
    }
  }, []);

  // Save data to localStorage when it changes (only in production mode)
  useEffect(() => {
    if (!appMode.isDemo) {
      localStorage.setItem('belongingpv_albums', JSON.stringify(albums));
      localStorage.setItem('belongingpv_wedding_albums', JSON.stringify(weddingAlbums));
      localStorage.setItem('belongingpv_content', JSON.stringify(cmsContent));
    }
  }, [albums, weddingAlbums, cmsContent, appMode.isDemo]);

  const updateAlbum = (albumId: string, updates: Partial<Album>) => {
    const updateAlbumList = (albumList: Album[]) =>
      albumList.map(album =>
        album.id === albumId
          ? { ...album, ...updates, updatedAt: new Date().toISOString() }
          : album
      );

    setAlbums(prev => updateAlbumList(prev));
    setWeddingAlbums(prev => updateAlbumList(prev));
  };

  const addAlbum = (albumData: Omit<Album, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newAlbum: Album = {
      ...albumData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    if (albumData.category === 'wedding') {
      setWeddingAlbums(prev => [newAlbum, ...prev]);
    } else {
      setAlbums(prev => [newAlbum, ...prev]);
    }
  };

  const deleteAlbum = (albumId: string) => {
    setAlbums(prev => prev.filter(album => album.id !== albumId));
    setWeddingAlbums(prev => prev.filter(album => album.id !== albumId));
  };

  const updateCMSContent = (section: keyof CMSContent, updates: any) => {
    setCMSContent(prev => ({
      ...prev,
      [section]: { ...prev[section], ...updates },
    }));
  };

  const login = (user: User) => {
    setAppMode(prev => ({
      ...prev,
      user,
      isAuthenticated: true,
    }));
    localStorage.setItem('belongingpv_user', JSON.stringify(user));
  };

  const logout = () => {
    setAppMode(prev => ({
      ...prev,
      user: undefined,
      isAuthenticated: false,
    }));
    localStorage.removeItem('belongingpv_user');
  };

  const toggleDemoMode = () => {
    setAppMode(prev => {
      const newMode = { ...prev, isDemo: !prev.isDemo };
      localStorage.setItem('belongingpv_mode', JSON.stringify(newMode));
      
      if (newMode.isDemo) {
        // Reset to demo data
        setAlbums(demoAlbums);
        setWeddingAlbums(demoWeddingAlbums);
        setCMSContent(demoCMSContent);
      }
      
      return newMode;
    });
  };

  const value: CMSContextType = {
    albums,
    weddingAlbums,
    cmsContent,
    appMode,
    updateAlbum,
    addAlbum,
    deleteAlbum,
    updateCMSContent,
    login,
    logout,
    toggleDemoMode,
  };

  return <CMSContext.Provider value={value}>{children}</CMSContext.Provider>;
};
