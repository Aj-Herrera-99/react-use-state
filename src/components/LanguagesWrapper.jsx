import LangBtn from "./LanguageBtn";
import LangDescription from "./LanguageDescription";

function LanguagesWrapper({ langs }) {
    return (
        <div className="flex flex-col gap-10 max-w-[700px] mx-auto">
            <div className="flex gap-4">
                {/* Language */}
                {langs.map((lang) => (
                    <LangBtn key={lang.id} lang={lang}></LangBtn>
                ))}
            </div>
            {/* Description */}
            <LangDescription langs={langs}></LangDescription>
        </div>
    );
}

export default LanguagesWrapper;
