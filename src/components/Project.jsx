import data from "./data.json";

function Project() {
  const fontColor = "white";
  return (
    <div>
      <div style={{ color: fontColor }}>
        {data.map((item) => (
          <p>{item.title}</p>
        ))}
      </div>
    </div>
  );
}

export default Project;
