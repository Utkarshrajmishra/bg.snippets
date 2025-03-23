import React from "react";
import ReactDOMServer from "react-dom/server";

type PlaygroundProps = {
  children: React.ReactNode;
  setPreview: (prev: React.ReactNode) => void;
  theme: "light" | "dark";
  setTheme:(  theme: "light" | "dark")=>void;
};

const Playground=({
    children,
    setPreview,
    theme,
    setTheme
}:PlaygroundProps)=>{

    const copyCode=()=>{
        const code=ReactDOMServer.renderToString(children);
        navigator.clipboard.writeText(code);
    }

return (
  <>
    <div className="relative min-h-[300px] w-full overflow-hidden rounded-lg ring-1 ring-slate-900/10">
      <div className="absolute left-4 top-4 z-10 cursor-pointer">
        <div className="flex flex-row gap-4">
          <div
            className="rounded bg-slate-900 px-3 py-1 test-xs text-white"
            onClick={() => {
              setPreview(children);
              setTheme(theme);
            }}
          >
            Preview
          </div>
          <div
            className="rounded-md bg-slate-900 px-2 py-1 text-xs font-medium text-white"
            onClick={copyCode}
          >
            Copy Code
          </div>
        </div>
      </div>
      {children}
    </div>
  </>
);
}


export default Playground