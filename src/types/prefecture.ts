export type Prefecture = {
  // 都道府県名(ローマ字)
  name: string;
  // 都道府県名(漢字)
  name_jp: string;
  // 累積陽性者数
  npatients: number;
  // 現在の患者数
  ncurrentpatients: number;
  // 累積退院者数
  nexits: number;
  // 累積死者数
  ndeaths: number;
};
