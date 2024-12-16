function LangDescription({ langs }) {
    return (
        <div className="p-4 border-2 border-gray-400 rounded-md">
            <h4 className="text-xl font-semibold">{langs[0].title}</h4>
            <p>{langs[0].description}</p>
        </div>
    );
}

export default LangDescription;
