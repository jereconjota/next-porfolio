import Navbar from "./Navbar";
import { useEffect } from "react";
import { useRouter } from "next/router";
import NProgress from "nprogress";


const Layout = ({ children, footer = true }) => {

    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = (url) => {
            console.log(url);
            NProgress.start();
        };

        router.events.on("routeChangeStart", handleRouteChange);

        router.events.on("routeChangeComplete", () => NProgress.done());

        router.events.on("routeChangeError", () => nProgress.done());

        return () => {
            router.events.off("routeChangeStart", handleRouteChange);
        };
    }, []);

    return (<>
        <Navbar />
        <main className="container py-4">
            {children}
        </main>

        {footer && (
            <footer className="bg-dark text-light text-center">
                <div className="container p-4">
                    <h3 className="m-0">&copy; jereconjota</h3>
                    <p className="m-0">{new Date().getFullYear()}</p>
                    <p>All rights Reserved.</p>
                </div>
            </footer>
        )}
    </>
    );
}
export default Layout;

