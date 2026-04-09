import SectionHeader from "../shared/SectionHeader";
import SectionShell from "../shared/SectionShell";
import { Badge } from "../ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { implementedProjects } from "@/content/landing";

const CasesSection = () => {
  return (
    <SectionShell id="cases" sectionClassName="bg-background">
      <SectionHeader
        badge="Портфолио"
        title="Реализованные проекты"
        description="Подборка систем, которые мы спроектировали и внедрили в продуктовых и операционных контурах."
      />

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
        {implementedProjects.map((project) => (
          <Card key={project.name} className="h-full border-border/70 shadow-lab-sm">
            <CardHeader>
              <div className="mb-3 flex flex-wrap gap-2">
                <Badge variant="secondary">{project.domain}</Badge>
              </div>
              <CardTitle className="text-2xl text-primary">{project.name}</CardTitle>
              <CardDescription className="text-base leading-relaxed text-text-secondary">
                {project.summary}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              <div>
                <p className="mb-2 text-sm font-semibold text-text-primary">Ключевые элементы</p>
                <ul className="space-y-2">
                  {project.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm text-text-secondary">
                      <span className="mr-2 mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-2 text-sm font-semibold text-text-primary">Стек</p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
};

export default CasesSection;
