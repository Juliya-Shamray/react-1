
import './App.css';
import { Route, Routes } from "react-router-dom";
import { initializeApp } from "./redux/App-reducer"
import Navbar from './components/Navbar/Navbar';

import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer, { withRouter } from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/LoginPage/LoginPage';
import React from 'react';
import { connect } from 'react-redux';
import Preloader from './components/common/Preloader/Preloader';


class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }


  render() {
    if (!this.props.initialazed) {
      return <Preloader />
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path="/profile/:userId?" element={<ProfileContainer />} />
            <Route path="/dialogs" element={<DialogsContainer />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialazed: state.app.initialazed
})

export default withRouter(connect(mapStateToProps, { initializeApp })(App));
