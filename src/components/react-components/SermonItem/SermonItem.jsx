import {
  convertSecondsToMinutes,
  formatDateToMMDDYYYY,
  getDayOfWeek,
} from "../../../utils/formatters";
import "./SermonItem.css";

export default function SermonItem({ sermon, width = "85%" }) {
  return (
    <div
      className="sermon-item flex flex-col justify-between"
      style={{ width }}
    >
      <div className="top">
        <div className="left">
          <img
            className="speaker-img"
            src={sermon?.speaker?.portraitURL}
            alt=""
          />
          <div className="sermon-info">
            <span className="title">{sermon?.fullTitle}</span>
            <span className="speaker">{sermon?.speaker?.displayName}</span>
            <span className="series">{sermon?.subtitle}</span>
            <span className="text">{sermon?.bibleText}</span>
          </div>
        </div>
        <div className="right">
          <div className="other-info">
            <span className="date">
              <span className="day">{getDayOfWeek(sermon?.preachDate)}</span>
              {formatDateToMMDDYYYY(sermon?.preachDate)}
            </span>
            <span className="type">{`${
              sermon?.eventType
            } | ${convertSecondsToMinutes(
              sermon?.audioDurationSeconds
            )} min`}</span>
          </div>
        </div>
      </div>
      <div className="audio-player">
        <audio controls>
          <source
            src={`https://samedia-b2-east.b-cdn.net/com-sermonaudio-sermons2/${sermon?.sermonID}.mp3?ts=1723331417`}
            type="audio/mpeg"
          />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
}
