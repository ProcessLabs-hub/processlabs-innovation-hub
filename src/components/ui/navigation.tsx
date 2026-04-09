import { Menu } from "lucide-react";
import { Button } from "./button";
import {
  SheetClose,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet";

const Navigation = () => {
  const items = [
    { id: "methodology", label: "Методология" },
    { id: "services", label: "Услуги" },
    { id: "cases", label: "Кейсы" },
    { id: "contact", label: "Контакты" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <img
              src="/brand/logo-horizontal-dark.png"
              alt="ProcessLabs"
              className="h-8 w-auto"
            />
          </div>

          <div className="hidden items-center gap-1 md:flex">
            {items.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                className="text-text-secondary hover:text-primary"
              >
                {item.label}
              </Button>
            ))}
            <Button onClick={() => scrollToSection("contact")}>Обсудить проект</Button>
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu size={22} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <SheetHeader>
                <SheetTitle>Навигация</SheetTitle>
              </SheetHeader>
              <div className="mt-6 flex flex-col gap-2">
                {items.map((item) => (
                  <SheetClose asChild key={item.id}>
                    <Button
                      variant="ghost"
                      onClick={() => scrollToSection(item.id)}
                      className="justify-start"
                    >
                      {item.label}
                    </Button>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Button onClick={() => scrollToSection("contact")} className="mt-2 w-full">
                    Обсудить проект
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
