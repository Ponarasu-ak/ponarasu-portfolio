import { CircleAlert, CircleCheck, CircleX, X } from "lucide-react";
import React, { useEffect } from "react";

interface ToastProps {
    variant?: "success" | "error" | "warning";
    text?: string;
    onClose?: () => void;
}

const variantStyles = {
    success: "border-sky-500 bg-sky-500/90",
    warning: "border-orange-500 bg-orange-500/40",
    error: "border-red-500 bg-red-500/40",
};

const variantIcons = {
    success: <CircleCheck  />,
    warning: <CircleAlert  />,
    error: <CircleX  />,
};

const Toast: React.FC<ToastProps> = ({
    variant = "success",
    text = "Message sent!",
    onClose,
}) => {
    useEffect(() => {
        if (!onClose) return;
        const timer = setTimeout(() => {
            onClose();
        }, 5000);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col gap-3 z-50">
            <div
                className={`flex items-start justify-between rounded-xl min-w-3xs gap-6 px-2 py-3 border ${variantStyles[variant]}`}
            >
                <div className="flex gap-2 items-center">
                    {variantIcons[variant]}
                    <div>{text}</div>
                </div>
                <X className="cursor-pointer"  onClick={onClose} />
            </div>
        </div>
    );
};

export { Toast };
