import { useState } from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";
import { Textarea } from "../ui/textarea";
import { Mail, Phone, Linkedin, Send, CheckCircle } from "lucide-react";
import { useToast } from "../../hooks/use-toast";
import SectionHeader from "../shared/SectionHeader";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    description: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Заявка отправлена!",
        description: "Мы свяжемся с вами в течение 24 часов для обсуждения исследования.",
      });
      setIsSubmitting(false);
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        description: ""
      });
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Контакты"
          title="Обсудим ваш проект"
          description="Опишите задачу. Мы предложим формат исследования и следующий шаг."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="shadow-lab-md">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Отправить запрос</CardTitle>
              <CardDescription>
                Ответим в рабочее время и согласуем удобный формат разговора.
              </CardDescription>
            </CardHeader>
            <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="mb-2 block text-text-primary">
                    Имя *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="border-2 border-border focus:border-accent"
                  />
                </div>
                <div>
                  <Label htmlFor="company" className="mb-2 block text-text-primary">
                    Компания *
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    className="border-2 border-border focus:border-accent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email" className="mb-2 block text-text-primary">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="border-2 border-border focus:border-accent"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="mb-2 block text-text-primary">
                    Телефон
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="border-2 border-border focus:border-accent"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="description" className="mb-2 block text-text-primary">
                  Опишите ваши процессы *
                </Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  placeholder="Расскажите о процессах, которые хотите автоматизировать, текущих проблемах и ожидаемых результатах..."
                  className="border-2 border-border focus:border-accent resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full text-base py-3 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Отправляем...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Send className="w-5 h-5" />
                    <span>Заказать исследование</span>
                  </div>
                )}
              </Button>
            </form>

            <Separator className="my-8" />
            <div>
              <h3 className="text-lg font-semibold text-primary mb-4">Контактная информация</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-accent" />
                  <span className="text-text-secondary">research@processlabs.ru</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-accent" />
                  <span className="text-text-secondary">+7 (XXX) XXX-XX-XX</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Linkedin className="w-5 h-5 text-accent" />
                  <span className="text-text-secondary">/company/processlabs</span>
                </div>
              </div>
            </div>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="bg-gradient-hero text-white border-none">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Процесс исследования</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Анализ заявки</p>
                    <p className="text-white/80 text-sm">Изучение ваших процессов и задач</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Консультация</p>
                    <p className="text-white/80 text-sm">30-минутная встреча для обсуждения деталей</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Предложение</p>
                    <p className="text-white/80 text-sm">Техническое задание и план исследования</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Исследование</p>
                    <p className="text-white/80 text-sm">Разработка и тестирование решения</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Что вы получите</CardTitle>
              </CardHeader>
              <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-text-secondary text-sm">Бесплатная консультация</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-text-secondary text-sm">Анализ процессов</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-text-secondary text-sm">ROI расчеты</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-text-secondary text-sm">Техническое решение</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-text-secondary text-sm">Готовый продукт</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-text-secondary text-sm">6 месяцев поддержки</span>
                </div>
              </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-lab">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Сроки ответа</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-text-secondary">Первичный ответ</span>
                  <span className="font-semibold text-primary">2 часа</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-text-secondary">Консультация</span>
                  <span className="font-semibold text-primary">24 часа</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-text-secondary">Техническое предложение</span>
                  <span className="font-semibold text-primary">3-5 дней</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
