import emailjs from "@emailjs/browser";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { SayHi } from "../../../assets";

interface ContactProps {
  isContactVisible: boolean;
  setIsContactVisible: (visible: boolean) => void;
}

const Contact: React.FC<ContactProps> = ({
  setIsContactVisible,
  isContactVisible,
}) => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();
    const email = form.current?.from_email.value.trim();
    const message = form.current?.message.value.trim();

    if (!email || !message) {
      window.alert("Please fill in both email and message.");
      return;
    }

    emailjs
      .sendForm("service_xrcaxaw", "template_19cworn", form.current!, {
        publicKey: "Kk5CcojYnFEeL4sVp",
      })
      .then(
        () => {
          window.alert("Message sent successfully!");
          form.current?.reset();
        },
        (error: any) => {
          window.alert("Failed to send message. Please try again.");
          console.log("FAILED...", error?.text || error);
        }
      );
  };

  return (
    <div>
      <div
        className="absolute text-white bottom-2 right-2 lg:bottom-10 lg:right-10 cursor-pointer animate-wave"
        onClick={() => setIsContactVisible(!isContactVisible)}
      >
        <SayHi height={30} width={25} fillColour="#fff" />
      </div>

      <style>{`
        @keyframes wave {
          0% {
        transform: rotate(0deg);
          }
          25% {
        transform: rotate(10deg);
          }
          50% {
        transform: rotate(0deg);
          }
          75% {
        transform: rotate(-10deg);
          }
          100% {
        transform: rotate(0deg);
          }
        }

        .animate-wave {
          animation: wave 0.6s ease-in-out infinite;
        }
      `}</style>
      {isContactVisible && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-lg flex items-center justify-center z-50 px-4">
          <button
            className="absolute cursor-pointer top-4 right-4 text-white text-2xl font-bold hover:text-gray-300 transition duration-200"
            onClick={() => setIsContactVisible(false)}
            aria-label="Close"
          >
            &times;
          </button>

          <div className="flex flex-col max-w-96 border border-white/20 rounded-md p-6 justify-between gap-5 ">
            <div className="flex justify-end items-center">
              <div>
                <a
                  href="https://cal.com/ponarasu-schedule-a-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group text-md font-medium flex gap-2 items-center cursor-pointer"
                >
                  <div className="text-sky-500 ">Schedule a Call</div>
                  <ArrowRight
                    height={16}
                    width={16}
                    className=" text-sky-500 "
                  />
                </a>
              </div>
            </div>
            <div className="text-md font-medium leading-relaxed">
              Have a project in mind , Drop me an email I’ll get back to you
              within 24 hours!
            </div>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-4"
            >
              <input
                autoComplete="off"
                name="from_email"
                type="email"
                placeholder="Your Email"
                className="p-3 rounded-md bg-white/20 backdrop-blur-sm placeholder-white/70 text-white border border-white/10 focus:outline-none focus:ring-1 focus:ring-sky-400"
              />
              <textarea
                autoComplete="off"
                name="message"
                placeholder="Your Message"
                className="p-3 rounded-md bg-white/20 backdrop-blur-sm placeholder-white/70 text-white border border-white/10 h-[200px] resize-none focus:outline-none focus:ring-1 focus:ring-sky-400"
              ></textarea>
              <button
                type="submit"
                className="bg-sky-500 cursor-pointer transition duration-300 ease-in-out text-white font-medium py-3 rounded-md shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>
      {/* <Toast /> */}

        </div>
      )}
    </div>
  );
};

export { Contact };

