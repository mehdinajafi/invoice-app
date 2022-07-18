import format from "date-fns/format";

export const addCommas = (num: number) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const formatDate = (date: Date | "now") => {
  if (date === "now") {
    return format(new Date(), "yyyy-MM-dd");
  }
  return format(date, "yyyy-MM-dd");
};
