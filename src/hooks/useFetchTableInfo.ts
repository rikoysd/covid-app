import { useCallback, useState } from "react";
import axios from "axios";
import type { TableInfo } from "../types/tableInfo";
import type { Increase } from "../types/increase";

export const useFetchTableInfo = () => {
  const [info, setInfo] = useState<TableInfo[]>([]);
  const [allBedNum, setAllBedNum] = useState<number>();
  const [lastUpdateOfBedrooms, setLastUpdateOfBedrooms] = useState<string>("");

  const getTableInfo = useCallback(async () => {
    let arr: Array<Increase> = [];
    await axios
      .get("https://www.stopcovid19.jp/data/covid19japan-trend.json")
      .then((response) => {
        arr = response.data;
      });

    const newInfo = [...info];
    let newAllBedNum = 0;
    await axios
      .get("https://www.stopcovid19.jp/data/covid19japan_beds/latest.json")
      .then((response) => {
        setLastUpdateOfBedrooms(response.data[0].更新日);
        for (let i = 0; i < response.data.length; i++) {
          newAllBedNum +=
            Number(response.data[i].入院患者受入確保病床) +
            Number(response.data[i].宿泊施設受入可能室数);
          const infoOb: TableInfo = {
            id: Number(response.data[i].id),
            name: response.data[i].都道府県名,
            patients: arr[i].ncurrentpatients,
            hospitalBeds: Number(response.data[i].入院患者受入確保病床),
            hotelRooms: Number(response.data[i].宿泊施設受入可能室数),
            bedRooms:
              Number(response.data[i].入院患者受入確保病床) +
              Number(response.data[i].宿泊施設受入可能室数),
            percent: Math.floor(
              (arr[i].ncurrentpatients /
                (Number(response.data[i].入院患者受入確保病床) +
                  Number(response.data[i].宿泊施設受入可能室数))) *
                100
            ),
            dcurrentpatients: arr[i].dcurrentpatients,
          };
          newInfo.push(infoOb);
        }
        setInfo(newInfo);
        setAllBedNum(newAllBedNum);
      });
  }, []);

  return { info, getTableInfo, allBedNum, lastUpdateOfBedrooms };
};
