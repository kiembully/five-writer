import { useRouter } from "next/dist/client/router";
import GuestNav from "./GuestNav";
import ProfileNav from "./ProfileNav";

const Navigation = () => {
    const router = useRouter();
    function handleNavigation() {
        const guestPages = ['/','/login', '/register', '/forgot'];
        return guestPages.includes(router.pathname)
    }

    return (
        <>
        {handleNavigation()?
        <GuestNav />
        :
        <ProfileNav />
        }
        </>
    );
}

export default Navigation;