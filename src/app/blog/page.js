import { getSubstackPosts } from '../../lib/substack';

export default async function Blog() {
  // Fetch posts from Substack
  const posts = await getSubstackPosts();
  
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center">
          Blog
        </h1>
        
        {posts.length > 0 ? (
          <div className="space-y-8">
            {posts.map((post, index) => (
              <article key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  <a 
                    href={post.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition-colors duration-200"
                  >
                    {post.title}
                  </a>
                </h2>
                
                <div className="text-gray-500 text-sm mb-4">
                  {post.date.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
                
                <p className="text-gray-600 leading-relaxed">
                  {post.summary}
                </p>
                
                <div className="mt-4">
                  <a 
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                  >
                    Read Full Post
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No posts found</h3>
            <p className="text-gray-500">
              There are no blog posts available at the moment. Check back soon!
            </p>
          </div>
        )}

        {/* Subscription Form */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Subscribe to my newsletter to get the latest posts and insights delivered directly to your inbox.
            </p>
            
            <form action="https://vivektiwari1.substack.com/subscribe" method="post" target="_blank" className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-md mx-auto">
              <input 
                type="email" 
                name="email" 
                placeholder="Enter your email" 
                required 
                className="flex-1 w-full sm:w-auto border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200" 
              />
              <button 
                type="submit" 
                className="w-full sm:w-auto bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
            
            <p className="text-xs text-gray-500 mt-3">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
