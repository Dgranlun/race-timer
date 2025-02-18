import Contestant from "./Contestant.jsx";
import { contestantStyles } from "../styles";
import { contestants } from "../assets/data";
import { useState } from "react";

function Race(props) {
  const [allContestants, setAllContestants] = useState(contestants);
  return (
    <div style={contestantStyles.contestantList}>
      {props.currentTime}
      {allContestants.map((contestant) => (
        <Contestant
          key={contestant.id}
          name={contestant.name}
          xpos={contestant.xpos}
        />
      ))}
    </div>
  );
}

export default Race;
