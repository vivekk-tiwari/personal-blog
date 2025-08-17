import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Hi, I'm Vivek.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600">
            Welcome to my personal website.
          </p>
        </div>

        {/* Subscription Form */}
        <div className="w-full max-w-md">
          <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Stay Connected
            </h2>
            <p className="text-gray-600 mb-6">
              Subscribe to my newsletter for the latest insights and updates.
            </p>
            
            <form action="https://vivektiwari1.substack.com/subscribe" method="post" target="_blank" className="flex flex-col gap-3">
              <input 
                type="email" 
                name="email" 
                placeholder="Enter your email" 
                required 
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200" 
              />
              <button 
                type="submit" 
                className="w-full bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
            
            <p className="text-xs text-gray-500 mt-3 text-center">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
