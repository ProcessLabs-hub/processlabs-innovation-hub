import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionShellProps {
  id?: string;
  sectionClassName?: string;
  containerClassName?: string;
  children: ReactNode;
}

const SectionShell = ({
  id,
  sectionClassName,
  containerClassName,
  children,
}: SectionShellProps) => {
  return (
    <section id={id} className={cn("py-20", sectionClassName)}>
      <div className={cn("container mx-auto px-4", containerClassName)}>{children}</div>
    </section>
  );
};

export default SectionShell;
