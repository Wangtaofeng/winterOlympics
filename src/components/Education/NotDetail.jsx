import Header from '../../components/Home/Header'
import Footer from '../../components/Home/Footer'
import Relate from './module/Relate'
import TitleContent from './module/TitleContent'
import { Col, Row } from 'antd'
import './css/ed.scss'
const NotDetail = () => {
  return (
    <>
      <Header />
      <Row className='ed_container'>
        <Col span={14}>
        <TitleContent />
        </Col>
        <Col span={10}>
          <Relate />
        </Col>
      </Row>
      <Footer />
    </>
  )
}
export default NotDetail
