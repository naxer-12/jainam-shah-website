import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import Syntax from "./Syntax";

function CodeBlock({ language = null, value }) {
  return (
    <SyntaxHighlighter language={language} style={Syntax}>
      {value}
    </SyntaxHighlighter>
  );
}
