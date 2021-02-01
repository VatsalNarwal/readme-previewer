import React from "react";
import Markdown from "markdown-to-jsx";

export default function Done({ markdown: markdown_to_render }) {
  return (
    <>
      <Markdown>{markdown_to_render}</Markdown>
      <button
        type="button"
        className="btn btn-info"
        onClick={() => {
          var a = document.createElement("a");
          document.body.appendChild(a);
          a.style = "display: none";
          let markdown_blob = new Blob([markdown_to_render], {
            type: "text/markdown",
          });
          var url = window.URL.createObjectURL(markdown_blob);
          a.href = url;
          a.download = "README.md";
          a.click();
          window.URL.revokeObjectURL(url);
        }}
      >
        Download!
      </button>

      <button
        type="button"
        className="btn btn-warning"
        onClick={() => {
          let to_copy = markdown_to_render;
          navigator.clipboard
            .writeText(to_copy)
            .then(() => {
              alert("Copied to Clipboard :)");
            })
            .catch(() => {
              alert(
                "Unable to copy text to clipboard, please download the file"
              );
            });
        }}
      >
        Copy to clipboard
      </button>
      <button
        type="button"
        class="btn btn-link"
        onClick={() => window.location.reload()}
      >
        Home
      </button>
    </>
  );
}
