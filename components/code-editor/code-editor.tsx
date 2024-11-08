"use client";

import { Editor } from "@monaco-editor/react";
import { useRef, useState } from "react";

import Output from "./output";
import { Button } from "../ui/button";

import { executeCode } from "@/util/code-editor";
import { Expand } from "lucide-react";

import { useSelector } from "react-redux";
import { RootState } from "@/store";

export default function CodeEditor({ code }) {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [output, setOutput] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const isQTE = useSelector(
    (state: RootState) => state.ui.modal.quickTimeEventModal
  );

  // const toast = useToast();

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) return;
    try {
      // setIsLoading(true);
      const { run: result } = await executeCode(sourceCode);
      setOutput(result.output.split("\n"));
      result.stderr ? setIsError(true) : setIsError(false);
    } catch (error) {
      // toast({
      //   title: "An error occurred.",
      //   description: error.message || "Unable to run code",
      //   status: "error",
      //   duration: 6000,
      // });
    } finally {
      // setIsLoading(false);
    }
  };

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={
        isExpanded
          ? "absolute top-[2%] left-1/2 transform -translate-x-1/2 flex flex-col gap-2 w-[95%] h-[90%] p-4 border-3 border-secondary bg-dark rounded-lg z-[99]"
          : "relative flex flex-col gap-2 w-[60%] min-w-[35rem] h-[20rem] p-4 border-3 border-secondary bg-dark rounded-lg z-[99]"
      }
    >
      {!isQTE && (
        <Expand
          className="absolute z-[98] bottom-6 left-6 h-5 text-accent hover:scale-110 transition duration-300"
          onClick={handleExpand}
        />
      )}
      {!isQTE && (
        <h3 className="absolute text-xl top-[5%] left-1/2 transform -translate-x-1/2">
          Code Editor
        </h3>
      )}
      {!isQTE && (
        <div className="flex flex-row justify-between items-center w-full">
          <p className="text-accent text-base h-4">JS</p>
          <div className="flex gap-4">
            <Button
              onClick={runCode}
              variant={"secondary"}
              // className="text-accent bg-transparent border border-accent h-8 w-24 text-base rounded hover:text-dark hover:bg-accent transition"
            >
              Run Code
            </Button>
          </div>
        </div>
      )}
      <div
        className="flex w-full h-full border-2 border-primary overflow-hidden"
        style={isQTE ? { pointerEvents: "none", readOnly: true } : {}}
      >
        <Editor
          height="100%"
          width={!isQTE ? "65%" : "100%"}
          cursor="pointer"
          theme="vs-dark"
          defaultLanguage="javascript"
          defaultValue={code}
          onMount={onMount}
          value={value}
          onChange={(value) => setValue(value)}
        />
        {!isQTE && <Output output={output} isError={isError} />}
      </div>
    </div>
  );
}
