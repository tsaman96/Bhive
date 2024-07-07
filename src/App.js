import './App.scss'
import {
    Header,
    Topbar,
    Footer,
    DownloadNow,
    Features,
    Overview,
} from './components'

function App() {
    return (
        <div className="App">
            <Topbar />
            <Header />
            <Features />
            <Overview />
            <DownloadNow />
            <Footer />
        </div>
    )
}

export default App
