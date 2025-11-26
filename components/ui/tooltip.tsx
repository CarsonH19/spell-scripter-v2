"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "@/util/utils";

const TooltipProvider = TooltipPrimitive.Provider;
const Tooltip = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;
const TooltipPortal = TooltipPrimitive.Portal;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> & {
    title?: string;

    containerStyles?: string;
    position: "LEFT" | "RIGHT" | "TOP" | "BOTTOM" | "TOME TIP" | "EFFECT";
    detailOne?: string | number;
    count?: number;
    detailTwo?: string | string[];
    detailThree?: string;
    detailFour?: string;
    detailFive?: string;
    type?: "ITEM" | "SKILL" | "SPELL" | "TIP" | "EFFECT" | "SUMMARY";
  }
>(
  (
    {
      className,
      sideOffset = 5,
      title,
      containerStyles,
      position,
      detailOne,
      count,
      detailTwo,
      detailThree,
      detailFour,
      detailFive,
      type,
      ...props
    },
    ref
  ) => {
    let positionStyles;
    let content;

    switch (position) {
      case "LEFT":
        positionStyles = "absolute right-[2rem] top-[0rem] mr-2";
        break;
      case "RIGHT":
        break;
      case "TOP":
        positionStyles = "absolute left-[-7.5rem] bottom-[0.20rem]";
        break;
      case "BOTTOM":
        positionStyles = "absolute left-[-7.5rem] top-[4.6rem]";
        break;
      case "TOME TIP":
        positionStyles = "relative left-[0rem] top-[rem]";
        break;
    }

    switch (type) {
      case "ITEM":
        let rarityColor = "";
        if (detailOne === "Common") {
          rarityColor = "text-gray-500";
        } else if (detailOne === "Rare") {
          rarityColor = "text-blue-500";
        } else if (detailOne === "Epic") {
          rarityColor = "text-purple-500";
        } else if (rarityColor === "Legendary") {
          rarityColor = "text-yellow-500";
        }

        content = (
          <div className={containerStyles}>
            {title && <h3 className="text-center font-bold mb-1">{title}</h3>}
            <hr className="my-2" />
            {detailOne && (
              <div className="flex justify-between">
                <p className={`text-sm ${rarityColor}`}>{detailOne}</p>
                <p className={`text-sm text-text`}>Quantity: {count || 0}</p>
              </div>
            )}
            {detailTwo && (
              <p className="text-left text-sm italic mt-1">{detailTwo}</p>
            )}
            <hr className="my-2" />
            {detailThree && (
              <ol className="text-sm text-text text-left">
                {detailThree.map((item, index) => {
                  let statChangeColor = "";
                  const firstChar = item.charAt(0);
                  if (firstChar === "+") {
                    statChangeColor = "text-green-500";
                  } else if (firstChar === "-") {
                    statChangeColor = "text-red-500";
                  }

                  return (
                    <li key={index} className={statChangeColor}>
                      <span className="text-text pb-1 pr-1">o</span>
                      {item}
                    </li>
                  );
                })}
              </ol>
            )}

            {detailFour && <p className="text-sm">{detailFour}</p>}
            {detailFive && <p className="text-sm">{detailFive}</p>}
          </div>
        );
        break;

      case "SKILL":
        content = (
          <div className={cn(containerStyles, "text-center")}>
            {title && <h3 className="font-bold mb-1">{title}</h3>}
            {detailOne && <p className="text-sm">{detailOne}</p>}
            <hr className="my-2" />
            {detailThree && <p className="text-sm">{detailThree}</p>}
            {detailTwo && <p className="text-sm">{detailTwo}</p>}
          </div>
        );
        break;

      case "SPELL":
        content = "";
        break;

      case "TIP":
        content = (
          <div className={"text-center"}>
            {title && <h3 className="font-bold mb-1">{title}</h3>}
            {detailOne && <p className="text-sm text-text">{detailOne}</p>}
            {/* <hr className="my-2" /> */}
            {detailTwo && <p className="text-sm">{detailTwo}</p>}
            {detailThree && <p className="text-sm">{detailThree}</p>}
          </div>
        );
        break;

      case "EFFECT":
        content = (
          <div className={"text-center"}>
            {title && <h4 className="font-bold mb-1">{title}</h4>}
            {detailOne && detailOne > 0 && <p className="italic text-sm mb-1">{detailOne}</p>}
            {detailTwo && <p className="text-sm">{detailTwo}</p>}
            <hr className="my-2" />
            {detailThree && <p className="text-sm">{detailThree}</p>}
          </div>
        );
        break;

      case "SUMMARY":
        content = (
          <div className={"text-center"}>
            {title && <h3 className="text-center font-bold mb-1">{title}</h3>}
            <hr className="my-2" />
            {detailOne && (
              <p className="italic text-sm mb-1">Level: {detailOne}</p>
            )}
            {detailTwo && <p className="text-sm">{detailTwo}</p>}
            {detailThree && <p className="text-sm">{detailThree}</p>}
          </div>
        );
        break;
    }

    return (
      <TooltipPrimitive.Content
        ref={ref}
        sideOffset={sideOffset}
        className={cn(
          "w-[15rem] z-50 overflow-hidden rounded-md border border-text bg-popover bg-slate-900 bg-opacity-65 px-3 py-2.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95",
          positionStyles,
          className
        )}
        {...props}
      >
        {content}
        {/* <div className={containerStyles}>
          {title && <h3 className="font-bold mb-1">{title}</h3>}
          {position && <p className="italic text-xs mb-1">{position}</p>}
          {detailOne && <p className="text-sm">{detailOne}</p>}
          {detailTwo && <p className="text-sm">{detailTwo}</p>}
          {detailThree && <p className="text-sm">{detailThree}</p>}
          {detailFour && <p className="text-sm">{detailFour}</p>}
        </div> */}
      </TooltipPrimitive.Content>
    );
  }
);
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
  TooltipPortal,
};
