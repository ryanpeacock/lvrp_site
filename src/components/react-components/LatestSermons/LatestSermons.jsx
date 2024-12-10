import { useEffect, useState } from "react";
import "./LatestSermons.css";
import { getSermons } from "../../../utils/tools";
import SermonItem from "../SermonItem/SermonItem";

export const LatestSermons = () => {
  const [sermons, setSermons] = useState([]);
  const fetchSermons = async () => {
    const fetchedSermons = await getSermons(4);
    console.log({ fetchedSermons });
    setSermons(fetchedSermons);
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
