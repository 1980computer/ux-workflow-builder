'use client';

import { AlertCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ErrorIndicatorProps {
  errors: string[];
}

export function ErrorIndicator({ errors }: ErrorIndicatorProps) {
  if (errors.length === 0) {
    return null;
  }

  return (
    <Badge variant="destructive" className="flex items-center gap-1">
      <AlertCircle className="h-3 w-3" />
      {errors.length} Error{errors.length > 1 ? 's' : ''}
    </Badge>
  );
}
