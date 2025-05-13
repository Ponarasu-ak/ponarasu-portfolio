import { SayHi } from "../../../assets";

interface ContactProps {
  isContactVisible: boolean;
  setIsContactVisible: (visible: boolean) => void;
}

const Contact: React.FC<ContactProps> = ({
  setIsContactVisible,
  isContactVisible,
}) => {
  return (
    <div>
      <div
        className="absolute text-white bottom-10 right-10 cursor-pointer animate-wave"
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
            className="absolute top-4 right-4 text-white text-2xl font-bold hover:text-gray-300 transition duration-200"
            onClick={() => setIsContactVisible(false)}
            aria-label="Close"
          >
            &times;
          </button>
          <div className="flex flex-col max-w-96 border border-white/20 rounded-md p-4 justify-between gap-5 ">
            <div className="text-xl font-medium leading-relaxed">
              Looking to start a new project or just want to say hi?
              Send me an email and I’ll do my best to reply within 24 hrs!
            </div>

            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 rounded-md bg-white/20 backdrop-blur-sm placeholder-white/70 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 rounded-md bg-white/20 backdrop-blur-sm placeholder-white/70 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
              <textarea
                placeholder="Your Message"
                className="p-3 rounded-md bg-white/20 backdrop-blur-sm placeholder-white/70 text-white border border-white/10 h-[120px] resize-none focus:outline-none focus:ring-2 focus:ring-sky-400"
              ></textarea>
              <button
                type="submit"
                className="bg-sky-500 hover:bg-sky-600 transition duration-300 ease-in-out text-white font-semibold py-2 rounded-md shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export { Contact };
