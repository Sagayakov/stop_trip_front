import { Controls } from './features/controls'

import { PopularAdverts } from './features/popularAdverts'
import { PopularCategories } from './features/popularCategories'
import { Footer, Header } from './widgets'


function App() {
    return (
        <>
            <Header />
            <Controls />
            <PopularCategories />
            <PopularAdverts />
            <Footer />
        </>
    )
}

export default App
