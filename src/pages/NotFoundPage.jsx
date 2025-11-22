import { Link } from "react-router-dom";
import { Search } from "lucide-react";

const NotFoundPage = () => {
    return (
        <div className="w-full min-h-screen flex items-center justify-center bg-gray-50 px-6">
            <div className="text-center">

                {/* Icon */}
                <div className="flex justify-center mb-6">
                    <Search size={60} strokeWidth={1.5} className="text-gray-700" />
                </div>

                {/* 404 Heading */}
                <h1 className="text-6xl font-extrabold text-(--accent-color)">404</h1>

                {/* Message */}
                <h2 className="mt-4 text-2xl font-semibold text-gray-800">
                    Page Not Found
                </h2>

                <p className="mt-2 text-gray-600 max-w-md mx-auto">
                    The page you are looking for doesn’t exist or has been moved.
                </p>

                {/* CTA Button */}
                <Link
                    to="/"
                    className="inline-block mt-8 bg-black text-white px-6 py-3 uppercase font-semibold tracking-wide"
                >
                    Go Back Home
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;