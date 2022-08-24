import hokkaido from "../json/prefecture/hokkaido.json";
import aomori from "../json/prefecture/aomori.json";
import akita from "../json/prefecture/akita.json";
import iwate from "../json/prefecture/iwate.json";
import yamagata from "../json/prefecture/yamagata.json";
import miyagi from "../json/prefecture/miyagi.json";
import fukushima from "../json/prefecture/fukushima.json";
import gunma from "../json/prefecture/gunma.json";
import tochigi from "../json/prefecture/tochigi.json";
import ibaraki from "../json/prefecture/ibaraki.json";
import saitama from "../json/prefecture/saitama.json";
import tokyo from "../json/prefecture/tokyo.json";
import chiba from "../json/prefecture/chiba.json";
import kanagawa from "../json/prefecture/kanagawa.json";
import nigata from "../json/prefecture/nigata.json";
import nagano from "../json/prefecture/nagano.json";
import toyama from "../json/prefecture/toyama.json";
import ishikawa from "../json/prefecture/ishikawa.json";
import yamanashi from "../json/prefecture/yamanashi.json";
import shizuoka from "../json/prefecture/shizuoka.json";
import aichi from "../json/prefecture/aichi.json";
import gifu from "../json/prefecture/gifu.json";
import fukui from "../json/prefecture/fukui.json";
import mie from "../json/prefecture/mie.json";
import shiga from "../json/prefecture/shiga.json";
import kyoto from "../json/prefecture/kyoto.json";
import wakayama from "../json/prefecture/wakayama.json";
import nara from "../json/prefecture/nara.json";
import osaka from "../json/prefecture/osaka.json";
import hyogo from "../json/prefecture/hyogo.json";
import hiroshima from "../json/prefecture/hiroshima.json";
import okayama from "../json/prefecture/okayama.json";
import shimane from "../json/prefecture/shimane.json";
import tottori from "../json/prefecture/tottori.json";
import yamaguchi from "../json/prefecture/yamaguchi.json";
import kagawa from "../json/prefecture/kagawa.json";
import tokushima from "../json/prefecture/tokushima.json";
import kochi from "../json/prefecture/kochi.json";
import ehime from "../json/prefecture/ehime.json";
import fukuoka from "../json/prefecture/fukuoka.json";
import saga from "../json/prefecture/saga.json";
import nagasaki from "../json/prefecture/nagasaki.json";
import oita from "../json/prefecture/oita.json";
import kumamoto from "../json/prefecture/kumamoto.json";
import miyazaki from "../json/prefecture/miyazaki.json";
import kagoshima from "../json/prefecture/kagoshima.json";
import okinawa from "../json/prefecture/okinawa.json";

import { useCallback, useState } from "react";
import type { LineGraph } from "../types/lineGraph";

export const useFetchPatients = () => {
  const [patients, setPatients] = useState<LineGraph[]>([]);

  const getPatients = useCallback((name: string) => {
    const newPatients = [...patients];
    if (name === "北海道") {
      for (let ob of hokkaido) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "青森県") {
      for (let ob of aomori) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "秋田県") {
      for (let ob of akita) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "岩手県") {
      for (let ob of iwate) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "山形県") {
      for (let ob of yamagata) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "宮城県") {
      for (let ob of miyagi) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "福島県") {
      for (let ob of fukushima) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "群馬県") {
      for (let ob of gunma) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "栃木県") {
      for (let ob of tochigi) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "茨城県") {
      for (let ob of ibaraki) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "埼玉県") {
      for (let ob of saitama) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "東京都") {
      for (let ob of tokyo) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "千葉県") {
      for (let ob of chiba) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "神奈川県") {
      for (let ob of kanagawa) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "新潟県") {
      for (let ob of nigata) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "長野県") {
      for (let ob of nagano) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "山梨県") {
      for (let ob of yamanashi) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "静岡県") {
      for (let ob of shizuoka) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "愛知県") {
      for (let ob of aichi) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "富山県") {
      for (let ob of toyama) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "福井県") {
      for (let ob of fukui) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "岐阜県") {
      for (let ob of gifu) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "石川県") {
      for (let ob of ishikawa) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "三重県") {
      for (let ob of mie) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "滋賀県") {
      for (let ob of shiga) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "京都府") {
      for (let ob of kyoto) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "和歌山県") {
      for (let ob of wakayama) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "奈良県") {
      for (let ob of nara) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "大阪府") {
      for (let ob of osaka) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "兵庫県") {
      for (let ob of hyogo) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "広島県") {
      for (let ob of hiroshima) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "岡山県") {
      for (let ob of okayama) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "鳥取県") {
      for (let ob of tottori) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "島根県") {
      for (let ob of shimane) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "山口県") {
      for (let ob of yamaguchi) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "香川県") {
      for (let ob of kagawa) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "徳島県") {
      for (let ob of tokushima) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "高知県") {
      for (let ob of kochi) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "愛媛県") {
      for (let ob of ehime) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "福岡県") {
      for (let ob of fukuoka) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "佐賀県") {
      for (let ob of saga) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "熊本県") {
      for (let ob of kumamoto) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "長崎県") {
      for (let ob of nagasaki) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "大分県") {
      for (let ob of oita) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "宮崎県") {
      for (let ob of miyazaki) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "鹿児島県") {
      for (let ob of kagoshima) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else {
      for (let ob of okinawa) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    }
  }, []);

  return { patients, getPatients };
};
