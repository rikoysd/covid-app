export type Ventilator = {
  // 都道府県
  prefecture: string;
  // 臨床工学技士
  ce: number;
  // 人工呼吸器(マスク専用も含む)
  ventilator: number;
  // ECMO装置
  ecmo: number;
};
