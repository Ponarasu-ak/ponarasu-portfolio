
const Modal = ({ isOpen, onClose }: { isOpen: boolean; onClose: any }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-white/5 backdrop-blur-2xl flex items-center justify-center">
            <div className="bg-white/15 border border-white/10 text-white shadow-2xl p-6 rounded-lg relative">
                <button
                    className="absolute top-2 right-2 text-white"
                    onClick={onClose}
                >
                    ✕
                </button>
                <div>Modal Content</div>
            </div>
        </div>
    );
};

export { Modal };

