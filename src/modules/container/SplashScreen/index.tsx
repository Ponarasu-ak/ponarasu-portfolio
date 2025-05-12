import { SiteIconWithText } from "../../../assets";

const SplashScreen = () => {
  return (
    <div className="absolute z-50 h-screen w-screen flex justify-center items-center bg-gradient-to-br from-black via-gray-900 to-blue-900">
      <div className="animate-pulse">
        <SiteIconWithText height={120} width={120} fillColour="white" />
      </div>
    </div>
  );
};

export { SplashScreen };
