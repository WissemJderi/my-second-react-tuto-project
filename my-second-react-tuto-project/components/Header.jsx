import globeLogo from "../images/globe.png";

export default function Header() {
  return (
    <header>
      <img src={globeLogo} alt="" />
      <p>My travel journal.</p>
    </header>
  );
}
