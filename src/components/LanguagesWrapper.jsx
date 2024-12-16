import { useState } from "react";
import LangBtn from "./LanguageBtn";
import LangDescription from "./LanguageDescription";

function LanguagesWrapper({ langs }) {

    const [activeLangId, setActiveLangId] = useState(1);
    
    const activeLang = langs.find(lang => lang.id == activeLangId);

    return (
        <div className="flex flex-col gap-10 max-w-[700px] mx-auto">
            <div className="flex gap-4">
                {/* Language */}
                {langs.map((lang) => (
                    <LangBtn key={lang.id} id={lang.id} lang={lang} setActiveLangId={setActiveLangId}></LangBtn>
                ))}
            </div>
            {/* Description */}
            <LangDescription activeLang={activeLang}></LangDescription>
        </div>
    );
}

export default LanguagesWrapper;
