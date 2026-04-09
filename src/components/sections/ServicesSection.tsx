import { Users, Brain, Settings, Search } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import SectionHeader from "../shared/SectionHeader";
import { services } from "@/content/landing";

const ServicesSection = () => {
  const serviceIcons = {
    users: Users,
    brain: Brain,
    settings: Settings,
    search: Search,
  } as const;

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-lab">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Направления"
          title="Лаборатории ProcessLabs"
          description="Четыре направления исследований для полной автоматизации бизнеса"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = serviceIcons[service.icon];
            return (
              <Card
                key={index}
                className="group flex h-full flex-col border-border/70 shadow-lab-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lab-md"
              >
                <CardHeader className="items-center text-center">
                  <div className={`w-16 h-16 ${service.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-8 h-8 ${service.iconColor}`} />
                  </div>
                  <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                  <CardDescription className="text-text-secondary leading-relaxed">
                    {service.subtitle}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1 space-y-4">
                  <Badge variant="outline" className="text-xs text-text-secondary">
                    {service.price}
                  </Badge>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-text-secondary text-sm flex items-start">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button
                    onClick={scrollToContact}
                    variant="outline"
                    className="w-full"
                  >
                    Обсудить задачу
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Card className="mx-auto max-w-2xl">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">
                Нужно индивидуальное решение?
              </CardTitle>
              <CardDescription className="text-base text-text-secondary">
                Проработаем архитектуру и план внедрения под вашу операционную модель.
              </CardDescription>
            </CardHeader>
            <CardFooter className="justify-center">
              <Button onClick={scrollToContact} size="lg">
                Обсудить проект
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
