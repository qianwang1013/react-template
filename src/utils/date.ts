import moment from "moment";

export const parseDateToMDY = (date: Date) => {
  return moment(date).format("HH:mm A, MMM DD YYYY");
};
