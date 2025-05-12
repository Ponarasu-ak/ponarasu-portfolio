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
        className="absolute text-white bottom-10 right-10 cursor-pointer   "
        onClick={() => setIsContactVisible(!isContactVisible)}
      >
        <SayHi height={30} width={25} fillColour="#fff" />
      </div>
      {isContactVisible && (
        <div className="absolute right-10 bottom-20  bg-white/5 backdrop-blur-3xl border border-white/20 text-white p-5 ">
          <div className="flex flex-col justify-between gap-5 w-3xs">
            <div className="text-md font-medium leading-relaxed">
              Looking to start a new project or just want to say hi? <br />
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
