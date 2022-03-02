import Card from "../ui/Card";
import { useRef } from "react";
import classes from "./NewMeetupform.module.css";
function NewMeetupForm(props) {
  const tittleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const decriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredTitle = tittleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAdress = addressInputRef.current.value;
    const enteredDescription = decriptionInputRef.current.value;
    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAdress,
      description: enteredDescription,
    };
    props.onAddMeetup(meetupData);
  }
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={tittleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="Image">Meetup Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={decriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}
export default NewMeetupForm;
