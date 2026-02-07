import { useState } from "react";
import LoadingApp from "./LoadingApp";
import Navbar from "./Navbar";

function App() {
    const [loadingFinished, setLoadingFinished] = useState(false);

    return (
        <>
            <Navbar loadingFinished={loadingFinished} />
            {loadingFinished ?
                '' :
                <LoadingApp setLoadingFinished={setLoadingFinished} />
            }
        </>
    )
}

export default App;