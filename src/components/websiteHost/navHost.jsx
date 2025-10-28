import { BrowserRouter, Route, Routes } from 'react-router';

export default function navHost(props) {

    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={props.homePage} />
            <Route index element={}/>
            <Route path="/login" element={}></Route>
          <Route path="/register" element={}></Route>
          <Route path="/homePage" element={}></Route>
          <Route path="/checkOut" element={}></Route>
          <Route path="/store" element={}></Route>
          <Route path="/accountPage" element={}></Route>
          <Route path="*" element={} />
        </Routes>
    </BrowserRouter>
    );
}
