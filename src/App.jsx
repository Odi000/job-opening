import { use, useState } from "react";
import LoadingApp from "./LoadingApp";
import Navbar from "./Navbar";
import JobPaper from "./JobPaper";

function App() {
    const [loadingFinished, setLoadingFinished] = useState(false);
    const [decorationFinished, serDecorationFinished] = useState(false);

    return (
        <>
            <Navbar loadingFinished={loadingFinished} serDecorationFinished={serDecorationFinished} />
            {loadingFinished ?
                '' :
                <LoadingApp setLoadingFinished={setLoadingFinished} />
            }
            <JobPaper decorationFinished={decorationFinished} />
        </>
    )
}
//finished
export default App;