import { Route, Routes as RoutesRD } from 'react-router-dom'
import HomeView from './views/Home'
import { NotFoundView } from './views/NotFound'
import RegisterView from './views/Register'

export default function Routes () {
    return (
        <RoutesRD>
            <Route path='/' element={<HomeView />} />
            <Route path='/cadastro' element={<RegisterView />} />
            <Route path='*' element={<NotFoundView />} />
        </RoutesRD>
    )
}