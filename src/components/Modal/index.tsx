import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { ProfileContent } from '../../modules';
import { ProjectsContent } from '../../modules/container/ProjectsContent';


type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  content: 'profile' | 'projects';
};

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, content }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    const handleOutsideClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('mousedown', handleOutsideClick);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleOutsideClick);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div 
        ref={modalRef}
        className="w-full max-w-4xl max-h-[90vh] bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-xl border border-white/20 shadow-2xl overflow-hidden animate-scaleUp"
      >
        <div className="flex justify-between items-center p-4 border-b border-white/20">
          <h2 className="text-xl font-semibold text-white">
            {content === 'profile' ? 'About Ponarasu' : 'My Projects'}
          </h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <X size={20} className="text-white" />
          </button>
        </div>
        
        <div className="overflow-y-auto max-h-[calc(90vh-60px)]">
          {content === 'profile' ? <ProfileContent /> : <ProjectsContent />}
        </div>
      </div>
    </div>
  );
};