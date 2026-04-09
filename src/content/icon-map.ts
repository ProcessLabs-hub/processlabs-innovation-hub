import {
  Award,
  BarChart3,
  Bot,
  Brain,
  Clock,
  Code,
  Cloud,
  Cpu,
  Database,
  DollarSign,
  Palette,
  Rocket,
  Search,
  Settings,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

export const serviceIconMap = {
  users: Users,
  brain: Brain,
  settings: Settings,
  search: Search,
} as const;

export const caseResultIconMap = {
  trendingUp: TrendingUp,
  clock: Clock,
  dollarSign: DollarSign,
  target: Target,
} as const;

export const methodologyIconMap = {
  search: Search,
  palette: Palette,
  code: Code,
  rocket: Rocket,
  barChart3: BarChart3,
} as const;

export const technologyIconMap = {
  database: Database,
  bot: Bot,
  cloud: Cloud,
  barChart3: BarChart3,
  brain: Brain,
  cpu: Cpu,
} as const;

export const teamMetricIconMap = {
  award: Award,
  code: Code,
  zap: Zap,
  users: Users,
} as const;
