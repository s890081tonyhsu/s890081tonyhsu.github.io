type Ordered = { data: { order: number } };
type Dated = { data: { time: { from: string } } };

/** Collection entries by their `order` field, ascending. */
export const byOrder = (a: Ordered, b: Ordered): number => a.data.order - b.data.order;

/** Newest first by start month (`YYYY-MM` strings sort lexicographically). */
export const byStartDesc = (a: Dated, b: Dated): number => b.data.time.from.localeCompare(a.data.time.from);
