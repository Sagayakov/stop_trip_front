import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App.js'
import { store } from './app/store/store.js'
import './app/style/index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)
