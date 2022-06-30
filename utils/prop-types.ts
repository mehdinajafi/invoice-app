export const tuple = <T extends string[]>(...args: T) => args;

const normalSizes = tuple("xs", "sm", "md", "lg", "xl");

const djdj: typeof normalSizes[number] = "";
