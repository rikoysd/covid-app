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
    if (name === "?????????") {
      for (let ob of hokkaido) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "?????????") {
      for (let ob of aomori) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "?????????") {
      for (let ob of akita) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "?????????") {
      for (let ob of iwate) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "?????????") {
      for (let ob of yamagata) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "?????????") {
      for (let ob of miyagi) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "?????????") {
      for (let ob of fukushima) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "?????????") {
      for (let ob of gunma) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "?????????") {
      for (let ob of tochigi) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "?????????") {
      for (let ob of ibaraki) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "?????????") {
      for (let ob of saitama) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "?????????") {
      for (let ob of tokyo) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "?????????") {
      for (let ob of chiba) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "????????????") {
      for (let ob of kanagawa) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "?????????") {
      for (let ob of nigata) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "?????????") {
      for (let ob of nagano) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "?????????") {
      for (let ob of yamanashi) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "?????????") {
      for (let ob of shizuoka) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "?????????") {
      for (let ob of aichi) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "?????????") {
      for (let ob of toyama) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "?????????") {
      for (let ob of fukui) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "?????????") {
      for (let ob of gifu) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "?????????") {
      for (let ob of ishikawa) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "?????????") {
      for (let ob of mie) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "?????????") {
      for (let ob of shiga) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "?????????") {
      for (let ob of kyoto) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "????????????") {
      for (let ob of wakayama) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "?????????") {
      for (let ob of nara) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "?????????") {
      for (let ob of osaka) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "?????????") {
      for (let ob of hyogo) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "?????????") {
      for (let ob of hiroshima) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "?????????") {
      for (let ob of okayama) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "?????????") {
      for (let ob of tottori) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "?????????") {
      for (let ob of shimane) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "?????????") {
      for (let ob of yamaguchi) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "?????????") {
      for (let ob of kagawa) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "?????????") {
      for (let ob of tokushima) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "?????????") {
      for (let ob of kochi) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "?????????") {
      for (let ob of ehime) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "?????????") {
      for (let ob of fukuoka) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "?????????") {
      for (let ob of saga) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "?????????") {
      for (let ob of kumamoto) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "?????????") {
      for (let ob of nagasaki) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "?????????") {
      for (let ob of oita) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "?????????") {
      for (let ob of miyazaki) {
        const object: LineGraph = {
          date: ob.date,
          patients: Number(ob.patients),
          deaths: Number(ob.deaths),
        };
        newPatients.push(object);
      }
      setPatients(newPatients);
    } else if (name === "????????????") {
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
