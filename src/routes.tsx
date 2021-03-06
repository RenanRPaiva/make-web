import { Route, Routes as RoutesRD } from 'react-router-dom'
import PublicOnlyRoute from './components/PublicOnlyRoute'
import HomeView from './views/Home'
import LoginView from './views/Login'
import { NotFoundView } from './views/NotFound'
import RegisterView from './views/Register'

export default function Routes() {
    return (
        <RoutesRD>
            <Route path='/' element={<HomeView />} />
            <Route
                path='/cadastro'
                element={
                    <PublicOnlyRoute>
                        <RegisterView />
                    </PublicOnlyRoute>
                }
            />
            <Route
                path='/login'
                element={
                    <PublicOnlyRoute>
                        <LoginView />
                    </PublicOnlyRoute>
                }
            />
            <Route path='*' element={<NotFoundView />} />
        </RoutesRD>
    )
}
