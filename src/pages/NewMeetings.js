import NewMeetupForm from "../components/meetups/NewMeetupform";
import { useNavigate } from "react-router-dom";
function NewMeeting() {
  const navigate = useNavigate();
  function AddMeetupHandler(meetupData) {
    fetch(
      "https://react-getting-started-3b161-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      navigate("/", { replace: true });
    });
  }
  return (
    <section>
      <h1>
        Add New Meetup
        <NewMeetupForm onAddMeetup={AddMeetupHandler} />
      </h1>
    </section>
  );
}
export default NewMeeting;
