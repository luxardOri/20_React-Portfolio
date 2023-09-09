import data from "./data.json";
import myimage from "../assets/images/passwordGenerator.jpg";

function Project() {
  const fontColor = "white";
  return (
    <div>
      <div style={{ color: fontColor }}>
        {data.map((item) => (
          <div>
            <br />
            {item.title}
            <br />
            <img
              src={item.img}
              alt={item.description}
              style={{ width: "300px", height: "200px" }}
            />
            <br />
            <a href={item.githubLInk}>GitHub Link</a>
            <br />
            <a href={item.liveLink}>Deployed Link</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
