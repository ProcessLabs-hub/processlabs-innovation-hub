import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import SectionHeader from "../shared/SectionHeader";
import { faqs } from "@/content/landing";

const FAQSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-gradient-lab">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="FAQ"
          title="Часто задаваемые вопросы"
          description="Ответы на основные вопросы о нашем исследовательском подходе"
        />

        <Card className="mx-auto max-w-4xl shadow-lab-md">
          <CardContent className="p-2 sm:p-4">
            <Accordion type="single" collapsible defaultValue="item-0">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="px-4">
                  <AccordionTrigger className="text-left text-base text-primary hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed text-text-secondary">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        <div className="mt-16 text-center">
          <Card className="mx-auto max-w-2xl">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">
                Не нашли ответ?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-text-secondary">
                Напишите нам, и мы разберем ваш запрос на консультации.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2">
                <Badge variant="outline">30 минут консультации</Badge>
                <Badge variant="outline">Анализ возможностей</Badge>
                <Badge variant="outline">Без обязательств</Badge>
              </div>
              <Button onClick={scrollToContact}>Задать вопрос</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
