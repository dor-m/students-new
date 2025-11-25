import React from 'react';
import { COURSES, CALENDAR_EVENTS } from '../constants';
import CourseCard from './CourseCard';

const DeadlineIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-red-500" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.414-1.414L11 10.586V6z" clipRule="evenodd" />
    </svg>
);


const Dashboard: React.FC = () => {
    const recentCourses = COURSES.slice(0, 3);
    const upcomingEvents = CALENDAR_EVENTS.filter(event => event.date >= new Date()).slice(0, 4);

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-gray-900">ברוך שובך, יוסי!</h1>
                <p className="mt-1 text-md text-gray-600">הנה סקירה מהירה של החיים האקדמיים שלך.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">קורסים אחרונים</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {recentCourses.map(course => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">הגשות קרובות</h2>
                <ul className="space-y-3">
                    {upcomingEvents.length > 0 ? (
                        upcomingEvents.map(event => (
                            <li key={event.id} className="flex items-center p-3 bg-gray-50 rounded-md">
                               <DeadlineIcon />
                                <span className="font-medium text-gray-700">{event.title}</span>
                                <span className="mr-auto text-sm text-gray-500">
                                    {event.date.toLocaleDateString('he-IL', { month: 'short', day: 'numeric' })}
                                </span>
                            </li>
                        ))
                    ) : (
                        <p className="text-gray-500">אין הגשות קרובות. כל הכבוד!</p>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;