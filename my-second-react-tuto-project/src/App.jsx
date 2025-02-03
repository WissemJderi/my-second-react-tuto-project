import "./App.css";
import Header from "../components/Header";
import Entry from "../components/Entry";
import data from "./data.js";

function App() {
  const entryElements = data.map((entry) => {
    return (
      <Entry
        key={entry.id}
        img={{
          src: entry.img.src,
          alt: entry.img.alt,
        }}
        title={entry.title}
        country={entry.country}
        googleMapsLink={entry.googleMapsLink}
        date={entry.dates}
        text={entry.text}
      />
    );
  });
  return (
    <>
      <Header />
      {entryElements}
    </>
  );
}

export default App;
