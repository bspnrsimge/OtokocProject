import Login from './Login/Login'
import Dashboard from './Dashboard/Dashboard';
import {
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
function PageRouter() {
  
  return (
    <div id='router'>
      <Routes>
        <Route path="/">
          <Route index element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<h1>kayboldun</h1>} />
        </Route>
      </Routes>
    </div>
  );
}
export default PageRouter;
