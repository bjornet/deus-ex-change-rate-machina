export const storeManager = {
  get: (key: string) => {
    const value = localStorage.getItem(key);

    if (value) {
      return JSON.parse(value);
    }

    return null;
  },
  set: (key: string, value: unknown) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  remove: (key: string) => {
    localStorage.removeItem(key);
  },
  clear: () => {
    localStorage.clear();
  },
};
