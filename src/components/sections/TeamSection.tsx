import { Users } from "lucide-react";
import SectionHeader from "../shared/SectionHeader";
import SectionShell from "../shared/SectionShell";
import {
  teamMetrics,
  teamPhilosophy,
  teamScientificApproach,
} from "@/content/landing";
import { teamMetricIconMap } from "@/content/icon-map";

const TeamSection = () => {
  return (
    <SectionShell sectionClassName="bg-gradient-lab">
        <SectionHeader
          title="Команда исследователей"
          description="Эксперты в области AI/ML и промышленной автоматизации"
        />

        {/* Main Team Member */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl shadow-lab-lg p-8 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              {/* Avatar Placeholder */}
              <div className="lg:col-span-1">
                <div className="w-48 h-48 bg-gradient-hero rounded-2xl mx-auto flex items-center justify-center">
                  <Users className="w-24 h-24 text-white" />
                </div>
              </div>

              {/* Info */}
              <div className="lg:col-span-2">
                <h3 className="text-3xl font-bold text-primary mb-2">Роман Галеев</h3>
                <p className="text-xl text-accent font-semibold mb-6">
                  Главный исследователь и основатель
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {teamMetrics.map((metric, index) => {
                    const IconComponent = teamMetricIconMap[metric.icon];
                    return (
                      <div key={index} className="flex items-start space-x-3">
                        <IconComponent
                          className={`mt-1 h-5 w-5 flex-shrink-0 ${
                            metric.color === "accent" ? "text-accent" : "text-primary"
                          }`}
                        />
                        <div>
                          <p className="font-semibold text-text-primary">{metric.title}</p>
                          <p className="text-text-secondary text-sm">{metric.subtitle}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Research Philosophy */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card rounded-xl shadow-lab-md p-6">
              <h4 className="text-xl font-bold text-primary mb-4">{teamPhilosophy.title}</h4>
              <p className="text-text-secondary leading-relaxed">"{teamPhilosophy.text}"</p>
            </div>
            
            <div className="bg-card rounded-xl shadow-lab-md p-6">
              <h4 className="text-xl font-bold text-primary mb-4">{teamScientificApproach.title}</h4>
              <p className="text-text-secondary leading-relaxed">"{teamScientificApproach.text}"</p>
            </div>
          </div>

          {/* Expanding Team Notice */}
          <div className="mt-12 bg-gradient-accent rounded-2xl p-8 text-center">
            <h4 className="text-2xl font-bold text-accent-foreground mb-4">
              Команда растет
            </h4>
            <p className="text-accent-foreground/80 text-lg">
              Мы активно привлекаем ведущих исследователей и AI-инженеров 
              для расширения наших лабораторий
            </p>
          </div>
        </div>
    </SectionShell>
  );
};

export default TeamSection;
