import React, { useState, useEffect } from "react";
import "./index.css";

export default function Staring() {
  const [activeSlide, setactiveSlide] = useState(-1);
  const [prevSlide, setprevSlide] = useState(-1);
  const [sliderReady, setsliderReady] = useState(false);
  let IMAGE_PARTS = 4;

  useEffect(() => {
    setTimeout(() => {
      setactiveSlide(0);
      setsliderReady(true);
    }, 0);
  }, []);

  function changeSlides(change) {
    const { length } = slides;
    const prevSlide1 = activeSlide;
    let activeSlide1 = prevSlide1 + change;
    if (activeSlide1 < 0) activeSlide1 = length - 1;
    if (activeSlide1 >= length) activeSlide1 = 0;
    setactiveSlide(activeSlide1);
    setprevSlide(prevSlide1);
  }

  const slides = [
    {
      name: "杨扬",
      message:
        "杨扬在2002年盐湖城冬奥会上，为中国获得了第一枚冬奥会金牌。2006年都灵冬奥会结束后，杨扬宣布退出国家队。2010年2月，她以退役运动员身份当选国际奥委会委员。",
      img: "img/stars/yangyang600.jpg",
    },
    {
      name: "张虹",
      message:
        "张虹在2014年索契冬奥会速度滑冰女子1000米决赛中，滑出了1分14秒02的成绩，力压其他选手夺冠，这是中国冬奥会历史上的第一枚速度滑冰金牌。",
      img: "img/stars/zhanghong600.jpg",
    },
    {
      name: "李坚柔",
      message:
        "李坚柔在索契冬奥会短道速滑女子500米决赛中获得冠军，为中国代表团夺得索契冬奥会首枚金牌。",
      img: "img/stars/lijianrou600.jpg",
    },
    {
      name: "王濛",
      message:
        "王濛在2006年都灵冬奥会获得短道速滑女子500米冠军，4年后又在温哥华冬奥会上夺得短道速滑女子500米、1000米以及3000米接力的金牌。",
      img: "img/stars/wangmeng600.jpg",
    },
    {
      name: "申雪/赵宏博",
      message:
        "申雪、赵宏博在2010年温哥华冬奥会上力压庞清、佟健及德国组合夺冠，完成花样滑冰双人滑项目的大满贯。2012年2月，两人退役。",
      img: "img/stars/shenxuezhaohongbo190.jpg",
    },

    {
      name: "韩晓鹏",
      message:
        "韩晓鹏在2006年都灵冬奥会上一鸣惊人，在决赛中以250.77分力挫群雄，以完美的两个动作获得了都灵冬奥会自由式滑雪男子空中技巧金牌，也是中国第一枚自由式滑雪项目的金牌 。",
      img: "img/stars/hanxiaopeng600.jpg",
    },
    {
      name: "金妍儿",
      message:
        "1990年9月出生，韩国著名女单花样滑冰运动员，出生于韩国京畿道富川市。7岁开始学习花样滑冰。2009年洛杉矶世锦赛上，金妍儿以创造女子短节目和总成绩两项记录的成绩获得冠军。",
      img: "img/stars/jinyaner_big.jpg",
    },
    {
      name: "浅田真央",
      message:
        "日本著名花样滑冰选手，出生于爱知县名古屋市，她是亚洲第一位三次夺得世界花样滑冰锦标赛金牌并赢得三次“世界冠军”头衔的女子单人滑选手。",
      img: "img/stars/qiantianzhenyang_big.jpg",
    },
    {
      name: "普鲁申科",
      message:
        "1982年11月出生，俄罗斯花样滑冰男子单人滑选手。国际滑冰联盟花样滑冰大奖赛分站冠军、世界花样滑冰青年锦标赛冠军、欧洲青年奥运会冠军、友好运动会冠军。",
      img: "img/stars/pulushenke_big.jpg",
    },
    {
      name: "安贤洙",
      message:
        "1985年出生，俄罗斯籍韩国裔男子短道速滑运动员。加入俄罗斯籍并出战2014年索契冬奥会，并获得男子个人1000米冠军，以及1500米季军，500米冠军和5000米接力金牌",
      img: "img/stars/name_ann.png",
    },
    {
      name: "奥拉·比约达伦",
      message:
        "挪威滑雪运动员，绰号“国王”，曾在2002年冬奥会冬季两项项目一人独得男子10公里、15公里和12.5公里追逐赛三枚金牌，被誉为“冬季两项之王”。",
      img: "img/stars/biyuedalun_big.jpg",
    },
    {
      name: "劳琳-威廉姆斯",
      message:
        "1983年出生，美国运动员，世界上跑的最快的女飞人之一，在2005年的赫尔辛基世界田径锦标赛上，威廉姆斯以10秒93获得了女子100米比赛金牌",
      img: "img/stars/weilianmusi.jpg",
    },
    {
      name: "肖恩-怀特",
      message:
        "1986年出生，单板滑雪运动员，曾获得2006年，2010年冬奥会单板滑雪U型槽男子冠军。绰号飞翔的番茄。他是世界上最好的单板滑雪选手、最有才能的滑板选手之一。",
      img: "img/stars/huaite.jpg",
    },
    {
      name: "佩希施泰因",
      message:
        "1972年出生，德国速度滑冰的女运动员。德国成就最大的冬奥会选手，共获得5枚奥运金牌、2枚奥运银牌和2枚奥运铜牌。",
      img: "img/stars/peisixidaien.jpg",
    },
  ];
  function slideName(index) {
    if (activeSlide === index && prevSlide === index) {
      return "slider__slide s--active s--prev";
    } else if (activeSlide === index && prevSlide !== index) {
      return "slider__slide s--active";
    } else if (activeSlide !== index && prevSlide === index) {
      return "slider__slide s--prev";
    } else if (activeSlide !== index && prevSlide !== index) {
      return "slider__slide";
    }
  }
  return (
    <>
      <div className={sliderReady ? "slider s--ready" : "slider"}>
        <p className="slider__top-heading">奥运明星</p>
        <div className="slider__slides">
          {slides.map((slide, index) => (
            <div className={slideName(index)} key={slide.name}>
              <div className="slider__slide-content">
                <h3 className="slider__slide-subheading">
                  {slide.message || slide.name}
                </h3>
                <h2 className="slider__slide-heading">
                  {slide.name.split("").map((l) => (
                    <span key={l}>{l}</span>
                  ))}
                </h2>
              </div>
              <div className="slider__slide-parts">
                {[...Array(IMAGE_PARTS).fill()].map((x, i) => (
                  <div className="slider__slide-part" key={i}>
                    <div
                      className="slider__slide-part-inner"
                      style={{ backgroundImage: `url(${slide.img})` }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="slider__control" onClick={() => changeSlides(-1)}></div>
        <div
          className="slider__control slider__control--right"
          onClick={() => changeSlides(1)}
        ></div>
      </div>
    </>
  );
}
