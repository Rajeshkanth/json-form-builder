import React, { useState } from "react";
const jsonObject = {
  form: {
    fields: [
      {
        type: "label",
        labelAttributes: {
          for: "name",
          class: "form-label",
        },
        text: "Name:",
      },

      {
        type: "input",
        inputAttributes: {
          type: "text",
          class: "form-input",
          id: "textInput",
          name: "name",
          placeholder: "Enter your Name",
          hint: "please enter your name",
        },
      },
      {
        type: "label",
        labelAttributes: {
          for: "email",
          class: "form-label",
        },
        text: "Email :",
      },
      {
        type: "input",
        inputAttributes: {
          type: "email",
          class: "form-input",
          id: "mailInput",
          name: "email",
          placeholder: "Enter your Email",
          hint: "Please Enter a valid email address",
        },
      },
      {
        type: "label",
        labelAttributes: {
          for: "telephone",
          class: "form-label",
        },
        text: "Telephone :",
      },
      {
        type: "input",
        inputAttributes: {
          type: "tel",
          class: "form-input",
          id: "telephoneInput",
          name: "telephone",
          placeholder: "Phone number",
        },
      },
      {
        type: "label",
        labelAttributes: {
          for: "number",
          class: "form-label",
        },
        text: "Number :",
      },
      {
        type: "input",
        inputAttributes: {
          type: "number",
          class: "form-input",
          id: "numberInput",
          name: "number",
          placeholder: "Enter your number",
          hint: "please enter number",
        },
      },
      {
        type: "label",
        labelAttributes: {
          for: "password",
          class: "form-label",
        },
        text: "Password :",
      },
      {
        type: "input",
        inputAttributes: {
          type: "password",
          class: "form-input",
          id: "passwordInput",
          name: "password",
          placeholder: "Enter your password",
          hint: "Enter password",
        },
      },
      {
        type: "label",
        labelAttributes: {
          for: "date",
          class: "form-label",
        },
        text: "Date :",
      },
      {
        type: "input",
        inputAttributes: {
          type: "date",
          class: "form-input",
          id: "dateInput",
          name: "date",
          placeholder: "Select date",
          hint: "select a date",
        },
      },
      {
        type: "label",
        labelAttributes: {
          for: "time",
          class: "form-label",
        },
        text: "Time :",
      },
      {
        type: "input",
        inputAttributes: {
          type: "time",
          class: "form-input",
          id: "timeInput",
          name: "time",
          placeholder: "select time",
          hint: "select time",
        },
      },
      {
        type: "label",
        labelAttributes: {
          for: "radio",
          class: "form-label",
        },
        text: "Radio :",
      },
      {
        type: "input",
        inputAttributes: {
          type: "radio",
          class: "form-input",
          id: "radioInput",
          name: "radio",
        },
      },
      {
        type: "label",
        labelAttributes: {
          for: "color",
          class: "form-label",
        },
        text: "Check Box :",
      },
      {
        type: "input",
        inputAttributes: {
          type: "checkbox",
          class: "form-input",
          id: "checkboxInput",
          name: "checkbox",
        },
      },
      {
        type: "label",
        labelAttributes: {
          for: "color",
          class: "form-label",
        },
        text: "Color :",
      },
      {
        type: "input",
        inputAttributes: {
          type: "color",
          class: "form-input",
          id: "colorInput",
          name: "color",
          hint: "select a color",
        },
      },
      {
        type: "label",
        labelAttributes: {
          for: "file",
          class: "form-label",
        },
        text: "File :",
      },
      {
        type: "input",
        inputAttributes: {
          type: "file",
          class: "form-input",
          id: "fileInput",
          name: "file",
          hint: "Please choose an file",
          accept: {
            pdf: ".pdf",
            image: "image/*",
            audio: "audio/*",
            video: "video/*",
          },
        },
      },
      {
        type: "label",
        labelAttributes: {
          for: "select",
          class: "form-label",
        },
        text: "Select :",
      },
      {
        type: "input",
        inputAttributes: {
          type: "select",
          class: "form-input",
          id: "selectInput",
          name: "select",
          option: {
            option1: "opt 1",
            option2: "opt 2",
            option3: "opt 3",
          },
        },
      },
      {
        type: "label",
        labelAttributes: {
          for: "textarea",
          class: "form-label",
        },
        text: "TextArea :",
      },
      {
        type: "input",
        inputAttributes: {
          type: "textarea",
          class: "form-input",
          id: "textAreaInput",
          name: "textarea",
        },
      },

      // btn
      {
        type: "button",
        buttonAttributes: {
          type: "submit",
          class: "btn",
          id: "submit-btn",
        },
        name: "Submit",
      },
      {
        type: "button",
        buttonAttributes: {
          type: "reset",
          class: "btn",
          id: "reset-btn",
        },
        name: "Reset",
      },
      {
        type: "button",
        buttonAttributes: {
          type: "button",
          class: "btn",
          id: "button",
        },
        name: "Button",
      },
    ],
  },
};
const fields = jsonObject.form.fields;
function App() {
  const [regex] = useState({
    regexAlpha: /^[A-Za-z]+$/,
    regexNum: /^[0-9]+$/,
  });
  const [name, setName] = useState("");
  const [nameAlert, setNameAlert] = useState("");
  const [mail, setMail] = useState("");
  const [tele, setTele] = useState("");
  const [teleAlert, setTeleAlert] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [textarea, setTextArea] = useState("");

  const handleInput = (input, e) => {
    const value = e.target.value;
    switch (input) {
      case "name":
        if (regex.regexAlpha.test(value) || value === "") {
          setName(value);
          setNameAlert("");
        } else {
          setNameAlert("Alphabets only allowed");
        }

        break;
      case "email":
        setMail(value);
        break;
      case "telephone":
        if (regex.regexNum.test(value) || value === "") {
          setTele(value);
          setTeleAlert("");
        } else {
          setTeleAlert("Numbers only allowed");
        }
        break;
      case "number":
        setNumber(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "textarea":
        setTextArea(value);
        break;

      default:
        break;
    }
  };

  const submit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div>
        <form action="" className="form-container">
          {fields.map((element, index) => {
            if (element.type === "label") {
              return (
                <label key={index} htmlFor={element.labelAttributes.for}>
                  {element.text}
                </label>
              );
            } else if (element.type === "input") {
              const inputAttributes = element.inputAttributes;
              if (inputAttributes.type !== "select") {
                return (
                  <div key={index}>
                    {inputAttributes.type !== "textarea" ? (
                      <input
                        key={index}
                        type={inputAttributes.type}
                        className={inputAttributes.class}
                        id={inputAttributes.id}
                        name={inputAttributes.name}
                        placeholder={inputAttributes.placeholder}
                        hint={inputAttributes.hint}
                        value={
                          inputAttributes.name === "name"
                            ? name
                            : inputAttributes.name === "telephone"
                            ? tele
                            : inputAttributes.name === "email"
                            ? mail
                            : inputAttributes.name === "number"
                            ? number
                            : inputAttributes.name === "password"
                            ? password
                            : ""
                        }
                        onChange={(e) => handleInput(inputAttributes.name, e)}
                      />
                    ) : (
                      <textarea
                        key={index}
                        type={inputAttributes.type}
                        className={inputAttributes.class}
                        id={inputAttributes.id}
                        name={inputAttributes.name}
                        placeholder={inputAttributes.placeholder}
                        hint={inputAttributes.hint}
                        value={
                          inputAttributes.name === "textarea" ? textarea : ""
                        }
                        onChange={(e) => handleInput(inputAttributes.name, e)}
                      />
                    )}
                    {inputAttributes.name === "name"
                      ? !regex.regexAlpha.test(name)
                        ? nameAlert
                        : null
                      : null}
                    {inputAttributes.name === "telephone"
                      ? !regex.regexNum.test(tele)
                        ? teleAlert
                        : null
                      : null}
                  </div>
                );
              }

              return (
                <select
                  key={index}
                  type={inputAttributes.type}
                  className={inputAttributes.class}
                  id={inputAttributes.id}
                  name={inputAttributes.name}
                  hint={inputAttributes.hint}
                >
                  {Object.values(inputAttributes.option).map((option, ind) => (
                    <option key={ind} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              );
            }
            if (element.type === "button") {
              return (
                <button
                  key={index}
                  type={element.buttonAttributes.type}
                  className={element.buttonAttributes.class}
                  id={element.buttonAttributes.id}
                  onClick={submit}
                >
                  {element.name}
                </button>
              );
            }
          })}
        </form>
      </div>
    </>
  );
}

export default App;
