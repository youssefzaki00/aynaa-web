import { genName } from "../appTypes";
import Button from "./LinkButton";

const LearnProtection = () => {
  return (
    <Button
      link={`/setupvalues`}
      content="اضغط هنا لمعرفة المزيد عن الحماية المتاحة"
    />
  );
};

export default LearnProtection;
