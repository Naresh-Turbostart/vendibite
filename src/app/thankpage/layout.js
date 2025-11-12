export const metadata = {
  title: "Thank You",
  description: "Thank you for contacting us.",
};

export default function ThankPageLayout({ children }) {
  return (
    <div className="min-h-screen bg-black text-white">
      {children}
    </div>
  );
}
