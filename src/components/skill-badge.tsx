import type { LucideIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface SkillBadgeProps {
  Icon: LucideIcon;
  label: string;
}

export default function SkillBadge({ Icon, label }: SkillBadgeProps) {
  return (
    <Badge variant="secondary" className="flex items-center gap-2 p-3 text-sm bg-card border-border shadow-sm hover:shadow-md transition-shadow">
      <Icon className="h-5 w-5 text-primary" />
      <span>{label}</span>
    </Badge>
  );
}
