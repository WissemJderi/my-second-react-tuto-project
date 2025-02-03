import PropTypes from "prop-types";
import "../src/entry.css";
export default function Entry(props) {
  return (
    <article className="entry">
      <img src={props.entry.img.src} alt={props.entry.img.alt} />
      <div className="content">
        <div className="entry-header">
          <div className="location">
            <img
              src="./images/marker.png"
              alt="marker icon"
              className="picture"
            />
            <span>{props.entry.country}</span>
          </div>
          <a href={props.entry.googleMapsLink} target="_blank" rel="noreferrer">
            View on Google Maps
          </a>
        </div>
        <h2>{props.entry.title}</h2>
        <p className="date">{props.entry.date}</p>
        <p className="description">{props.entry.text}</p>
      </div>
    </article>
  );
}

Entry.propTypes = {
  entry: PropTypes.shape({
    img: PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }).isRequired,
    title: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    googleMapsLink: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};
