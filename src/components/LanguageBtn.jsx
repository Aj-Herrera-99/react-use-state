function LangBtn({ id, activeLangId, title, setActiveLangId }) {
    // actions
    const handleBtnClick = (e) => {
        const activeId = e.target.id;
        setActiveLangId((currId) => {
            if (currId != activeId) {
                return activeId;
            } else {
                return -1;
            }
        });
    };

    // classes
    const btnDefault = "px-4 py-2 text-white bg-blue-600 rounded-md hover:scale-105 focus:scale-105 focus:outline outline-1 outline-black";
    const btnSelected = "bg-yellow-500 text-black";

    return (
        <button
            id={id}
            onClick={handleBtnClick}
            className={`${btnDefault} ${id == activeLangId && btnSelected}`}
        >
            {title}
        </button>
    );
}

export default LangBtn;
