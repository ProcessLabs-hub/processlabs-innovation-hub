export type ServiceIconKey = "users" | "brain" | "settings" | "search";

export interface ServiceItem {
  icon: ServiceIconKey;
  title: string;
  subtitle: string;
  features: string[];
  price: string;
  iconBg: string;
  iconColor: string;
}

export const services: ServiceItem[] = [
  {
    icon: "users",
    title: "HR Intelligence Lab",
    subtitle: "Создаем AI для умного найма",
    features: ["AI-скрининг кандидатов", "Аналитика HR-процессов", "Системы адаптации"],
    price: "От 500,000 ₽",
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
  },
  {
    icon: "brain",
    title: "AI Process Research",
    subtitle: "Разрабатываем custom ИИ-решения",
    features: ["Telegram-боты с GPT/Claude", "Анализ аудио/видео/текста", "Векторные базы знаний"],
    price: "От 400,000 ₽",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: "settings",
    title: "Automation Architecture",
    subtitle: "Проектируем архитектуру автоматизации",
    features: ["Enterprise интеграции", "n8n автоматизация", "API разработка"],
    price: "От 300,000 ₽",
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
  },
  {
    icon: "search",
    title: "Process Discovery",
    subtitle: "Находим точки оптимизации",
    features: ["Аудит процессов", "ROI-расчеты", "Roadmap цифровизации"],
    price: "От 200,000 ₽",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    question: "В чем отличие от обычного агентства?",
    answer:
      "Мы не используем готовые решения. Каждый проект — это исследование с созданием уникального решения под ваши задачи. Применяем научные методы: формулируем гипотезы, проводим эксперименты, тестируем результаты.",
  },
  {
    question: "Сколько времени занимает исследование?",
    answer:
      "От 2 до 6 месяцев в зависимости от сложности. Мы работаем итерациями с промежуточными результатами каждые 2-3 недели. Вы видите прогресс на каждом этапе и можете корректировать направление исследования.",
  },
  {
    question: "Какие гарантии результата?",
    answer:
      "Мы гарантируем измеримый ROI от внедрения. Все решения тестируются на реальных данных с применением A/B тестирования. Если KPI не достигнуты — дорабатываем бесплатно или возвращаем деньги.",
  },
  {
    question: "Работаете ли с малым бизнесом?",
    answer:
      "Мы фокусируемся на средних и крупных компаниях от 100 сотрудников с бюджетом от 200,000 ₽. Для малого бизнеса исследовательский подход может быть избыточным — рекомендуем готовые решения.",
  },
  {
    question: "Предоставляете ли техподдержку?",
    answer:
      "Да, включаем 6 месяцев поддержки и обучения команды клиента. Также предоставляем полную документацию, техническое описание и возможность самостоятельного развития решения.",
  },
  {
    question: "Можете ли интегрироваться с нашими системами?",
    answer:
      "Да, мы специализируемся на enterprise интеграциях. Работаем с любыми API, базами данных и legacy системами. Создаем решения, которые легко встраиваются в существующую IT-архитектуру.",
  },
  {
    question: "Что происходит с интеллектуальной собственностью?",
    answer:
      "Весь код и алгоритмы передаются заказчику. Мы подписываем NDA и гарантируем конфиденциальность. Исключительные права на разработанное решение принадлежат вам.",
  },
];

export type CaseResultIconKey = "trendingUp" | "clock" | "dollarSign" | "target";

export interface CaseResultItem {
  metric: string;
  change: string;
  icon: CaseResultIconKey;
  color: string;
}

export interface CaseItem {
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: CaseResultItem[];
  description: string;
}

export const cases: CaseItem[] = [
  {
    company: "Крупная строительная компания",
    industry: "Строительство инженерной инфраструктуры",
    challenge: "Автоматизация подбора персонала",
    solution: "AI-система полного цикла HR",
    results: [
      { metric: "Время подбора", change: "↓ 60%", icon: "clock", color: "text-red-500" },
      { metric: "Качество кандидатов", change: "↑ 40%", icon: "target", color: "text-green-500" },
      { metric: "Затраты на HR", change: "↓ 35%", icon: "dollarSign", color: "text-red-500" },
    ],
    description:
      "Внедрили комплексную AI-систему для автоматизации процесса найма: от анализа резюме до предсказания успешности кандидата в компании.",
  },
  {
    company: "Компания по производству светопрозрачных конструкций",
    industry: "Производство и промышленность",
    challenge: "Анализ звонков продаж",
    solution: "TranskriBot с NLP",
    results: [
      { metric: "Конверсия звонков", change: "↑ 25%", icon: "trendingUp", color: "text-green-500" },
      { metric: "Время анализа", change: "↓ 90%", icon: "clock", color: "text-red-500" },
      { metric: "Точность прогнозов", change: "↑ 80%", icon: "target", color: "text-green-500" },
    ],
    description:
      "Разработали AI-бота для автоматической транскрипции и анализа продажных звонков с выявлением ключевых метрик и рекомендаций.",
  },
];

