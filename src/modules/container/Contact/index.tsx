import emailjs from "@emailjs/browser";
import { ArrowRight } from "lucide-react";
import { useRef, useState } from "react";
import { SayHi } from "../../../assets";
import { Loader } from "../../../components";
import { useScreenSize } from "../../../hooks";

interface ContactProps {
  isContactVisible: boolean;
  setIsContactVisible: (visible: boolean) => void;
}

type ButtonState = "idle" | "loading" | "success";

const Contact: React.FC<ContactProps> = ({
  setIsContactVisible,
  isContactVisible,
}) => {
  const form = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<{ email: boolean; message: boolean }>({
    email: false,
    message: false,
  });
  const [buttonState, setButtonState] = useState<ButtonState>("idle");
  const { screenWidth } = useScreenSize();

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const email = form.current?.from_email.value.trim();
    const message = form.current?.message.value.trim();

    const newErrors = {
      email: !email,
      message: !message,
    };
    setErrors(newErrors);

    if (newErrors.email || newErrors.message) {
      return;
    }

    setButtonState("loading");

    emailjs
      .sendForm("service_xrcaxaw", "template_19cworn", form.current!, {
        publicKey: "Kk5CcojYnFEeL4sVp",
      })
      .then(
        () => {
          form.current?.reset();
          setButtonState("success");
          setTimeout(() => {
            setIsContactVisible(false);
            setButtonState("idle");
          }, 1500);
        },
        (error: any) => {
          window.alert("Failed to send message. Please try again.");
          setButtonState("idle");
          console.log("FAILED...", error?.text || error);
        }
      );
  };

  const handleInputFocus = () => {
    setButtonState("idle");
  };

  return (
    <>
      {!isContactVisible && (
        <div
          className="absolute text-white bottom-6 right-4 lg:bottom-10 lg:right-10 cursor-pointer animate-wave"
          onClick={() => setIsContactVisible(true)}
        >
          <SayHi height={30} width={25} fillColour="#fff" />
        </div>
      )}

      <style>{`
        @keyframes wave {
          0% { transform: rotate(0deg);}
          25% { transform: rotate(10deg);}
          50% { transform: rotate(0deg);}
          75% { transform: rotate(-10deg);}
          100% { transform: rotate(0deg);}
        }
        .animate-wave {
          animation: wave 0.6s ease-in-out infinite;
        }
      `}</style>

      {/* Desktop View */}
      {screenWidth > 768 && isContactVisible && (
        <div className="fixed inset-0  backdrop-blur-xs">
          <div className="absolute bottom-16 right-4 lg:bottom-16 lg:right-10  max-w-[325px] border border-white/20 backdrop-blur-md text-white rounded-md p-4 flex flex-col gap-4 bg-[linear-gradient(to_bottom_right,_#0f172a,_#000)]">
            <div className="flex justify-between items-center">
              <a
                href="https://cal.com/ponarasu-schedule-a-call"
                target="_blank"
                rel="noopener noreferrer"
                className="group text-md font-medium flex gap-2 items-center cursor-pointer"
              >
                <div className="text-sky-500 text-sm font-semibold">
                  Schedule a Call
                </div>
                <ArrowRight height={16} width={16} className="text-sky-500" />
              </a>
              <div>
                <button
                  className="text-gray-400 text-2xl pb-1 cursor-pointer hover:text-white"
                  onClick={() => setIsContactVisible(false)}
                  aria-label="Close"
                >
                  &times;
                </button>
              </div>
            </div>

            <div className="text-sm font-medium leading-relaxed">
              Have a project in mind? Drop me a message. I’ll get back to you
              within 24 hrs!
            </div>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-4"
              autoComplete="off"
            >
              <input
                name="from_email"
                type="email"
                placeholder="Your Email"
                className={`p-2 rounded-md text-sm bg-white/25 backdrop-blur-sm placeholder-white/70 text-white border ${
                  errors.email
                    ? "border-red-400 focus:ring-red-400"
                    : "border-white/10 focus:ring-sky-400"
                } focus:outline-none focus:ring-1`}
                onChange={() =>
                  setErrors((prev) => ({ ...prev, email: false }))
                }
                onFocus={handleInputFocus}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                className={`p-2 rounded-md text-sm bg-white/25 backdrop-blur-sm placeholder-white/70 text-white border ${
                  errors.message
                    ? "border-red-400 focus:ring-red-400"
                    : "border-white/10 focus:ring-sky-400"
                } h-[120px] lg:h-[160px] resize-none focus:outline-none focus:ring-1`}
                onChange={() =>
                  setErrors((prev) => ({ ...prev, message: false }))
                }
                onFocus={handleInputFocus}
              ></textarea>
              <button
                type="submit"
                className="bg-sky-500 cursor-pointer text-sm transition duration-300 ease-in-out text-white font-medium py-3 rounded-md shadow-md"
                disabled={buttonState === "loading"}
              >
                <div className="flex items-center text-sm gap-4 justify-center">
                  {buttonState === "idle" && "Send Message"}
                  {buttonState === "loading" && <Loader />}
                  {buttonState === "success" && "Sent successfully!"}
                </div>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Mobile View */}
      {screenWidth <= 768 && isContactVisible && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-50 px-4">
          <div className="flex flex-col max-w-96 border border-white/20 rounded-md p-6 justify-between gap-5 bg-[linear-gradient(to_bottom_right,_#0f172a,_#000)] text-white">
            <div className="flex justify-between items-center">
              <a
                href="https://cal.com/ponarasu-schedule-a-call"
                target="_blank"
                rel="noopener noreferrer"
                className="group text-md font-medium flex gap-2 items-center cursor-pointer"
              >
                <div className="text-sky-500">Schedule a Call</div>
                <ArrowRight height={16} width={16} className="text-sky-500" />
              </a>
              <button
                className="cursor-pointer text-gray-400 hover:text-white text-2xl font-bold pb-1 hover:text-gray-300 transition duration-200"
                onClick={() => setIsContactVisible(false)}
                aria-label="Close"
              >
                &times;
              </button>
            </div>

            <div className="text-md font-medium leading-relaxed">
              Have a project in mind? Drop me a message. I’ll get back to you
              within 24 hrs!
            </div>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-4"
              autoComplete="off"
            >
              <input
                name="from_email"
                type="email"
                placeholder="Your Email"
                className={`p-3 rounded-md bg-white/25 backdrop-blur-sm placeholder-white/70 text-white border ${
                  errors.email
                    ? "border-red-400 focus:ring-red-400"
                    : "border-white/10 focus:ring-sky-400"
                } focus:outline-none focus:ring-1`}
                onChange={() =>
                  setErrors((prev) => ({ ...prev, email: false }))
                }
                onFocus={handleInputFocus}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                className={`p-3 rounded-md bg-white/25 backdrop-blur-sm placeholder-white/70 text-white border ${
                  errors.message
                    ? "border-red-400 focus:ring-red-400"
                    : "border-white/10 focus:ring-sky-400"
                } h-[120px] lg:h-[200px] resize-none focus:outline-none focus:ring-1`}
                onChange={() =>
                  setErrors((prev) => ({ ...prev, message: false }))
                }
                onFocus={handleInputFocus}
              ></textarea>
              <button
                type="submit"
                className="bg-sky-500 cursor-pointer transition duration-300 ease-in-out text-white font-medium py-3 rounded-md shadow-md"
                disabled={buttonState === "loading"}
              >
                <div className="flex items-center gap-4 justify-center">
                  {buttonState === "idle" && "Send Message"}
                  {buttonState === "loading" && <Loader />}
                  {buttonState === "success" && "Sent successfully!"}
                </div>
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export { Contact };
