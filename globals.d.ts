declare global {
  interface Window {
    peasy?: {
      init: () => void;
      track: (event: string, data: Record<string, any>) => void;
      page: () => void;
      setProfile: (id: string, data: Record<string, unknown>) => void;
      disableTracking: () => void;
    };
  }
}

export {};
