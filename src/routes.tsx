import { Route, Routes as RoutesRD } from 'react-router-dom'
import HomeView from './views/Home'

export default function Routes () {
    return (
        <RoutesRD>
            <Route path='/' element={<HomeView />} />
        </RoutesRD>
    )
}