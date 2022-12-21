import React from "react";
import "./styles.css";
const App=() => {
  const options = [
    {
      label:"lime",
      value:"lime"
    },{
      label:"purple",
      value:"purple"
    },
    {
      label:"yellow",
      value:"yellow"
    },
    {
      label:"blue",
      value:"blue"
    },
    {
      label:"teal",
      value:"teal"
    }
  ];
    const [value,setValue] = React.useState("lime");
    const handleChange = (event) => {
      setValue(event.target.value);
    };
    return(
      <div><div className="head"><center><bold>
        COLOR CHANGER</bold></center></div>
        <select
        value={value}
        onChange={handleChange}
        style={{ backgroundColor: value,width:270}}
        >
          {options.map((option) => (
            <option value = {option.value}>{option.label}</option>
          ))}  
          </select>
          <div className="border"
          style={{
            marginTop:100,
            marginLeft:300,
            width:450,
            height:150,
            backgroundColor:value
          }}
          />
        </div>
    );
};
export default App;
