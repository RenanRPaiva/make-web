import { Route, Routes as RoutesRD } from 'react-router-dom'
import HomeView from './views/Home'
import { NotFoundView } from './views/NotFound'

export default function Routes () {
    return (
        <RoutesRD>
            <Route path='/' element={<HomeView />} />
            <Route path='*' element={<NotFoundView />} />
        </RoutesRD>
    )
}