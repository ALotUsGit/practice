import { useState } from "react";
import { TUseInput } from "../types/LoginType";

const useLoginValue = (initialValue: string): TUseInput => {
  const [value, setValue] = useState(initialValue);

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return [value, onChangeValue];
};
export default useLoginValue;
