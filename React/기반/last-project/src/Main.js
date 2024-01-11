import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from './components/adress/Search';
import App from './components/App';


function Main(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/search" element={<Search/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Main