import LanguagesWrapper from "./LanguagesWrapper";

function Main({ langs }) {
    return (
        <main className="py-16">
            <LanguagesWrapper langs={langs}></LanguagesWrapper>
        </main>
    );
}

export default Main;
