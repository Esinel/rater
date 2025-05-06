import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100">
      <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl flex flex-col items-center gap-6 max-w-md w-full mx-4">
        <div className="relative">
          <CheckCircle className="w-20 h-20 text-green-500" />
        </div>

        <h1 className="text-3xl font-bold text-center">
          Thank you for your review!
        </h1>

        <div className="flex items-center gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <div
              key={star}
              className={`text-yellow-400 ${
                star === 3 ? "w-8 h-8" : "w-6 h-6"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </div>
          ))}
        </div>

        <Link
          href="/"
          className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
