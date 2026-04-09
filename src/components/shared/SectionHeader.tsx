import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  description: string;
  badge?: string;
  className?: string;
}

const SectionHeader = ({ title, description, badge, className }: SectionHeaderProps) => {
  return (
    <div className={cn("mb-16 text-center", className)}>
      {badge ? (
        <Badge variant="secondary" className="mb-4">
          {badge}
        </Badge>
      ) : null}
      <h2 className="mb-6 text-4xl font-bold text-primary md:text-5xl">{title}</h2>
      <p className="mx-auto max-w-3xl text-xl text-text-secondary">{description}</p>
    </div>
  );
};

export default SectionHeader;
