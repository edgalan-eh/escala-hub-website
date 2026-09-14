import {
  BarChart3,
  BellRing,
  Boxes,
  Calculator,
  Database,
  LayoutDashboard,
  ListChecks,
  MessageSquare,
  Monitor,
  Percent,
  PenTool,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  Store,
  Tag,
  TrendingUp,
  Truck,
  Wallet,
  Workflow,
  type LucideProps,
} from "lucide-react";

const map = {
  "bar-chart-3": BarChart3,
  "bell-ring": BellRing,
  boxes: Boxes,
  calculator: Calculator,
  database: Database,
  "layout-dashboard": LayoutDashboard,
  "list-checks": ListChecks,
  "message-square": MessageSquare,
  monitor: Monitor,
  percent: Percent,
  "pen-tool": PenTool,
  "shopping-bag": ShoppingBag,
  "shopping-cart": ShoppingCart,
  sparkles: Sparkles,
  store: Store,
  tag: Tag,
  "trending-up": TrendingUp,
  truck: Truck,
  wallet: Wallet,
  workflow: Workflow,
} as const;

export type IconName = keyof typeof map;

export function Icon({ name, ...props }: { name: string } & LucideProps) {
  const C = map[name as IconName] ?? Store;
  return <C strokeWidth={1.75} aria-hidden="true" {...props} />;
}
