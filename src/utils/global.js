import HomeNavigationPeru from "../navigation/HomeNavigationPeru";
import HomeNavigationChile from "../navigation/HomeNavigationChile";
import HomeNavigationColombia from "../navigation/HomeNavigationColombia";

const GlobalUtil = {
    countrie: 'CHILE',
    getHomeNavigation: function () {
        if (this.countrie === "CHILE") {
            return HomeNavigationChile;
        } else {
            if (this.countrie === "PERU") {
                return HomeNavigationPeru;
            } else {
                return HomeNavigationColombia;
            }
        }
    }
}

export default GlobalUtil;