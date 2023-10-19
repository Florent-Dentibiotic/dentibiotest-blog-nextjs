import { parseISO, format } from "date-fns";
import fr from "date-fns/locale/fr";

type Props = {
  dateString: string;
};
const locale = fr;

const DateFormatter = ({ dateString }: Props) => {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString}>{format(date, "d MMM yyyy", { locale })}</time>
  );
};

export default DateFormatter;
