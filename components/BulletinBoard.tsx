import React from 'react';
import { POSTS } from '../constants';
import PostCard from './PostCard';
import type { PostCategory } from '../types';

interface BulletinBoardProps {
  category: PostCategory | 'all';
}

const CATEGORY_TITLES: { [key in PostCategory | 'all']: string } = {
  all: 'כל המודעות',
  academic: 'אקדמי',
  social: 'חברתי',
  housing: 'דיור',
  forSale: 'למכירה',
};

const BulletinBoard: React.FC<BulletinBoardProps> = ({ category }) => {
  const filteredPosts = POSTS
    .filter(post => category === 'all' || post.category === category)
    .sort((a, b) => b.date.getTime() - a.date.getTime());

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">{CATEGORY_TITLES[category]}</h1>
        <p className="mt-1 text-md text-gray-600">מצא/י את כל העדכונים החשובים וההזדמנויות בקמפוס.</p>
      </div>

      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-medium text-gray-700">אין מודעות להצגה</h3>
            <p className="text-gray-500 mt-2">לא נמצאו מודעות בקטגוריה זו כרגע.</p>
        </div>
      )}
    </div>
  );
};

export default BulletinBoard;
