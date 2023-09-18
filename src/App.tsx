import { Controls } from './features/controls'
import { Footer } from './features/footer'
import { Header } from './features/header'
import { PopularAdverts } from './features/popularAdverts'
import { PopularCategories } from './features/popularCategories'

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
