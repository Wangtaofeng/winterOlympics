import { Tooltip } from 'antd'
import { HeartOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import '../css/TitleContent.scss'
const TitleContent = () => {
  return (
    <div className='TitleContent'>
      <h2>
        <HeartOutlined />
        &nbsp;你与我的“环环相扣”
      </h2>
      <div className='videoContainer'>
        <video width='700' height='400' controls poster='/img/ed/video_bg.jpg'>
          <source src='/img/ed/loop.mp4' type='video/mp4' />
          您的浏览器不支持Video标签。
        </video>
      </div>
      <div className="mascot">
        <Tooltip title='点击了解奥运吉祥物' color='#2db7f5' >
          <Link to='/mascot'>
            <img src='/img/ed/ice_and_hot.gif' alt='奥运吉祥物' />
          </Link>
        </Tooltip>
      </div>
    </div>
  )
}
export default TitleContent
