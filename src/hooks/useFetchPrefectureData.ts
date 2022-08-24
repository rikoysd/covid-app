import axios from "axios";
import type { Prefecture } from "../types/prefecture";
import type { Country } from "../types/country";
import { useCallback, useState } from "react";

export const useFetchPrefectureData = () => {
  const [prefectures, setPrefectures] = useState<Prefecture[]>([]);
  const [country, setCountry] = useState<Country>({
    npatients: "",
    ncurrentpatients: "",
    nexits: "",
    ndeaths: "",
  });
  // 日次更新日
  const [lastUpdateOfDaily, setLastUpdateOfDaily] = useState<string>("");

  const getPrefectures = useCallback(() => {
    axios
      .get("https://www.stopcovid19.jp/data/covid19japan.json")
      .then((response) => {
        setLastUpdateOfDaily(response.data.lastUpdate);
        const newPrefectures = [...prefectures];
        for (let prefecture of response.data.area) {
          const ob: Prefecture = {
            name: prefecture.name,
            name_jp: prefecture.name_jp,
            npatients: prefecture.npatients,
            ncurrentpatients: prefecture.ncurrentpatients,
            nexits: prefecture.nexits,
            ndeaths: prefecture.ndeaths,
          };
          newPrefectures.push(ob);
        }
        setPrefectures(newPrefectures);
        setCountry({
          npatients: response.data.npatients,
          ncurrentpatients: response.data.ncurrentpatients,
          nexits: response.data.nexits,
          ndeaths: response.data.ndeaths,
        });
      });
  }, []);
  return { prefectures, getPrefectures, country, lastUpdateOfDaily };
};
