import { HashRouter, Route, Routes } from 'react-router';

export default function navHost(props) {

    return (
    <HashRouter>
        <Routes>
            <Route path="/" element={props.homePage} />
            <Route index />
            <Route path="/login" ></Route>
          <Route path="/register"></Route>
          <Route path="/homePage" ></Route>
          <Route path="/checkOut" ></Route>
          <Route path="/store" ></Route>
          <Route path="/accountPage" ></Route>
          <Route path="*" />
        </Routes>
    </HashRouter>
    );
}
