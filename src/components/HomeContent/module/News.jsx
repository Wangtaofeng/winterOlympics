import { useState } from 'react'
import "../css/news.scss"
const News = () => {
  const cartimg = [
    {
      key: 'cart1',
      name:'总书记的“冬奥时间线”',
      content:'举办北京冬奥会、冬残奥会来之不易、意义重大，同实现“两个一百年”奋斗目标高度契合。习近平总书记高度重视北京冬奥会的筹办工作，多次在不同场合作出重要指示批示。我们梳理了党的十八大以来习近平总书记关于冬奥会的重要活动及相关论述，一起回顾总书记的“冬奥时间线”！',
      imgs: ['/img/swiper/cart1.jfif']
    }, {
      key: 'cart2',
      name:'韩正主持召开领导小组会议',
      content:'韩正表示，冬奥会筹办工作进展顺利，为如期办赛打下了坚实基础。要进一步增强责任感、使命感、紧迫感，围绕如期办赛目标，按照“简约、安全、精彩”的办赛要求，把疫情防控摆在突出位置，落实落细各项工作，高质量完成筹办任务。',
      imgs: ['/img/swiper/cart2.jfif']
    }, {
      key: 'cart3',
      name:'北京冬奥会防疫手册发布',
      content:'10月25日，国际奥委会、国际残奥委会和北京冬奥组委发布第一版《北京2022年冬奥会和冬残奥会防疫手册》（以下简称《防疫手册》）。《防疫手册》分两本，一本面向运动员和随队官员，另一本面向所有其他利益相关方，为其提供了全面的防疫指导，有助于涉奥人员为前往和抵达中国、参加冬奥会和冬残奥会以及离开北京做好准备。',
      imgs: ['/img/swiper/cart3.jfif']
    }
  ]
  const [cartList] = useState(cartimg);
  return (
    <>
      <div className="news">
        <h1>焦点新闻</h1>
        <div className="news_content">
          {cartList.map((item) => {
            return (
              <div className="cards" key={item.key} >
                <div className="cards_img">
                  <img src={item.imgs} alt='新闻卡片' />
                </div>
                <div className="cards_hp">
                  <h2>{item.name}</h2>
                  <p>{item.content}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
export default News