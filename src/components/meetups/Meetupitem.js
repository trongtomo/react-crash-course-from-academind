import classes from "./Meetupitem.module.css";
import Card from "../ui/Card";
import { useContext } from "react";
import FavoriteContext from "../../store/favorites-context";
function MeetupItem(props) {
  const favoriteCtx = useContext(FavoriteContext);
  const itemIsFavorite = favoriteCtx.itemIsFavorite(props.id);
  function toogleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoriteCtx.removeFavorite(props.id);
    } else {
      favoriteCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toogleFavoriteStatusHandler}>
            {itemIsFavorite ? "Remove from Favorite" : "To Favorite"}
          </button>
        </div>
      </Card>
    </li>
  );
}
export default MeetupItem;
