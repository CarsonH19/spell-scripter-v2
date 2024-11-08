"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "@/store/ui-slice";
import { tomeActions } from "@/store/tome-slice";
import { RootState } from "@/store";
import { Button } from "@/components/ui/button";

import TomeQuestion from "./tome-question";
import TomeText from "./tome-text";
import CodeEditor from "@/components/code-editor/code-editor";

export default function TomesModal({ tome }) {
  const [index, setIndex] = useState(0);
  const dispatch = useDispatch();
  const tomes = useSelector((state: RootState) => state.tome);

  const handleNextPage = () => {
    if (index < tome.lesson.length - 1) {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrevPage = () => {
    if (index > 0) {
      setIndex((prevIndex) => prevIndex - 1);
    }
  };

  let pageContent;

  switch (tome.lesson[index].type) {
    case "INFO":
      pageContent = (
        <div className="w-full p-4 flex flex-col items-center justify-around gap-8">
          <h2 className="font-serif text-4xl px-12 text-center">
            {tome.lesson[index].title}
          </h2>
          <TomeText text={tome.lesson[index].text} />
          {tome.lesson[index].code && (
            <CodeEditor
              key={tome.lesson[index].page}
              code={tome.lesson[index].code}
            />
          )}
        </div>
      );

      break;

    case "QUESTION":
      pageContent = (
        <div className="w-full p-4 flex flex-col items-center justify-around gap-8">
          <h2 className="font-serif text-2xl text-center px-12">Question</h2>
          <h3 className="font-serif text-lg mb-[-1rem]">
            {tome.lesson[index].question}
          </h3>
          {tome.lesson[index].js && (
            <div className="flex flex-col w-80 bg-gray-900 border-2 border-gray-700 p-4">
              {tome.lesson[index].js.map((code, index) => (
                <code className="font-mono text-white text-sm" key={index}>
                  {code}
                </code>
              ))}
            </div>
          )}
          <TomeQuestion answers={tome.lesson[index].answers} />
        </div>
      );
      break;

    case "SUMMARY":
      pageContent = (
        <>
          <div className="w-full p-4 flex flex-col items-center justify-around gap-8">
            <h2 className="font-serif text-4xl text-center px-12">Summary</h2>
            <ul className="text-xl mb-60 w-[30rem] list-outside">
              {tome.lesson[index].listItems.map((item, index) => (
                <li key={index} className="mb-4">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <Button
            variant={"secondary"}
            className="w-[15rem]"
            onClick={() => {
              // playSoundEffect(false, "ui", "softs2", 0.7);

              dispatch(
                uiActions.changeUi({
                  element: "modalIsVisible",
                  visible: false,
                })
              );
            }}
          >
            Complete
          </Button>
        </>
      );
      break;
  }

  return (
    <div className="relative h-[90%] min-h-[45rem] w-[70%] min-w-[35rem] bg-background flex flex-col justify-start items-center border-2 border-secondary p-4 gap-4 rounded-lg overflow-visible">
      <h1 className="text-center text-2xl border-b-2 border-secondary w-[30%] p-0 m-0">
        {tome.name}
      </h1>
      {pageContent}
      <div className="absolute bottom-[2%] w-[95%] flex justify-between items-end text-2xl">
        <ArrowLeft
          onClick={handlePrevPage}
          className="text-text hover:scale-110 transition duration-300"
        />
        <p className="flex">
          {tome.lesson[index].page} / {tome.lesson.length}
        </p>
        <ArrowRight
          onClick={handleNextPage}
          className="text-text hover:scale-110 transition duration-300"
        />
      </div>
    </div>
  );
}
