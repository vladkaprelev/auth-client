class LocalStorage {
  private readonly store: Record<string | symbol, any>;

  constructor() {
    this.store = window.localStorage;
  }

  get(key: string | symbol): any {
    return this.store.getItem(`${String(key)}`);
  }

  set(key: string | symbol, value: any): void {
    this.store.setItem(`${String(key)}`, value);
  }

  delete(key: string | symbol): void {
    this.store.removeItem(`${String(key)}`);
  }
}

export default new LocalStorage();
