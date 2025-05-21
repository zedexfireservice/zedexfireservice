"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; 
import dynamic from 'next/dynamic';

// Disable SSR for Confetti
const Confetti = dynamic(() => import('react-confetti'), {
  ssr: false,
  loading: () => null
});

export default function ThankYouPage() {
  const router = useRouter();

  const [countdown, setCountdown] = useState(5);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  // Set window size once on mount and on resize
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const updateSize = () => {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });
      };
      updateSize(); // set initial size
      window.addEventListener('resize', updateSize);
      return () => window.removeEventListener('resize', updateSize);
    }
  }, []);

  // Countdown timer + redirect + gtag conversion trigger
  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);

    const timeout = setTimeout(() => {
      router.push('/');
    }, 5000);

    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: 'AW-16532850100/t4DICJmHm6cZELSLvcs9',
      });
    }

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 flex flex-col items-center justify-center p-4">
      <Confetti
        width={windowSize.width}
        height={windowSize.height}
        recycle={false}
        numberOfPieces={500}
        gravity={0.2}
      />
      <div className="text-center">
        <div className="flex justify-center items-center mb-5">
          <img
            src="https://res.cloudinary.com/dgx5cntyb/image/upload/v1747476068/Zedex_Fire_Logo_2025_PNG_New_1_1_ec1hlx.webp"
            alt="Zedex Logo"
            className="h-14 object-contain"
          />
        </div>
        <h1 className="text-4xl font-bold text-purple-700 mb-4">
          Congratulations! 🎉
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Your submission was successful. Redirecting in {countdown} seconds...
        </p>
        <div className="animate-pulse text-blue-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
