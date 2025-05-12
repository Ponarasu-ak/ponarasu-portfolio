import React from "react";
import { X, Share2 } from "lucide-react";

interface Blog {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  readTime: string;
}

interface BlogModalProps {
  blog: Blog | null;
  onClose: () => void;
  onShare: (blog: Blog) => void;
}

const BlogModal: React.FC<BlogModalProps> = ({ blog, onClose, onShare }) => {
  if (!blog) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="w-full max-w-3xl max-h-[90vh] bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-xl border border-white/20 shadow-2xl overflow-hidden animate-scaleUp">
        <div className="flex justify-between items-center p-4 border-b border-white/20">
          <h2 className="text-xl font-semibold text-white">{blog.title}</h2>
          <div className="flex items-center gap-2">
            <button
              onClick={() => onShare(blog)}
              className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/70 hover:text-blue-400"
            >
              <Share2 size={20} />
            </button>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <X size={20} className="text-white" />
            </button>
          </div>
        </div>

        <div className="overflow-y-auto max-h-[calc(90vh-60px)]">
          <div className="aspect-video">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-6">
            <div className="flex justify-between items-center text-sm text-white/50 mb-4">
              <span>{blog.date}</span>
              <span>{blog.readTime} read</span>
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-white/80 leading-relaxed whitespace-pre-line">
                {blog.content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { BlogModal };
