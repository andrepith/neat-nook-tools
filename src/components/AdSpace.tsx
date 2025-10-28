interface AdSpaceProps {
  size?: "banner" | "square" | "leaderboard" | "medium-rectangle";
  label?: string;
  className?: string;
}

const AdSpace = ({ size = "banner", label, className = "" }: AdSpaceProps) => {
  const sizeConfig = {
    banner: { height: "h-[250px]", label: "Advertisement 300x250" },
    square: { height: "h-[250px] md:w-[250px]", label: "Advertisement 250x250" },
    leaderboard: { height: "h-[90px]", label: "Ad Banner 728x90" },
    "medium-rectangle": { height: "h-[250px]", label: "Ad Banner 300x250" },
  };

  const config = sizeConfig[size];

  return (
    <div className={`bg-muted/30 border border-dashed border-muted-foreground/30 rounded-lg flex items-center justify-center ${config.height} ${className}`}>
      <div className="text-center text-muted-foreground">
        <p className="text-sm font-medium">{label || config.label}</p>
        <p className="text-xs mt-1 opacity-70">Google AdSense</p>
      </div>
    </div>
  );
};

export default AdSpace;
