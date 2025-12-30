interface TechBadgeProps {
  name: string;
  color?: string;
}

const TechBadge = ({ name, color = "primary" }: TechBadgeProps) => {
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-secondary border border-border text-sm text-secondary-foreground">
      <span 
        className="w-2 h-2 rounded-full" 
        style={{ backgroundColor: color === "primary" ? "hsl(var(--primary))" : color }}
      />
      {name}
    </span>
  );
};

export default TechBadge;