export type MethodologyIconKey = "search" | "palette" | "code" | "rocket" | "barChart3";

export interface MethodologyStep {
  title: string;
  description: string[];
  icon: MethodologyIconKey;
  color: "accent" | "primary";
}

export const methodologySteps: MethodologyStep[] = [
  {
    title: "Исследование",
    description: ["Анализ процессов", "Сбор данных", "Выявление паттернов"],
    icon: "search",
    color: "accent",
  },
  {
    title: "Проектирование",
    description: ["Архитектура решения", "Выбор технологий", "UX проектирование"],
    icon: "palette",
    color: "primary",
  },
  {
    title: "Разработка",
    description: ["MVP разработка", "Тестирование гипотез", "AI/ML обучение"],
    icon: "code",
    color: "accent",
  },
  {
    title: "Внедрение",
    description: ["Миграция процессов", "Обучение команды", "Настройка мониторинга"],
    icon: "rocket",
    color: "primary",
  },
  {
    title: "Оптимизация",
    description: ["Анализ метрик", "A/B тестирование", "Масштабирование"],
    icon: "barChart3",
    color: "accent",
  },
];

export type TechnologyIconKey = "database" | "bot" | "cloud" | "barChart3" | "brain" | "cpu";

export interface TechnologyItem {
  name: string;
  category: string;
  icon: TechnologyIconKey;
}

export const technologies: TechnologyItem[] = [
  { name: "Python", category: "Backend", icon: "cpu" },
  { name: "OpenAI/Claude", category: "AI", icon: "brain" },
  { name: "amoCRM", category: "CRM", icon: "database" },
  { name: "n8n", category: "Automation", icon: "bot" },
  { name: "PostgreSQL", category: "Database", icon: "database" },
  { name: "Telegram API", category: "Integration", icon: "bot" },
  { name: "React/Next.js", category: "Frontend", icon: "cpu" },
  { name: "Docker", category: "DevOps", icon: "cloud" },
  { name: "AWS", category: "Cloud", icon: "cloud" },
  { name: "Metabase", category: "Analytics", icon: "barChart3" },
  { name: "Qdrant", category: "Vector DB", icon: "database" },
  { name: "Vector DB", category: "AI/ML", icon: "brain" },
];

export interface TeamMetricItem {
  title: string;
  subtitle: string;
  icon: "award" | "code" | "zap" | "users";
  color: "accent" | "primary";
}

export const teamMetrics: TeamMetricItem[] = [
  { title: "10+ лет R&D", subtitle: "в автоматизации", icon: "award", color: "accent" },
  { title: "Эксперт AI/ML", subtitle: "интеграций", icon: "code", color: "primary" },
  { title: "20+ решений", subtitle: "внедрено", icon: "zap", color: "accent" },
  { title: "Специализация", subtitle: "промышленная автоматизация", icon: "users", color: "primary" },
];

export const teamPhilosophy = {
  title: "Философия исследований",
  text: "Каждая задача автоматизации уникальна. Мы не адаптируем готовые решения — создаем новые с нуля, основываясь на глубоком понимании бизнес-процессов.",
};

export const teamScientificApproach = {
  title: "Научный подход",
  text: "Применяем методы научного исследования: гипотезы, эксперименты, статистическая значимость результатов и peer-review каждого решения.",
};

export const heroContent = {
  eyebrow: "Product & Automation Studio",
  title: "Продукты, которые работают, а не просто выглядят",
  description:
    "ProcessLabs проектирует и внедряет цифровые системы, внутренние инструменты и автоматизацию для реальных операционных задач.",
  primaryCta: "Обсудить проект",
  secondaryCta: "Посмотреть методологию",
};

export interface ContactProcessStep {
  title: string;
  description: string;
}

export const contactProcessSteps: ContactProcessStep[] = [
  { title: "Анализ заявки", description: "Изучение ваших процессов и задач" },
  { title: "Консультация", description: "30-минутная встреча для обсуждения деталей" },
  { title: "Предложение", description: "Техническое задание и план исследования" },
  { title: "Исследование", description: "Разработка и тестирование решения" },
];

