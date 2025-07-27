interface PageNumberProps {
  pageNumber: string;
  position?: "bottom-right" | "bottom-left" | "top-left" | "top-right";
}

const PageNumber: React.FC<PageNumberProps> = ({
  pageNumber,
  position = "bottom-right",
}) => {
  const positionClasses = {
    "bottom-right": "bottom-4 md:bottom-8 right-4 md:right-8 pb-safe pr-safe",
    "bottom-left": "bottom-4 md:bottom-8 left-4 md:left-8 pb-safe pl-safe",
    "top-left": "top-4 md:top-8 left-4 md:left-8 pt-safe pl-safe",
    "top-right": "top-4 md:top-8 right-4 md:right-8 pt-safe pr-safe",
  };

  return (
    <div
      className={`absolute ${positionClasses[position]} text-white/40 text-sm tracking-wider z-20`}
    >
      <span className="block text-xs">PAGE</span>
      <span className="text-xl md:text-2xl font-bold">{pageNumber}</span>
    </div>
  );
};

export default PageNumber;
