import PropTypes from "prop-types";
import "../src/entry.css";
export default function Entry(props) {
  return (
    <article className="entry">
      <img src={props.img.src} alt={props.img.alt} />
      <div className="content">
        <div className="entry-header">
          <div className="location">
            <img
              src="./images/marker.png"
              alt="marker icon"
              className="picture"
            />
            <span>{props.country}</span>
          </div>
          <a href={props.googleMapsLink} target="_blank" rel="noreferrer">
            View on Google Maps
          </a>
        </div>
        <h2>{props.title}</h2>
        <p className="date">{props.date}</p>
        <p className="description">{props.text}</p>
      </div>
    </article>
  );
}

Entry.propTypes = {
  img: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }),
  title: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  googleMapsLink: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
