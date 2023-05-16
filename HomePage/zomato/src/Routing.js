import { BrowserRouter , Route} from "react-router-dom";
import Home from "./component/Home/Home";
import Header from "./Header";
import Footer from "./Footer";
import PlaceOrder from "./component/booking/PlaceOrder";
import Details from "./component/details/Details.js";
import ListingApi from "./component/Listing/ListingApi.js";
import ViewOrder from "./component/booking/ViewOrder";
import Login from "./component/auth/Login";
import Register from "./component/auth/Register";

const Routing = () =>
{
return(
    <BrowserRouter>
    <>
    <Header/>

    <Route exact path ="/" component = {Home }/>
    <Route path ="/listing/:mealId" component = {ListingApi}/>
  

<Route path="/detailsrestaurantid" component={Details} />
<Route path="/placeOrder/:restName" component={PlaceOrder} />
<Route path="/viewBooking/:restName" component={ViewOrder} />
<Route path="/login" component={Login} />
<Route path="/register" component={Register} />
    <Footer/>

    </>
    </BrowserRouter>
)
}
export default Routing;