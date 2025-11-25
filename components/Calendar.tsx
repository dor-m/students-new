import React from 'react';
import { CALENDAR_EVENTS } from '../constants';
import type { CalendarEvent } from '../types';

const Calendar: React.FC = () => {
    const today = new Date();
    const [currentDate, setCurrentDate] = React.useState(new Date(today.getFullYear(), today.getMonth(), 1));

    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

    const blanks = Array(firstDayOfMonth).fill(null);
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    const getEventsForDay = (day: number): CalendarEvent[] => {
        return CALENDAR_EVENTS.filter(event => 
            event.date.getFullYear() === currentDate.getFullYear() &&
            event.date.getMonth() === currentDate.getMonth() &&
            event.date.getDate() === day
        );
    };

    const getEventTypeColor = (type: CalendarEvent['type']) => {
        switch(type) {
            case 'social': return 'bg-purple-100 text-purple-800';
            case 'academic': return 'bg-blue-100 text-blue-800';
            case 'campus': return 'bg-green-100 text-green-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };
    
    const changeMonth = (offset: number) => {
        setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() + offset, 1));
    };

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-6">לוח אירועים</h1>
            <div className="bg-white shadow-md rounded-lg p-4 sm:p-6">
                <div className="flex items-center justify-between mb-4">
                    <button onClick={() => changeMonth(-1)} className="p-2 rounded-full hover:bg-gray-100">&lt;</button>
                    <h2 className="text-xl font-semibold">
                        {currentDate.toLocaleString('he-IL', { month: 'long', year: 'numeric' })}
                    </h2>
                    <button onClick={() => changeMonth(1)} className="p-2 rounded-full hover:bg-gray-100">&gt;</button>
                </div>
                <div className="grid grid-cols-7 gap-1 text-center font-medium text-gray-500 text-sm">
                    <div>א'</div><div>ב'</div><div>ג'</div><div>ד'</div><div>ה'</div><div>ו'</div><div>ש'</div>
                </div>
                <div className="grid grid-cols-7 gap-1 mt-2">
                    {blanks.map((_, index) => <div key={`blank-${index}`} className="h-24 sm:h-32 border-t border-r border-gray-100"></div>)}
                    {days.map(day => {
                        const isToday = day === today.getDate() && currentDate.getMonth() === today.getMonth() && currentDate.getFullYear() === today.getFullYear();
                        const events = getEventsForDay(day);
                        return (
                            <div key={day} className="h-24 sm:h-32 p-1.5 border-t border-r border-gray-100 overflow-hidden relative flex flex-col">
                                <span className={`text-xs font-semibold ${isToday ? 'bg-blue-500 text-white rounded-full h-6 w-6 flex items-center justify-center' : ''}`}>{day}</span>
                                <div className="mt-1 flex-grow overflow-y-auto">
                                    {events.map(event => (
                                        <div key={event.id} className={`text-[10px] sm:text-xs p-1 rounded-md mb-1 truncate ${getEventTypeColor(event.type)}`}>
                                            {event.title}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Calendar;
