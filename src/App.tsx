import { useStore } from "@/store";
import CodeEditor from "@/components/CodeEditor";
import { themes, fonts } from "@/config";
import { cn } from "./lib/utils";
import { useRef } from "react";

function App() {
  const theme = useStore((state) => state.theme);
  const padding = useStore((state) => state.padding);
  const showBackground = useStore((state) => state.showBackground);
  const fontStyle = useStore((state) => state.fontStyle);

  const editorRef = useRef(null)

  return (
    <main className="dark min-h-screen flex justify-center items-center bg-neutral-950 text-white">
      <link
        rel="stylesheet"
        href={themes[theme].theme}
        crossOrigin="anonymous"
      />
      <link
        rel="stylesheet"
        href={fonts[fontStyle].src}
        crossOrigin="anonymous"
      />
      <div
        className={cn(
          "overflow-hidden mb-2 transition-all ease-out",
          showBackground ? themes[theme].background : "ring ring-neutral-900",
        )}
        style={{padding}}
        ref={editorRef}
      >
        <CodeEditor />
      </div>
    </main>
  );
}

export default App;
