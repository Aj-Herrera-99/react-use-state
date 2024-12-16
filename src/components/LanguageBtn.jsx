function LangBtn({ lang }) {
    return (
        <button
            key={lang.id}
            className="px-4 py-2 text-white bg-blue-600 rounded-md"
        >
            {lang.title}
        </button>
    );
}

export default LangBtn;
