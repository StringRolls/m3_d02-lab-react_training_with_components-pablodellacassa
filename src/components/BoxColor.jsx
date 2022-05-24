export default function BoxColor(props) {
  const { r, g, b } = props;
  const divStyle = {
    backgroundColor: `rgb(${r},${g},${b})`,
  };

  const hexColor = (r, g, b) =>
    `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;

  return (
    <div style={divStyle} className="colorBox-container">
      <p>
        rgb({r},{g},{b})
      </p>
      <p>{hexColor(r, g, b)}</p>
    </div>
  );
}
