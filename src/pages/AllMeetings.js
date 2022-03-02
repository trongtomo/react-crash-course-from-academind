import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";
function AllMeetings() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMetups, setLoadedMeetups] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-getting-started-3b161-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }
        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading....</p>
      </section>
    );
  }
  return (
    <section>
      <h1>All Meeting version 2</h1>
      <MeetupList meetups={loadedMetups} />
    </section>
  );
}
export default AllMeetings;
