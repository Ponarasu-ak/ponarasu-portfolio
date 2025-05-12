import { Share2 } from "lucide-react";
import React, { useState } from "react";

const InsightsCard: React.FC = () => {
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);

  interface Blog {
    id: number;
    title: string;
    excerpt: string;
    content: string;
    image: string;
    date: string;
    readTime: string;
  }

  const blogs: Blog[] = [
    {
      id: 1,
      title: "The Future of React Development",
      excerpt: "Exploring the latest features and best practices in React 18",
      content:
        "React 18 introduces groundbreaking features that revolutionize how we build modern web applications. From automatic batching to concurrent rendering, these improvements significantly enhance application performance and developer experience. The new suspense features and transition APIs provide better ways to handle loading states and updates, while the new hooks offer more powerful ways to manage state and side effects.",
      image:
        "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      date: "Mar 15, 2024",
      readTime: "5 min",
    },
    {
      id: 2,
      title: "Mastering TypeScript in 2024",
      excerpt: "Essential TypeScript features for modern development",
      content:
        "TypeScript continues to evolve with powerful features that make JavaScript development more robust and maintainable. This comprehensive guide explores advanced type systems, utility types, and best practices that every developer should know. Learn how to leverage TypeScript's type inference, generics, and decorators to write more reliable code.",
      image:
        "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      date: "Mar 10, 2024",
      readTime: "4 min",
    },
  ];

  const handleShare = async (blog: Blog) => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: blog.title,
          text: blog.excerpt,
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard!");
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-md  border border-white/20 shadow-xl hover:shadow-blue-500/20 transition-all duration-300 h-full">
      {/* <div className="p-5 border-b border-white/20">
        <h3 className="text-xl font-medium text-white">Latest Insights</h3>
      </div> */}

      <div className="p-4 grid grid-cols-1 gap-4 h-full overflow-y-auto">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="group bg-white/5 rounded-lg border border-white/10 overflow-hidden hover:bg-blue-500/10 hover:border-blue-400/30 transition-all duration-300 cursor-pointer flex"
            onClick={() => setSelectedBlog(blog)}
          >
            <div className="w-1/3 aspect-[4/3] overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="w-2/3 p-4 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start gap-2">
                  <h5 className="font-medium text-white group-hover:text-blue-300 transition-colors line-clamp-2">
                    {blog.title}
                  </h5>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleShare(blog);
                    }}
                    className="p-2 rounded-full hover:bg-white/10 text-white/70 hover:text-blue-400 transition-all flex-shrink-0"
                  >
                    <Share2 size={16} />
                  </button>
                </div>
                <p className="text-white/70 text-sm mt-2 line-clamp-2">
                  {blog.excerpt}
                </p>
              </div>
              <div className="flex justify-between items-center text-xs text-white/50 mt-3">
                <span>{blog.date}</span>
                <span>{blog.readTime} read</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <BlogModal
        blog={selectedBlog}
        onClose={() => setSelectedBlog(null)}
        onShare={handleShare}
      /> */}
    </div>
  );
};

export { InsightsCard };

