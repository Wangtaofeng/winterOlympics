import Header from '../Home/Header'
import Footer from '../Home/Footer'
import detail from './data'
import './css/detail.scss'
const Detail = (props) => {
  const data = detail.get(props.match.params.key)
  return (
    <>
      <Header />
        <div className="cardContainer">
            <h1>{data.title}</h1>
            <p>{data.content}</p>
            {data.imgs.map(path => {
              return <img key={path} src={path} alt="详情图片" />
            })}
        </div>
      <Footer />
    
    </>
  )
}
export default Detail