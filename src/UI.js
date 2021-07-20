import React from "react";

export const Ui = () => {
  const data = [
    {
      title: "Text",
      button: "button",
      bg: "red",
    },
    {
      title: "Text",
      button: "button",
      with: "75%",
    },
    {
      title: "Text",
      button: "button",
      with: "65%",
      border: "lightgreen",
    },
    {
      title: "Text",
      button: "button",
      with: "65%",
      border: "lightgreen",
      title2: "text",
      borderW: "solid",
      paddingLeft: "10px",
      paddingRight: "10px",
    },
    {
      title: "Text",
      button: "button",
      with: "65%",
      border: "lightgreen",
      title2: "text",
      borderW: "solid",
      paddingLeft: "10px",
      paddingRight: "10px",
    },
    {
      title: "Text",
      button: "button",
      with: "75%",
    },
    {
      title: "Text",
      button: "button",
      with: "75%",
    },
    {
      title: "Text",
      button: "button",
      with: "75%",
      title2: "text",
      borderW: "solid",
      paddingLeft: "10px",
      paddingRight: "10px",
      title2: "text",
      borderW: "solid",
      paddingLeft: "10px",
      paddingRight: "10px",
    },
    {
      title: "Text",
      button: "button",
      with: "75%",
      title2: "text",
      borderW: "solid",
      paddingLeft: "10px",
      paddingRight: "10px",
      title2: "text",
      borderW: "solid",
      paddingLeft: "10px",
      paddingRight: "10px",
    },
    {
      title: "Text",
      button: "button",
      with: "75%",
      title2: "text",
      borderW: "solid",
      paddingLeft: "10px",
      paddingRight: "10px",
      title2: "text",
      borderW: "solid",
      paddingLeft: "10px",
      paddingRight: "10px",
    },
    {
      title: "Text",
      button: "button",
      with: "75%",
    },
  ];

  return (
    <div>
      <h1 className="outerText">text</h1>
      <div className="topContainer">
        <div className="topTextContainer">
          <h1 className="topText">text</h1>
          <div className="innerText">
            <h1 className="topText">text</h1>
            <h1 className="topText">text</h1>
          </div>
        </div>
        <div>
          <button className="TopButton">Button</button>
        </div>
      </div>
      <div className="mapData center-col">
        {data.map((item) => (
          <div
            className="container"
            style={{
              background: item.bg,
              maxWidth: item.with,
              borderColor: item.border,
            }}
          >
            <div className="mapInnerText">
              <h1 className="topText">{item.title}</h1>
              <div className="main">
                <h1
                  className="inrText"
                  style={{
                    border: item.borderW,
                    paddingLeft: item.paddingLeft,
                    paddingRight: item.paddingRight,
                  }}
                >
                  {item.title2}
                </h1>
                <h1
                  className="inrText"
                  style={{
                    border: item.borderW,
                    paddingLeft: item.paddingLeft,
                    paddingRight: item.paddingRight,
                  }}
                >
                  {item.title2}
                </h1>
                <h1
                  className="inrText"
                  style={{
                    border: item.borderW,
                    paddingLeft: item.paddingLeft,
                    paddingRight: item.paddingRight,
                  }}
                >
                  {item.title2}
                </h1>
                <h1
                  className="inrText"
                  style={{
                    border: item.borderW,
                    paddingLeft: item.paddingLeft,
                    paddingRight: item.paddingRight,
                  }}
                >
                  {item.title2}
                </h1>
              </div>
            </div>
            <button className="innerButton">{item.button}</button>
          </div>
        ))}
      </div>
    </div>
  );
};
