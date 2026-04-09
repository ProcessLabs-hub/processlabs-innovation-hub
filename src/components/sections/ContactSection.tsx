import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import { Textarea } from "../ui/textarea";
import { Mail, Phone, Linkedin, Send, CheckCircle } from "lucide-react";
import { useToast } from "../../hooks/use-toast";
import SectionHeader from "../shared/SectionHeader";
import SectionShell from "../shared/SectionShell";
import {
  contactBenefits,
  contactProcessSteps,
  contactResponseTimes,
} from "@/content/landing";

const contactFormSchema = z.object({
  name: z.string().min(2, "Введите имя"),
  company: z.string().min(2, "Введите название компании"),
  email: z.string().email("Введите корректный email"),
  phone: z.string().optional(),
  description: z.string().min(10, "Опишите задачу подробнее"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const defaultValues: ContactFormValues = {
  name: "",
  company: "",
  email: "",
  phone: "",
  description: "",
};

const ContactSection = () => {
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues,
  });

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в течение 24 часов для обсуждения исследования.",
    });
    form.reset(defaultValues);
  };

  return (
    <SectionShell id="contact" sectionClassName="bg-background">
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
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Имя *</FormLabel>
                          <FormControl>
                            <Input {...field} className="border-2 border-border focus:border-accent" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Компания *</FormLabel>
                          <FormControl>
                            <Input {...field} className="border-2 border-border focus:border-accent" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email *</FormLabel>
                          <FormControl>
                            <Input type="email" {...field} className="border-2 border-border focus:border-accent" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Телефон</FormLabel>
                          <FormControl>
                            <Input type="tel" {...field} className="border-2 border-border focus:border-accent" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Опишите ваши процессы *</FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            rows={4}
                            placeholder="Расскажите о процессах, которые хотите автоматизировать, текущих проблемах и ожидаемых результатах..."
                            className="resize-none border-2 border-border focus:border-accent"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    disabled={form.formState.isSubmitting}
                    className="w-full py-3 text-base disabled:opacity-50"
                  >
                    {form.formState.isSubmitting ? (
                      <div className="flex items-center space-x-2">
                        <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white"></div>
                        <span>Отправляем...</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <Send className="h-5 w-5" />
                        <span>Заказать исследование</span>
                      </div>
                    )}
                  </Button>
                </form>
              </Form>

              <Separator className="my-8" />
              <div>
                <h3 className="mb-4 text-lg font-semibold text-primary">Контактная информация</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-accent" />
                    <span className="text-text-secondary">research@processlabs.ru</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-accent" />
                    <span className="text-text-secondary">+7 (XXX) XXX-XX-XX</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Linkedin className="h-5 w-5 text-accent" />
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
                {contactProcessSteps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">{step.title}</p>
                      <p className="text-white/80 text-sm">{step.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Что вы получите</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {contactBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div
                        className={`h-2 w-2 rounded-full ${index % 2 === 0 ? "bg-accent" : "bg-primary"}`}
                      ></div>
                      <span className="text-sm text-text-secondary">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-lab">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Сроки ответа</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {contactResponseTimes.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-text-secondary">{item.label}</span>
                    <span className="font-semibold text-primary">{item.value}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
    </SectionShell>
  );
};

export default ContactSection;
