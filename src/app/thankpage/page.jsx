"use client";

import { useEffect } from "react";
import ThankYouModal from "@/components/contact/ThankYouModal";

const ThankPage = () => {
  useEffect(() => {
    // Prevent scrolling
    document.body.style.overflow = "hidden";
    return () => {
      // Restore scroll when component unmounts
      document.body.style.overflow = "";
    };
  }, []);

  return <ThankYouModal />;
};

export default ThankPage;
