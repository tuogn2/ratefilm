import Home from "~/Component/Page/Home"
import Profile from "~/Component/Page/Profile";
import Film from "~/Component/Page/Film";
import TypefilmLayout from "~/Component/Layout/TypefilmLayout";
import routes from "~/config/router";
import Detailfilm from "~/Component/Page/Detailfilm";
const publicRoute=[
    {path:routes.home,component:Home},
    {path:routes.profile, component:Profile},
    {path:routes.popular,component:Film,Layout:TypefilmLayout},
    {path:routes.Now_Playing,component:Film,Layout:TypefilmLayout},
    {path:routes.Upcoming,component:Film,Layout:TypefilmLayout},
    {path:routes.top_rated,component:Film,Layout:TypefilmLayout},
    {path:routes.popularid,component:Detailfilm},
    {path:routes.Now_Playingid,component:Detailfilm},
    {path:routes.Upcomingid,component:Detailfilm},
    {path:routes.top_ratedid,component:Detailfilm},
 
]

export {publicRoute};