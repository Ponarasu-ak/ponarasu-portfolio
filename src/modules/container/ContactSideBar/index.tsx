const ContactSideBar = ({
  isVisible,
  onclose,
}: {
  isVisible: boolean;
  onclose: (value: boolean) => void;
}) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-[400px] bg-transparent transform transition-transform duration-300 p-4 ${
        isVisible ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="h-full w-full bg-white/15 backdrop-blur-3xl border border-white/20 text-white shadow-2xl  p-6">
        <div className="text-end">
          <button
            onClick={() => onclose(false)}
            className="text-gray-400 hover:text-white transition duration-200 cursor-pointer font-semibold"
          >
            ✕
          </button>
        </div>

        <div className="flex flex-col justify-between gap-10 mt-4">
          <div className="text-lg font-medium leading-relaxed">
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

          <div className="text-sm text-white/80">
            Prefer to email directly? Reach me at:
            <br />
            <a
              href="mailto:ponarasu.ak@gmail.com"
              className="text-sky-300 font-medium hover:underline"
            >
              ponarasu.ak@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ContactSideBar };
