// Fix: Import Course and Grade types
import type { Post, CalendarEvent, Course, Grade } from './types';

export const POSTS: Post[] = [
  { id: 'p1', title: 'מלגת הצטיינות חדשה נפתחה', content: 'סטודנטים מצטיינים שנה ב\' ומעלה מוזמנים להגיש מועמדות למלגת רקטור. פרטים נוספים באתר המלגות של האוניברסיטה.', author: 'מדור שכר לימוד', date: new Date('2024-07-20'), category: 'academic' },
  { id: 'p2', title: 'מסיבת פתיחת השנה של אגודת הסטודנטים', content: 'בואו לחגוג איתנו את פתיחת שנת הלימודים במסיבה מטורפת ברחבת הדשא המרכזית! בירות, מוזיקה והמון הפתעות. יום חמישי, 20:00.', author: 'אגודת הסטודנטים', date: new Date('2024-07-22'), category: 'social' },
  { id: 'p3', title: 'שותף/ה לדירת 3 חדרים ליד הקמפוס', content: 'מחפש/ת שותף/ה לדירה מרווחת ונעימה, 5 דקות הליכה מהקמפוס. כניסה מיידית. לפרטים: 052-1234567', author: 'דניאל לוי', date: new Date('2024-07-21'), category: 'housing' },
  { id: 'p4', title: 'למכירה: מיקרוגל במצב מצוין', content: 'מוכר מיקרוגל של LG, היה בשימוש פחות משנה. עובד מעולה. מחיר גמיש. איסוף מהמעונות.', author: 'מאיה כהן', date: new Date('2024-07-19'), category: 'forSale' },
  { id: 'p5', title: 'דרושים חונכים לפרויקט פר"ח', content: 'רוצים לעשות שינוי? פרויקט פר"ח מחפש חונכים לשנה הקרובה. מלגה משתלמת מובטחת. ההרשמה בעיצומה.', author: 'רכזת פר"ח', date: new Date('2024-07-18'), category: 'academic' },
  { id: 'p6', title: 'ערב סרט והרצאה: "חינוך ודמוקרטיה"', content: 'החוג לחינוך מזמין להקרנת הסרט ולאחריו דיון פתוח עם הבמאי. יום שני בבניין 502, כיתה 14.', author: 'החוג לחינוך', date: new Date('2024-07-23'), category: 'social' },
  { id: 'p7', title: 'ספר לימוד "מבוא לסטטיסטיקה" יד שנייה', content: 'מוכר את ספר הקורס של פרופ\' ישראלי במחיר מוזל. הספר במצב חדש, ללא סימונים.', author: 'יונתן שדה', date: new Date('2024-07-20'), category: 'forSale' },
  { id: 'p8', title: 'חדר להשכרה בדירה שקטה', content: 'חדר מרוהט קומפלט בדירת שותפים שקטה ונקייה. קרוב לקו אוטובוס ישיר לאוניברסיטה. מתאים לסטודנטים לתארים מתקדמים.', author: 'שירה אביב', date: new Date('2024-07-22'), category: 'housing' },
];

const today = new Date();
export const CALENDAR_EVENTS: CalendarEvent[] = [
  { id: 'e1', date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 2), title: 'הפנינג פתיחת שנה', type: 'social' },
  { id: 'e2', date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 5), title: 'יום אחרון לרישום לקורסים', type: 'academic' },
  { id: 'e3', date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7), title: 'סדנת כתיבת קורות חיים', type: 'campus' },
  { id: 'e4', date: new Date(today.getFullYear(), today.getMonth(), 15), title: 'טורניר כדורסל סטודנטים', type: 'social' },
  { id: 'e5', date: new Date(today.getFullYear(), today.getMonth(), 22), title: 'יריד תעסוקה', type: 'campus' },
];

// Fix: Add COURSES constant
export const COURSES: Course[] = [
  { id: 'c1', title: 'מבוא למדעי המחשב', code: '67101', progress: 85, imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60' },
  { id: 'c2', title: 'אלגברה לינארית 1', code: '80134', progress: 70, imageUrl: 'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60' },
  { id: 'c3', title: 'חדו"א 1', code: '80171', progress: 92, imageUrl: 'https://images.unsplash.com/photo-1534665482403-a909d0d97c67?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60' },
  { id: 'c4', title: 'מבוא לפסיכולוגיה', code: '71101', progress: 60, imageUrl: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60' },
];

// Fix: Add GRADES constant
export const GRADES: Grade[] = [
  { id: 'g1', course: 'מבוא למדעי המחשב', assignment: 'תרגיל 1', score: 95, total: 100 },
  { id: 'g2', course: 'מבוא למדעי המחשב', assignment: 'תרגיל 2', score: 88, total: 100 },
  { id: 'g3', course: 'אלגברה לינארית 1', assignment: 'בוחן אמצע', score: 72, total: 100 },
  { id: 'g4', course: 'חדו"א 1', assignment: 'מבחן מועד א\'', score: 91, total: 100 },
  { id: 'g5', course: 'חדו"א 1', assignment: 'תרגיל בית 5', score: 100, total: 100 },
  { id: 'g6', course: 'אלגברה לינארית 1', assignment: 'תרגיל 3', score: 85, total: 100 },
];
