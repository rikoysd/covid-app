export type TableInfo = {
  // id
  id: number;
  // 名前
  name: string;
  // 現在患者数
  patients: number;
  // 入院患者受入確保病床
  hospitalBeds: number;
  // 宿泊施設受入可能室数
  hotelRooms: number;
  // 対策病床数
  bedRooms: number;
  // 現在患者数を対策病床数で割った値
  percent: number;
  // 前日比（感染者数）
  dcurrentpatients: number;
};
