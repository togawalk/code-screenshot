import { useStore } from "@/store";
import CodeEditor from "@/components/CodeEditor";
import { themes, fonts } from "@/config";

function App() {
  const theme = useStore((state) => state.theme)
  const fontStyle = useStore((state) => state.fontStyle)

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
      <CodeEditor />
    </main>
  );
}

export default App;
