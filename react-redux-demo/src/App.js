import React, { lazy, Suspense } from "react";
import loadable from "@loadable/component";
import { createContext, useReducer } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import LazyLoad from "react-lazyload";
import store from "./Redux/cakeStore";
// import './App.css';

// import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import ItemsContainer from "./components/ItemsContainer";
import UserContainer from "./components/UserContainer";
import FormDemo from "./components/FormDemo";
import Sortable from "./components/Sortable";
import Menu from "./components/Menu";
import useRightClickMenu from "./components/useRightClickMenu";
import { initialState, reducer } from "./store/reducer";
import Home from "./components/Home";
import Login from "./components/Login";

const CakeContainer = loadable(() => import("./components/CakeContainer"));
// const Sortable = loadable(() => import('./components/Sortable'))

export const AuthContext = createContext();

function App() {
  const { x, y, showMenu } = useRightClickMenu();
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <Login />
      <Router>
        <Routes>
          <Route path="/login" component={Login} />
          <Route path="/" component={Home} />
        </Routes>
      </Router>
    </AuthContext.Provider>

    // <Provider store={store}>
    //   <div className="App">
    //     <header className="App-header">
    //       {/* <UserContainer/> */}
    //       {/*
    //       <ItemsContainer cake/>
    //       <ItemsContainer/>
    //       <CakeContainer/>
    //       <HooksCakeContainer/>
    //       <IceCreamContainer/>
    //       <NewCakeContainer/> */}
    //       {/* <FormDemo/> */}
    //       {/* <CakeContainer /> */}
    //       {/* <Suspense fallback={<p>laoding</p>}>
    //         <CakeContainer />
    //       </Suspense>
    //       <Suspense fallback={<p>laoding</p>}>
    //         <Sortable />
    //       </Suspense> */}
    //       {/* <img src='/kubernetes.png' alt='Icon' className='pathIcon' loading='lazy' /> */}
    //       {/* <amp
    //         src='/kubernetes.png' alt='Iconnn' className='pathIcon' loading='lazy'
    //       >
    //         <nonscript>
    //           <img src='/notFound.png' alt='Icon' className='pathIcon' loading='lazy' />
    //         </nonscript>
    //       </amp> */}
    //       {/* <CakeContainer /> */}
    //       <Sortable />
    //       {/* <Menu x={x} y={y} showMenu={showMenu}/> */}
    //     </header>
    //   </div>
    // </Provider>
  );
}

export default App;
