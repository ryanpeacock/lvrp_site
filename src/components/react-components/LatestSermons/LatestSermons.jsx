import { useEffect, useState } from "react";
import "./LatestSermons.css";
import SermonItem from "../SermonItem/SermonItem";

export const LatestSermons = () => {
  const [sermons, setSermons] = useState([]);
  const fetchSermons = async () => {
    const url = "/api/sermons";
    const headers = {
      "Content-Type": "application/json",
      "X-API-Secret": import.meta.env.PUBLIC_API_ACCESS_SECRET,
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
