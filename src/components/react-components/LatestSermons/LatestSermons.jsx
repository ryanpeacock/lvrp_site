import { useEffect, useState } from "react";
import "./LatestSermons.css";
import SermonItem from "../SermonItem/SermonItem";

export const LatestSermons = () => {
  const [sermons, setSermons] = useState([]);
  const fetchSermons = async () => {
    const url =
      "https://api.sermonaudio.com/v2/node/sermons?&requireAudio=true&includePublished=true&page=1&lite=true&liteBroadcaster=true&pageSize=4&broadcasterID=lasvegasrpc";
    const headers = {
      "Content-Type": "application/json",
      "X-Api-Key": import.meta.env.PUBLIC_SERMON_AUDIO_SECRET,
    };
    try {
      const response = await fetch(url, {
        method: "GET",
        headers,
      });
      const data = await response.json();
      setSermons(data.results);
    } catch (error) {
      console.error({ error });
    }
  };
  useEffect(() => {
    fetchSermons();
  }, []);
  return (
    <section id="media-section">
      <div className="container">
        <h2>Latest Sermons</h2>
        <div className="sermon-list">
          {sermons.map((sermon) => (
            <SermonItem sermon={sermon} />
          ))}
        </div>
      </div>
    </section>
  );
};
