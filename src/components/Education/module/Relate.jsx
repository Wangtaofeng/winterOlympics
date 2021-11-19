import { useState } from 'react'
import { Col, Row } from 'antd'
import { BulbOutlined, FileOutlined } from '@ant-design/icons'
import {useHistory} from 'react-router-dom'
import '../css/Relate.scss'
const Relate = () => {
  const history = useHistory()
  const goDetil = (key) => {
    return () => {
      history.push(`/education/detail/${key}`)
    }
  }
  const zsRecourse = [
    {
      key: 'zs0',
      title: '冬奥知识课堂第三讲：奥林匹克标志和残奥标志演变史',
      path: '/img/ed/zs0.png',
    },
    {
      key: 'zs1',
      title: '冬奥知识课堂第二讲：了解奥林匹克和残奥品牌形象',
      path: '/img/ed/zs1.png',
    },
    {
      key: 'zs2',
      title: '冬奥知识课堂第一讲：奥林匹克运动的历史',
      path: '/img/ed/zs2.png',
    },
  ]
  const jyRecourse = [
    {
      key: 'jy0',
      title: '公众读本：魅力冬奥',
      path: '/img/ed/jy0.png',
    },
    {
      key: 'jy1',
      title: '履冰踏雪冬奥会',
      path: '/img/ed/jy1.png',
    },
    {
      key: 'jy2',
      title: '顾拜旦说',
      path: '/img/ed/jy2.png',
    },
  ]
  const [zsList] = useState(zsRecourse)
  const [jyList] = useState(jyRecourse)
  const right_style = { margin: '30px 20px 30px 0', height: '500px' }
  return (
    <>
      <Row>
        <Col
          className='relate_coinatr'
          style={{ ...right_style, backgroundColor: '#dce14b' }}
          span={10}
        >
          <h2>
            <BulbOutlined />
            &nbsp;知识讲堂
          </h2>
          <ul>
            {zsList.map((item) => {
              return (
                <li key={item.key}>
                  <img src={item.path} alt='知识讲堂图片' />
                  <h2 onClick={goDetil(item.key)} className='relate_title'>{item.title}</h2>
                </li>
              )
            })}
          </ul>
        </Col>
        <Col
          className='relate_coinatr'
          style={{ ...right_style, backgroundColor: '#41b6e6' }}
          span={10}
        >
          <h2>
            <FileOutlined />
            &nbsp;教育材料
          </h2>
          <ul>
            {jyList.map((item) => {
              return (
                <li key={item.key}>
                  <img src={item.path} alt='教育材料图片' />
                  <h2 onClick={goDetil(item.key)}  className='relate_title'>{item.title}</h2>
                </li>
              )
            })}
          </ul>
        </Col>
      </Row>
    </>
  )
}
export default Relate
