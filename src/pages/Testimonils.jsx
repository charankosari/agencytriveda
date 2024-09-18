import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Testimonials() {
    const [reviews, setReviews] = useState([]); 
    const [currentReview, setCurrentReview] = useState(0);
    const [transition, setTransition] = useState('opacity-0');

    useEffect(() => {
        async function getData() {
            try {
                const apiUrl = import.meta.env.VITE_API_URL;
                const res = await axios.get(`${apiUrl}/api/website/testimonials/getTestimonials`);
                setReviews(res.data); 
            } catch (error) {
                console.log(error);
            }
        }

        getData();
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTransition('opacity-0');
            setTimeout(() => {
                setCurrentReview((prev) => (prev + 1) % reviews.length); 
                setTransition('opacity-100');
            }, 500);
        }, 3000);

        return () => clearInterval(intervalId);
    }, [reviews.length]);

    return (
        <div className='md:px-[2rem] mt-12'>
            <h1 className='font-bold text-center font-sora text-xl md:text-2xl lg:text-3xl mb-8'>
                Hear from Our Clients
            </h1>
            <section className="bg-light rounded-md">
                <div className="w-full px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                    {reviews.length > 0 && ( 
                        <figure className="max-w-screen-md mx-auto">
                            <svg
                                className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                                viewBox="0 0 24 27"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                                    fill="currentColor"
                                />
                            </svg>
                            <blockquote className={`transition-opacity duration-500 ${transition}`}>
                                <p className="text-2xl font-medium text-gray-900 dark:text-white">
                                    {reviews[currentReview].feedback} {/* Use the fetched feedback */}
                                </p>
                            </blockquote>
                            <figcaption className="flex items-center justify-center mt-6 space-x-3">
                                <img
                                    className="w-6 h-6 rounded-full"
                                    src={reviews[currentReview].clientProfile} // Use the fetched profile image
                                    alt="profile picture"
                                />
                                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                    <div className="pr-3 font-medium text-gray-900 dark:text-white">
                                        {reviews[currentReview].clientName} {/* Use the fetched client name */}
                                    </div>
                                    <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                                        {reviews[currentReview].clientCompanyName} {/* Use the fetched company name */}
                                    </div>
                                </div>
                            </figcaption>
                        </figure>
                    )}
                </div>
            </section>
        </div>
    );
}