export const contactBenefits: string[] = [
  "Бесплатная консультация",
  "Анализ процессов",
  "ROI расчеты",
  "Техническое решение",
  "Готовый продукт",
  "6 месяцев поддержки",
];

export interface ContactResponseTime {
  label: string;
  value: string;
}

export const contactResponseTimes: ContactResponseTime[] = [
  { label: "Первичный ответ", value: "2 часа" },
  { label: "Консультация", value: "24 часа" },
  { label: "Техническое предложение", value: "3-5 дней" },
];

export interface ImplementedProject {
  name: string;
  domain: string;
  summary: string;
  stack: string[];
  highlights: string[];
}

export const implementedProjects: ImplementedProject[] = [
  {
    name: "ProcessMeter",
    domain: "HR / Process Analytics",
    summary:
      "Система хронометража и оценки трудозатрат сотрудников по бизнес-процессам с встроенной аналитикой и эталонными справочниками.",
    stack: ["Node.js", "Fastify", "PostgreSQL", "React", "shadcn/ui"],
    highlights: [
      "JWT-авторизация и роли",
      "Email-приглашения и сброс пароля",
      "Синхронизация с эталонной БД",
    ],
  },
  {
    name: "EcoLMS",
    domain: "EdTech / Internal LMS",
    summary:
      "Внутренний инструмент подготовки обучающих курсов из видео и документов с поэтапной генерацией материалов и ручной валидацией этапов.",
    stack: ["Next.js", "NestJS", "PostgreSQL", "Redis", "S3", "Whisper"],
    highlights: [
      "Multipart upload в S3",
      "Пайплайн из 4 этапов контента",
      "Очереди и отдельные worker-сервисы",
    ],
  },
  {
    name: "Ecookna QualAnalize",
    domain: "Production QA / PDF Validation",
    summary:
      "Автоматическая проверка PDF-заказов на соответствие техправилам и нормам слипаемости с выдачей детального отчета.",
    stack: ["Python", "PostgreSQL", "React", "Telegram Bot API", "Directus"],
    highlights: [
      "Гибрид: Python + SQL-процедуры",
      "Детерминированные проверки формул",
      "Отчеты по ошибкам и предупреждениям",
    ],
  },
  {
    name: "ecookna-crm-analytics_clone",
    domain: "CRM Analytics UI",
    summary:
      "Веб-интерфейс аналитики CRM на React/Vite с компонентной архитектурой shadcn/ui для операционного мониторинга.",
    stack: ["React", "Vite", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    highlights: [
      "Frontend-ориентированная архитектура",
      "Компонентный UI-подход",
      "База для аналитических дашбордов",
    ],
  },
  {
    name: "Lead-magnet",
    domain: "Marketing Automation / Telegram",
    summary:
      "Система генерации лидов в Telegram с deep-link кампаниями, проверкой подписки и маршрутизацией лидов в CRM/Email.",
    stack: ["FastAPI", "Aiogram", "PostgreSQL", "Redis", "React", "shadcn/ui"],
    highlights: [
      "FSM-сбор контактных данных",
      "Интеграции EcoCRM / Bitrix24 / Email",
      "Админ-панель управления кампаниями",
    ],
  },
  {
    name: "Mobiblisation (postgres edition)",
    domain: "Gov / Internal Operations",
    summary:
      "Монорепо приложения учета мобилизации: справочники, события, отчеты, импорт Excel и интеграция с Power Query.",
    stack: ["NestJS", "Next.js", "PostgreSQL", "shadcn/ui", "pnpm workspace"],
    highlights: [
      "Единая схема данных в PostgreSQL",
      "Отчетные API и журналы аудита",
      "Импорт Excel с валидацией",
    ],
  },
  {
    name: "Legitum Translator",
    domain: "Integration / Automation",
    summary:
      "Интеграционный контур переводческих workflow на базе n8n с удаленным развертыванием через Railway.",
    stack: ["n8n", "Railway", "MCP connector"],
    highlights: [
      "Подключение внешнего n8n-инстанса",
      "Интеграция в автоматизационные сценарии",
      "База для переводческих пайплайнов",
    ],
  },
  {
    name: "Wellmaker Content Generator",
    domain: "Healthcare Content",
    summary:
      "Внутренний генератор контент-планов для медицинских клиентов с очередями генерации, календарем и экспортом в документы.",
    stack: ["Next.js 14", "PocketBase", "Redis", "OpenAI/Gemini/DeepSeek", "Tailwind CSS"],
    highlights: [
      "Асинхронная генерация через jobs",
      "Экспорт в Excel/Word/PDF",
      "Управление календарем и постами",
    ],
  },
];
