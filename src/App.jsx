import languages from "./data/languages";

const langs = [...languages];

function App() {
    return (
        <>
            {/* Header */}
            <header className="p-4 bg-red-300">
                <h1 className="text-5xl font-semibold">
                    Learn Web Development
                </h1>
            </header>

            {/* Main */}
            <main className="p-16 bg-green-300 ">
                {/* LanguagesWrapper */}
                <div className="flex flex-col gap-10 max-w-[700px] mx-auto">
                    <div className="flex gap-4">
                        {/* Language */}
                        {langs.map((lang) => (
                            <button className="px-4 py-2 text-white bg-blue-600 rounded-md">
                                {lang.title}
                            </button>
                        ))}
                    </div>
                    {/* Description */}
                    <div className="p-4 border-2 border-gray-400 rounded-md">
                        <h4 className="text-xl font-semibold">
                            {langs[0].title}
                        </h4>
                        <p>{langs[0].description}</p>
                    </div>
                </div>
            </main>
        </>
    );
}

export default App;
