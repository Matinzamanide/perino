import { IChildren } from "../../types/types";
import BottomNavigation from "../bottom-nav/bottom-navigation";
import Navbar from "../navbar/navbar";
import ScrollProgressBar from "../progress-bar/progress-bar";

const Layout :React.FC<IChildren> = ({children}) => {
    return ( 
        <div className="bg-gradient-to-b from-[#FEF2F5] to-[#FFDDE6]">
            <Navbar/>
            <ScrollProgressBar/>
            {children}
            <BottomNavigation/>

        </div>
     );
}
 
export default Layout;