import { useQuery } from "@tanstack/react-query";
import converter from "@cxllm/currency";

const getConvert = (from: string, to: string) => converter.convert(1, from, to);

const useConvert = (from: string, to: string) => {
  const dataConvert = useQuery(
    ["convert", from, to],
    () => getConvert(from, to),
    { keepPreviousData: true }
  );
  return dataConvert;
};

export default useConvert;
