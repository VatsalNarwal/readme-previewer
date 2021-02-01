import React, { useState } from "react";
import ToMarkDown from "../api/toMarkdown";
import reactdom from "react-dom";
import Done from "./Done";

export default function Main({}) {
  const [isDepracted, setisDepracted] = useState(null);
  const [Title, setTitle] = useState("No Title Provided");

  const [Description, setDescription] = useState("");

  const [FieldTitle, setFieldTitle] = useState("");
  const [FieldDesc, setFieldDesc] = useState("");

  const [totalFields, settotalFields] = useState([{}]);

  return (
    <div>
      <div className="form-check">
        <br />
        <br />
        <h3>Product Info</h3>
        <input
          class="form-control"
          type="text"
          placeholder="Title of your Product"
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <input
          className="form-control"
          type="text"
          placeholder="Description of your product"
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          type="checkbox"
          onInput={(_r) => {
            setisDepracted(_r.target.checked);
          }}
        />
        <label className="form-check-label" for="defaultCheck1">
          Is Deprecated?
        </label>
        <br />
        <br />
        <h4>Fields </h4>
        <textarea
          className="form-control"
          id="title-now"
          type="text"
          placeholder="Title"
          onChange={(e) => {
            setFieldTitle(e.target.value);
          }}
        />
        <br />
        <textarea
          id="desc-now"
          className="form-control"
          placeholder="Description"
          onChange={(e) => {
            setFieldDesc(e.target.value);
          }}
        />
        <br />
        <button
          className="btn btn-dark"
          onClick={() => {
            let ToPush = {
              title: FieldTitle,
              value: FieldDesc,
            };

            let tempvar = totalFields;
            tempvar.push(ToPush);

            settotalFields(tempvar);
            document.getElementById("title-now").value = "";

            document.getElementById("desc-now").value = "";
            console.log(totalFields);
          }}
        >
          Add Field
        </button>
        <br />
        <br />
        <button
          className="btn btn-btn btn-primary btn-lg btn-block"
          onClick={() => {
            ToMarkDown(isDepracted, Title, Description, totalFields).then(
              (s) => {
                reactdom.render(
                  <Done markdown={s} />,
                  document.getElementById("root")
                );
              }
            );
          }}
        >
          Create
        </button>
      </div>
    </div>
  );
}
