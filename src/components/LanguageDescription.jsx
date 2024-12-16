function LangDescription({ activeLang }) {
    return (
        <div className="p-4 border-2 border-gray-400 rounded-md">
            <h4 className="text-xl font-semibold">
                {activeLang?.title || "nessun linguaggio selezionato"}
            </h4>
            <p className="mt-2">{activeLang?.description}</p>
        </div>
    );
}

export default LangDescription;
