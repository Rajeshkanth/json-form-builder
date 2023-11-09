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
  const [regex, setRegex] = useState({
    regexAlpha: /^[A-Za-z]+$/,
    regexNum: /^[0-9]+$/,
    regexSpecialCharacters: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/,
  });
  const [name, setName] = useState("");
  const [nameAlert, setNameAlert] = useState("");
  const [tele, setTele] = useState("");
  const [teleAlert, setTeleAlert] = useState("");

  const handleInput = (input, e) => {
    switch (input) {
      case "name":
        regex.regexAlpha.test(e.target.value) || e.target.value === ""
          ? setName(e.target.value)
          : setNameAlert("Alphabets only allowed");
        break;
      case "tele":
        regex.regexNum.test(e.target.value) || e.target.value === ""
          ? setTele(e.target.value)
          : setTeleAlert("Numbers only allowed");
      default:
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
            }
            if (
              element.type === "input" &&
              element.inputAttributes.type === "text"
            ) {
              return (
                <>
                  <input
                    key={index}
                    type={element.inputAttributes.type}
                    className={element.inputAttributes.class}
                    id={element.inputAttributes.id}
                    name={element.inputAttributes.name}
                    placeholder={element.inputAttributes.placeholder}
                    hint={element.inputAttributes.hint}
                    value={name}
                    onChange={(e) => handleInput("name", e)}
                  />
                  {!regex.regexAlpha.test(name) ? nameAlert : null}
                </>
              );
            } else if (
              element.type === "input" &&
              element.inputAttributes.type === "email"
            ) {
              return (
                <input
                  key={index}
                  type={element.inputAttributes.type}
                  className={element.inputAttributes.class}
                  id={element.inputAttributes.id}
                  name={element.inputAttributes.name}
                  placeholder={element.inputAttributes.placeholder}
                  hint={element.inputAttributes.hint}
                />
              );
            } else if (
              element.type === "input" &&
              element.inputAttributes.type === "tel"
            ) {
              return (
                <>
                  <input
                    key={index}
                    type={element.inputAttributes.type}
                    className={element.inputAttributes.class}
                    id={element.inputAttributes.id}
                    name={element.inputAttributes.name}
                    placeholder={element.inputAttributes.placeholder}
                    hint={element.inputAttributes.hint}
                    value={tele}
                    onChange={(e) => handleInput("tele", e)}
                  />
                  {!regex.regexNum.test(tele) ? teleAlert : null}
                </>
              );
            } else if (
              element.type === "input" &&
              element.inputAttributes.type === "number"
            ) {
              return (
                <input
                  key={index}
                  type={element.inputAttributes.type}
                  className={element.inputAttributes.class}
                  id={element.inputAttributes.id}
                  name={element.inputAttributes.name}
                  placeholder={element.inputAttributes.placeholder}
                  hint={element.inputAttributes.hint}
                />
              );
            } else if (
              element.type === "input" &&
              element.inputAttributes.type === "password"
            ) {
              return (
                <input
                  key={index}
                  type={element.inputAttributes.type}
                  className={element.inputAttributes.class}
                  id={element.inputAttributes.id}
                  name={element.inputAttributes.name}
                  placeholder={element.inputAttributes.placeholder}
                  hint={element.inputAttributes.hint}
                />
              );
            } else if (
              element.type === "input" &&
              element.inputAttributes.type === "date"
            ) {
              return (
                <input
                  key={index}
                  type={element.inputAttributes.type}
                  className={element.inputAttributes.class}
                  id={element.inputAttributes.id}
                  name={element.inputAttributes.name}
                  placeholder={element.inputAttributes.placeholder}
                  hint={element.inputAttributes.hint}
                />
              );
            } else if (
              element.type === "input" &&
              element.inputAttributes.type === "time"
            ) {
              return (
                <input
                  key={index}
                  type={element.inputAttributes.type}
                  className={element.inputAttributes.class}
                  id={element.inputAttributes.id}
                  name={element.inputAttributes.name}
                  placeholder={element.inputAttributes.placeholder}
                  hint={element.inputAttributes.hint}
                />
              );
            } else if (
              element.type === "input" &&
              element.inputAttributes.type === "radio"
            ) {
              return (
                <input
                  key={index}
                  type={element.inputAttributes.type}
                  className={element.inputAttributes.class}
                  id={element.inputAttributes.id}
                  name={element.inputAttributes.name}
                  placeholder={element.inputAttributes.placeholder}
                  hint={element.inputAttributes.hint}
                />
              );
            } else if (
              element.type === "input" &&
              element.inputAttributes.type === "checkbox"
            ) {
              return (
                <input
                  key={index}
                  type={element.inputAttributes.type}
                  className={element.inputAttributes.class}
                  id={element.inputAttributes.id}
                  name={element.inputAttributes.name}
                  placeholder={element.inputAttributes.placeholder}
                  hint={element.inputAttributes.hint}
                />
              );
            } else if (
              element.type === "input" &&
              element.inputAttributes.type === "color"
            ) {
              return (
                <input
                  key={index}
                  type={element.inputAttributes.type}
                  className={element.inputAttributes.class}
                  id={element.inputAttributes.id}
                  name={element.inputAttributes.name}
                  placeholder={element.inputAttributes.placeholder}
                  hint={element.inputAttributes.hint}
                />
              );
            } else if (
              element.type === "input" &&
              element.inputAttributes.type === "file"
            ) {
              return (
                <input
                  key={index}
                  type={element.inputAttributes.type}
                  className={element.inputAttributes.class}
                  id={element.inputAttributes.id}
                  name={element.inputAttributes.name}
                  placeholder={element.inputAttributes.placeholder}
                  hint={element.inputAttributes.hint}
                  accept={[
                    element.inputAttributes.accept.audio,
                    element.inputAttributes.accept.video,
                    element.inputAttributes.accept.pdf,
                    element.inputAttributes.accept.image,
                  ]}
                />
              );
            } else if (
              element.type === "input" &&
              element.inputAttributes.type === "textarea"
            ) {
              return (
                <textarea
                  key={index}
                  type={element.inputAttributes.type}
                  className={element.inputAttributes.class}
                  id={element.inputAttributes.id}
                  name={element.inputAttributes.name}
                  placeholder={element.inputAttributes.placeholder}
                  hint={element.inputAttributes.hint}
                />
              );
            } else if (
              element.type === "input" &&
              element.inputAttributes.type === "select"
            ) {
              return (
                <select
                  key={index}
                  type={element.inputAttributes.type}
                  className={element.inputAttributes.class}
                  id={element.inputAttributes.id}
                  name={element.inputAttributes.name}
                  hint={element.inputAttributes.hint}
                >
                  <option value={element.inputAttributes.option.option1}>
                    {element.inputAttributes.option.option1}
                  </option>
                  <option value={element.inputAttributes.option.option2}>
                    {element.inputAttributes.option.option2}
                  </option>
                  <option value={element.inputAttributes.option.option3}>
                    {element.inputAttributes.option.option3}
                  </option>
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
