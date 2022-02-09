import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';


function RequireAuth({ children, isPublic = false, isPrivate = false }) {
    const isLogged = useSelector(state => state.isLogged);

    let location = useLocation();
    let path = ''

    if (isLogged && isPublic && !isPrivate) {
        path = '/products'
    }
    if (!isLogged && isPrivate) {
        path = '/'
    }


    return path === '' ? children : <Navigate to={path} state={{ from: location }} replace />;;
}
export default RequireAuth;