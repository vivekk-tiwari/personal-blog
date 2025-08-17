import Parser from 'rss-parser';

const parser = new Parser();

/**
 * Fetches and parses posts from a Substack RSS feed
 * @param {string} substackUrl - The Substack RSS feed URL (e.g., https://your-substack.substack.com/feed)
 * @returns {Promise<Array>} Array of posts with { title, link, date, summary }
 */
export async function getSubstackPosts(substackUrl = 'https://vivektiwari1.substack.com/feed') {
  try {
    // Fetch and parse the RSS feed
    const feed = await parser.parseURL(substackUrl);
    
    // Transform the feed items to our desired format
    const posts = feed.items.map(item => ({
      title: item.title || 'Untitled',
      link: item.link || '#',
      date: item.pubDate ? new Date(item.pubDate) : new Date(),
      summary: item.contentSnippet || item.content || 'No summary available'
    }));
    
    // Sort posts by date (newest first)
    posts.sort((a, b) => b.date - a.date);
    
    return posts;
  } catch (error) {
    console.error('Error fetching Substack posts:', error);
    
    // Return empty array on error
    return [];
  }
}

/**
 * Fetches posts from a specific Substack by username
 * @param {string} username - The Substack username
 * @returns {Promise<Array>} Array of posts
 */
export async function getSubstackPostsByUsername(username) {
  const feedUrl = `https://${username}.substack.com/feed`;
  return getSubstackPosts(feedUrl);
}

/**
 * Fetches a limited number of posts from a Substack RSS feed
 * @param {string} substackUrl - The Substack RSS feed URL
 * @param {number} limit - Maximum number of posts to return
 * @returns {Promise<Array>} Array of posts (limited by count)
 */
export async function getSubstackPostsLimited(substackUrl, limit = 10) {
  const posts = await getSubstackPosts(substackUrl);
  return posts.slice(0, limit);
}

/**
 * Fetches posts from a Substack RSS feed with error handling and fallback
 * @param {string} substackUrl - The Substack RSS feed URL
 * @param {Object} options - Options for fetching posts
 * @param {number} options.limit - Maximum number of posts to return
 * @param {boolean} options.includeContent - Whether to include full content
 * @returns {Promise<Array>} Array of posts
 */
export async function getSubstackPostsWithOptions(substackUrl, options = {}) {
  const { limit, includeContent = false } = options;
  
  try {
    const feed = await parser.parseURL(substackUrl);
    
    let posts = feed.items.map(item => ({
      title: item.title || 'Untitled',
      link: item.link || '#',
      date: item.pubDate ? new Date(item.pubDate) : new Date(),
      summary: item.contentSnippet || item.content || 'No summary available',
      ...(includeContent && { content: item.content }),
      author: item.creator || item.author || 'Unknown Author',
      categories: item.categories || []
    }));
    
    // Sort by date (newest first)
    posts.sort((a, b) => b.date - a.date);
    
    // Apply limit if specified
    if (limit && limit > 0) {
      posts = posts.slice(0, limit);
    }
    
    return posts;
  } catch (error) {
    console.error('Error fetching Substack posts with options:', error);
    return [];
  }
}
