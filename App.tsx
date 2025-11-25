import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import BulletinBoard from './components/BulletinBoard';
import Calendar from './components/Calendar';
import type { View, PostCategory } from './types';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<View>('board');
  const [activeCategory, setActiveCategory] = useState<PostCategory | 'all'>('all');

  const handleViewChange = (view: View, category?: PostCategory | 'all') => {
    setActiveView(view);
    if (category) {
      setActiveCategory(category);
    }
  };

  const renderContent = () => {
    switch (activeView) {
      case 'calendar':
        return <Calendar />;
      case 'board':
      default:
        return <BulletinBoard category={activeCategory} />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 text-gray-800">
      <Sidebar activeView={activeView} setActiveView={handleViewChange} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-4 sm:p-6 lg:p-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default App;
