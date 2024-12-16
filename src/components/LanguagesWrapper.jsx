import { useState } from "react";
import LangBtn from "./LanguageBtn";
import LangDescription from "./LanguageDescription";

function LanguagesWrapper({ langs }) {
    const [activeLangId, setActiveLangId] = useState(-1);

    const activeLang = langs.find((lang) => lang.id == activeLangId);

    return (
        <section className="flex flex-col gap-10 max-w-[700px] mx-auto">
            <nav className="flex gap-4">
                {/* Language */}
                {langs.map((lang) => (
                    <LangBtn
                        key={lang.id}
                        id={lang.id}
                        title={lang.title}
                        activeLangId={activeLangId}
                        setActiveLangId={setActiveLangId}
                    ></LangBtn>
                ))}
            </nav>
            {/* Description */}
            <LangDescription activeLang={activeLang}></LangDescription>
        </section>
    );
}

export default LanguagesWrapper;
