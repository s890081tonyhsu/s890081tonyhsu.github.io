export type SimpleItem = {
  name: string;
  text: string;
  link?: string;
};

type YearMonth = `${number}-${number}`;

export type DateRangeItem = SimpleItem & {
  suffix?: string;
  time: {
    from: YearMonth;
    to: YearMonth | 'now';
  };
};

export type GroupItem<T> = {
  name: string;
  joinable?: boolean;
  items?: T[];
};
