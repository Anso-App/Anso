import {
  createContext,
  createSignal,
  createResource,
  onMount,
  useContext,
  JSXElement,
} from "solid-js";
import "./App.css";
import {Processor, unified} from "unified";
import rehypeParse from "rehype-parse";
import rehypeReact from "rehype-react";
import { Fragment, jsx, jsxs } from "solid-js/h/jsx-runtime";

const MyContext = createContext<string>();

const processor = unified()
  .use(rehypeParse, { fragment: true })
  .use(rehypeReact, {
    Fragment,
    jsx,
    jsxs,
    elementAttributeNameCase: "html",
    stylePropertyNameCase: "css",
    components: {
      div: () => {
        const ctx = useContext(MyContext);
        return <div>Context: {ctx}</div>;
      },
    },
  }) as Processor;

function App() {
  const [content, setContent] = createSignal<JSXElement>();
  const [another] = createResource<JSXElement>(async () => {
    const file = await processor.process(`
    <h1>Hello World</h1>
    <div></div>
    `);
    return file.result as JSXElement;
  });

  onMount(async () => {
    const file = await processor.process(`
    <h1>Hello World</h1>
    <div></div>
    `);
    setContent(() => file.result as JSXElement);
  });

  return (
    <MyContext.Provider value="Hello World">
      <div>{content()}</div>
      <div>{another()}</div>
    </MyContext.Provider>
  );
}

export default App;
