'use client';

import { TooltipProvider } from '@/src/components/parts/tooltip';

export default function Providers({ children }: { children: React.ReactNode }) {
  return <TooltipProvider>{children}</TooltipProvider>;
}
