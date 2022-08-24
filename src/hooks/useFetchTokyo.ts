import axios from "axios";
import { useCallback, useState } from "react";
import type { Prefecture } from "../types/prefecture";

export const useFetchTokyo = () => {
  const [tokyoPatient, setTokyoPatient] = useState<Prefecture>({
    name: "",
    name_jp: "",
    npatients: 0,
    ncurrentpatients: 0,
    nexits: 0,
    ndeaths: 0,
  });
  const [lastUpdate, setLastUpdate] = useState<string>("");

  const getTokyoPatients = useCallback(async () => {
    await axios
      .get("https://www.stopcovid19.jp/data/covid19japan-fast.json")
      .then((response) => {
        let ob: Prefecture = {
          name: response.data[0].name,
          name_jp: "東京都",
          npatients: response.data[0].npatients,
          ncurrentpatients: response.data[0].ncurrentpatients,
          nexits: response.data[0].nexits,
          ndeaths: response.data[0].ndeaths,
        };
        setTokyoPatient(ob);
        setLastUpdate(response.data[0].lastUpdate);
      });
  }, []);
  return { tokyoPatient, getTokyoPatients, lastUpdate };
};
