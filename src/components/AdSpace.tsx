interface AdSpaceProps {
  size?: "banner" | "square" | "leaderboard";
  className?: string;
}

const AdSpace = ({ size = "banner", className = "" }: AdSpaceProps) => {
  const sizeClasses = {
    banner: "h-[250px]",
    square: "h-[250px] md:w-[250px]",
    leaderboard: "h-[90px]",
  };

  return (
    <div className={`bg-muted/30 border border-dashed border-muted-foreground/30 rounded-lg flex items-center justify-center ${sizeClasses[size]} ${className}`}>
      <div className="text-center text-muted-foreground">
        <p className="text-sm font-medium">Advertisement</p>
        <p className="text-xs mt-1">Google AdSense</p>
      </div>
    </div>
  );
};

export default AdSpace;
