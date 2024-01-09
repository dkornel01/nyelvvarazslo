import {Outlet,Link} from "react-route-dom";

const Layout=() =>{
    return (
        <>
            <nav>
                <ul>
                  <li>
                    <Link to="/Gepel">Gepeles</Link>
                  </li>
                  <li>
                    <Link to="/Rendez">Rendezes</Link>
                  </li>
                  <li>
                    <Link to="/Valszto">Valaszto</Link>
                  </li>
                  <li>
                    <Link to="/app.js"></Link>
                  </li>
                </ul>
            </nav>
        <Outlet />
      </>
    )
};
export default Layout;
