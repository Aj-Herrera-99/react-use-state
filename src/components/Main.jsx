import LanguagesWrapper from "./LanguagesWrapper";

function Main({ langs }) {
    return (
        <main className="p-16 bg-green-300 ">
            <LanguagesWrapper langs={langs}></LanguagesWrapper>
        </main>
    );
}

export default Main;
