import React from 'react';
import type { Post, PostCategory } from '../types';

interface PostCardProps {
  post: Post;
}

const CATEGORY_STYLES: { [key in PostCategory]: { bg: string; text: string; label: string } } = {
  academic: { bg: 'bg-blue-100', text: 'text-blue-800', label: 'אקדמי' },
  social: { bg: 'bg-purple-100', text: 'text-purple-800', label: 'חברתי' },
  housing: { bg: 'bg-green-100', text: 'text-green-800', label: 'דיור' },
  forSale: { bg: 'bg-yellow-100', text: 'text-yellow-800', label: 'למכירה' },
};

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const { bg, text, label } = CATEGORY_STYLES[post.category];
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col transform hover:-translate-y-1 transition-all duration-300">
      <div className="p-5 flex-grow">
        <div className="flex justify-between items-start">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{post.title}</h3>
            <span className={`px-2 py-1 text-xs font-semibold rounded-full ${bg} ${text}`}>{label}</span>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
            {post.content}
        </p>
      </div>
      <div className="px-5 py-3 bg-gray-50 border-t border-gray-200 text-xs text-gray-500 flex justify-between items-center">
        <span>{post.author}</span>
        <span>{post.date.toLocaleDateString('he-IL')}</span>
      </div>
    </div>
  );
};

export default PostCard;
