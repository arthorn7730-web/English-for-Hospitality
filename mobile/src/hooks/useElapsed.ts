import { useEffect, useState } from 'react';

/** Live elapsed milliseconds since `startedAt`, ticking every second while mounted. */
export function useElapsed(startedAt: number | null): number {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    if (startedAt == null) return;
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, [startedAt]);

  if (startedAt == null) return 0;
  return now - startedAt;
}
