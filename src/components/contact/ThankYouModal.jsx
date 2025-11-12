import routes from "@/helper/routes";
import Link from "next/link";

const ThankYouModal = () => {
  return (
    <div className="relative bg-black flex flex-col items-center min-h-screen gap-8 justify-center z-50">
      <div className="bg-gradient-to-t h-[300px] from-[#001000] to-transparent  absolute  bottom-0 left-0 w-full z-10"></div>
      <div className="text-center flex flex-col items-center">
        <h1 className=" mb-4">Thank you for submitting the form!</h1>
        <p>The team will get in touch shortly.</p>
      </div>

      <Link
        className=" font-medium text-sm gradient-btn px-6 py-3 rounded-lg event-nav-request-demo bg-[#4262FF]"
        href={routes.home}
      >
       <p className=""> Go Back to Home</p>
      </Link>
     
    </div>
  );
};

export default ThankYouModal;
