import './App.css'
import Notifications from '../Notifications/Notifications.jsx'
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'
import Login from '../Login/Login.jsx'
import { Fragment, Component } from 'react'
import { getLatestNotification } from '../utils/utils.js'
import { v4 as uuidv4 } from 'uuid'
import CourseList from '../CourseList/CourseList.jsx'
import PropTypes from 'prop-types'

class App extends Component {
  constructor(props) {
    super(props);
    // notificationsList və coursesList-i constructor daxilində və ya birbaşa class property kimi saxlamaq olar
    this.notificationsList = [
      {id: uuidv4(), type: "default", value: "New course available"}, 
      {id: uuidv4(), type: "urgent", value: "New resume available"}, 
      {id: uuidv4(), type: "urgent", html: { __html: getLatestNotification() }} // HTML propları adətən obyekt gözləyir
    ];
    this.coursesList = [
      {id: uuidv4(), name: "ES6", credit: 60}, 
      {id: uuidv4(), name: "Webpack", credit: 20}, 
      {id: uuidv4(), name: "React", credit: 40}
    ];
  }

  eventFunction = (e) => {
    // Testlərin həm kiçik 'h', həm də böyük 'H' üçün keçməsini təmin etmisən, bu yaxşıdır
    if (e.ctrlKey && (e.key === "h" || e.key === "H")) {
      alert("Logging you out");
      this.props.logOut();
    }
  }

  componentDidMount() {
    window.addEventListener("keydown", this.eventFunction);  
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.eventFunction);
  }

  render () {
    const { isLoggedIn } = this.props;
    return (
      <Fragment>
        <div className='root-notifications'>
          <Notifications notifications={this.notificationsList} displayDrawer={true}/>
        </div>
        <Header />
        <div className='mainSection'>
          {isLoggedIn ? <CourseList courses={this.coursesList} /> : <Login />}
        </div>
        <Footer />
      </Fragment>
    )
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {}
}

export default App;