import React from "react";
import PhoneContainer from "./AppExampleScreenComponents/PhoneContainer";
import createAcc from "../pictures/1.png";
import orgApproved from "../pictures/2.png";
import teams from "../pictures/3.png";
import teamManagement from "../pictures/4.png";
import homeScreen from "../pictures/5.png";

const phoneScreen1 = {
  number: "1",
  image: createAcc,
  heading: "Register",
  text: "Seamlessly bring the school community together",
};
const phoneScreen2 = {
  number: "2",
  image: orgApproved,
  heading: "Organization Setup",
  text: "Add your organization to the platform (once approved you will be the organization admin for selected organization)",
};
const phoneScreen3 = {
  number: "3",
  image: teams,
  heading: "Add Teams",
  text: "Add all of your organization's different teams",
};
const phoneScreen4 = {
  number: "4",
  image: teamManagement,
  heading: "Team Management",
  text: "Set up a schedule for each team. You can invite other users (coaches, assistant coaches, or any other user) to help create or edit your schedule",
};
const phoneScreen5 = {
  number: "5",
  image: homeScreen,
  heading: "Home Screen",
  text: "All done! You should now be able to see your events in your organization's calendar",
};

function AppExampleScreen() {
  return (
    <div className="example-screens-container">
      <PhoneContainer
        number={phoneScreen1.number}
        image={phoneScreen1.image}
        heading={phoneScreen1.heading}
        text={phoneScreen1.text}
      />
      <PhoneContainer
        number={phoneScreen2.number}
        image={phoneScreen2.image}
        heading={phoneScreen2.heading}
        text={phoneScreen2.text}
      />
      <PhoneContainer
        number={phoneScreen3.number}
        image={phoneScreen3.image}
        heading={phoneScreen3.heading}
        text={phoneScreen3.text}
      />
      <PhoneContainer
        number={phoneScreen4.number}
        image={phoneScreen4.image}
        heading={phoneScreen4.heading}
        text={phoneScreen4.text}
      />
      <PhoneContainer
        number={phoneScreen5.number}
        image={phoneScreen5.image}
        heading={phoneScreen5.heading}
        text={phoneScreen5.text}
      />
    </div>
  );
}

export default AppExampleScreen;
