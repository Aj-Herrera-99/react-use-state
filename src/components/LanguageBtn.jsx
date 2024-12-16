function LangBtn({ id, activeLangId, lang, setActiveLangId }) {
    // actions
    const handleBtnClick = (e) => {
        const activeId = e.target.id;
        setActiveLangId(activeId);
    };

    // classes
    const btnDefault = "px-4 py-2 text-white bg-blue-600 rounded-md";
    const btnSelected = "bg-yellow-600 text-black";

    return (
        <button
            id={id}
            onClick={handleBtnClick}
            className={`${btnDefault} ${id==activeLangId && btnSelected}`}
        >
            {lang.title}
        </button>
    );
}

export default LangBtn;
