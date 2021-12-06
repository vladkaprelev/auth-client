type Subscriber = {
  type: string;
  fn: (data: any) => any | void;
};
type Data = {
  type: "error" | "success" | "warning" | "info";
  message: string;
  delay: number;
};

class EventObserver {
  private observers: Array<Subscriber>;

  constructor() {
    this.observers = [];
  }

  subscribe(type: string, fn: (data: any) => any | void) {
    const subscriber: Subscriber = {
      type,
      fn,
    };
    this.observers.push(subscriber);
    this.observers = Array.from(new Set([...this.observers]));
  }

  unsubscribe(type: string) {
    this.observers = this.observers.filter((item) => item.type !== type);
  }

  broadcast(subscriberType: string, data: Data) {
    const event: Subscriber | undefined = this.observers.find(
      (subscriber) => subscriber.type === subscriberType
    );
    if (event) {
      event.fn(data);
    }
  }
}

export default new EventObserver();
