import { useContext } from "react";

import FavouritesContext from "../store/favoruties-context";
import MeetUpList from "../components/meetups/MeetupList";

function FavouritesPage() {
  const favouritesCtx = useContext(FavouritesContext);

  let content;

  if (favouritesCtx.totalFavourites === 0) {
    content = <h3>You have no favourites yet. Start adding some?</h3>;
  } else {
    content = <MeetUpList meetups={favouritesCtx.favourites} />;
  }

  return (
    <section>
      <h1>My Favourites</h1>
      {content}
    </section>
  );
}

export default FavouritesPage;
