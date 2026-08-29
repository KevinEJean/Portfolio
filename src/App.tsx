import Tabs from "./app/tabs";
import Index from "./app/index";
import Footer from "./app/Footer";
import "./App.css";

const App = () => {
    return (
        <section className="rootApp">
            <div className="divTabs">
                <Tabs />
            </div>
            
            <div className="divIndex">
                <Index />
            </div>

            <div className="divFooter">
                <Footer />
            </div>
        </section>
    )
}

export default App;