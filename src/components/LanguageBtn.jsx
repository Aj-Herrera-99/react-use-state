function LangBtn({ id, lang, setActiveLangId }) {

    const handleBtnClick = (e) => {
        console.log(e.target);
        const id = e.target.id;
        
        console.log(id);
        setActiveLangId(id);
    }       

    return (
        <button
            id={id}
            onClick={handleBtnClick}
            className="px-4 py-2 text-white bg-blue-600 rounded-md"
        >
            {lang.title}
        </button>
    );
}

export default LangBtn;
