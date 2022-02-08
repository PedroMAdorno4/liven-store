import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';


function RequireAuth({ children }) {
    const isLogged = useSelector(state => state.isLogged);

    let location = useLocation();

    if (!isLogged) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}
export default RequireAuth;