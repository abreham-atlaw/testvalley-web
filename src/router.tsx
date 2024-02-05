import { createBrowserRouter } from "react-router-dom";
import { MainView } from "./features/core/presentation/views/MainView";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainView/>
    }
])

export default router;