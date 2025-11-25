export type PostCategory = 'academic' | 'social' | 'housing' | 'forSale';

export interface Post {
  id: string;
  title: string;
  content: string;
  author: string;
  date: Date;
  category: PostCategory;
}

export interface CalendarEvent {
  id: string;
  date: Date;
  title: string;
  type: 'social' | 'academic' | 'campus';
}

export type View = 'board' | 'calendar';

// Fix: Add Course interface
export interface Course {
  id: string;
  title: string;
  code: string;
  progress: number;
  imageUrl: string;
}

// Fix: Add Grade interface
export interface Grade {
  id: string;
  course: string;
  assignment: string;
  score: number;
  total: number;
}
