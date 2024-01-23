import { useNavigate, useLocation, Outlet } from "react-router-dom";
import ChoiceAccount from "./Account/ChoiceAccount";

function App() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
