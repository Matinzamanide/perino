import moment from "moment";
import { useEffect, useState } from "react";

const PmsCalender = () => {
    const [startDate, setStartDate] = useState(moment().format("YYYY-MM-DD")); // تاریخ شروع
    const [daysPassed, setDaysPassed] = useState(0); // تعداد روزهای گذشته
    const [isStarted, setIsStarted] = useState(false); // آیا محاسبه شروع شده است؟
    const totalDays = 27; // تعداد کل روزها

    useEffect(() => {
        const savedDate = localStorage.getItem("periodStartDate");
        if (savedDate) {
            setStartDate(savedDate);
            setIsStarted(true);
            calculateProgress(savedDate); // محاسبه درصد بر اساس تاریخ ذخیره‌شده
        }
    }, []);

    const calculateProgress = (date: string) => {
        const start = moment(date); // تاریخ شروع
        const today = moment(); // تاریخ امروز
        const daysPassed = today.diff(start, "days"); // تعداد روزهای گذشته از تاریخ شروع

        if (daysPassed >= 0 && daysPassed <= totalDays) {
            setDaysPassed(daysPassed); // روزهای گذشته تا حد دوره
        } else if (daysPassed > totalDays) {
            setDaysPassed(totalDays); // اگر بیش از دوره باشد
        } else {
            setDaysPassed(0); // اگر تاریخ آینده باشد
        }
    };

    const handleStart = () => {
        setIsStarted(true); // محاسبه شروع می‌شود
        localStorage.setItem("periodStartDate", startDate); // ذخیره تاریخ شروع
        calculateProgress(startDate); // محاسبه درصد
    };

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStartDate(e.target.value); // فقط تغییر تاریخ
    };

    const progress = Math.min((daysPassed / totalDays) * 100, 100);
    return ( 
        <div className="flex flex-col items-center justify-center h-screen bg-pink-50">
            <h1 className="text-3xl font-bold text-pink-700 mb-8">پرینو</h1>

            {/* Knob */}
            <div className="relative w-48 h-48 flex items-center justify-center">
                {/* دایره پس‌زمینه */}
                <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100">
                    <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#f3e8ff"
                        strokeWidth="10"
                    />
                </svg>

                <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100">
                    <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#ec4899"
                        strokeWidth="10"
                        strokeDasharray={251}
                        strokeDashoffset={251 - (progress / 100) * 251}
                        strokeLinecap="round"
                        transform="rotate(-90 50 50)"
                        className="transition-all duration-500 ease-in-out"
                    />
                </svg>

                <div className="absolute text-2xl font-bold text-pink-700">
                    {Math.round(progress)}%
                </div>
            </div>

            <div className="mt-8">
                <label className="block text-pink-700 font-bold mb-2">تاریخ شروع:</label>
                <input
                    type="date"
                    value={startDate}
                    onChange={handleDateChange} // فقط تاریخ را تغییر می‌دهد
                    className="p-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
                <button
                    onClick={handleStart} // فقط با کلیک محاسبه انجام می‌شود
                    className="mt-4 w-full bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600"
                >
                    شروع
                </button>
            </div>

            {isStarted && (
                <div className="mt-4 text-pink-700">
                    <p>تاریخ پایان: {moment(startDate).add(totalDays, "days").format("YYYY-MM-DD")}</p>
                    <p>روزهای گذشته: {daysPassed}</p>
                </div>
            )}
        </div>
     );
}
 
export default PmsCalender;