import Header from "./components/Header";
import Main from "./components/Main";
import languages from "./data/languages";

const langs = [...languages];

function App() {
    return (
        <>
            {/* Header */}
            <Header title={"Learn Web Development"}></Header>

            {/* Main */}
            <Main langs={langs}></Main>
        </>
    );
}

export default App;
