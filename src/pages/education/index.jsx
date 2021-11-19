import {Switch, Route} from 'react-router-dom'
import NotDetail from '../../components/Education/NotDetail'
import Detail from '../../components/Education/Detail'
const Education = () => {
  return (
    <Switch>
      <Route path="/education" exact component={NotDetail}/>
      <Route path="/education/detail/:key" exact render={routeProps => <Detail {...routeProps}/>}/>
    </Switch>
  )
}
export default Education
