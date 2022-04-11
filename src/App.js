import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LoginPage } from './components/login/LoginPage';
import { UserListPage } from './components/userList/UserListPage';
import styles from './app.module.scss';
import { LoggedLayout } from './components/layout/LoggedLayout';
import { SignUpPage } from './components/signUp/SignUpPage';
import { LogoutPage } from './components/logout/LogoutPage';
import { UserInfoPage } from './components/userInfo/UserInfoPage';

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <Routes>
          <Route path='/users/:id' element={<LoggedLayout><UserInfoPage /></LoggedLayout>} />
          <Route path='/users' element={<LoggedLayout currentPage='users'><UserListPage /></LoggedLayout>} />
          <Route path='/signup' element={<SignUpPage/>} />
          <Route path='/logout' element={<LoggedLayout currentPage='logout'><LogoutPage/></LoggedLayout>} />
          <Route path='/' element={<LoginPage/>}/>
        </Routes>
      </div>
    </Router>  
  );
}

export default App;
