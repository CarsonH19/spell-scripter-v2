// import {
//   Tooltip,
//   TooltipContent,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";

// import Item from "./item";

// export default function AttunedItem({ item }) {
//   // const item = itemObject.item;
//   // const setCounts = itemObject.setCounts;
//   // let completeSet;
//   // let setPieces = 1;
//   // if (item.set && setCounts[item.set]) {
//   //   setPieces = setCounts[item.set];
//   // }

//   // if (setPieces === 3) completeSet = true;

//   return (
//     <Tooltip>
//       <TooltipTrigger>
//         <Item key={item.id} item={item} />
//       </TooltipTrigger>
//       <TooltipContent
//         key={item.id}
//         position="item"
//         title={item.name}
//         text={item.rarity}
//         detailOne={item.description}
//         detailTwo={item.effect.map((line, index) => (
//           <span
//             key={index}
//             className="list-none before:content-['-'] before:mr-1"
//           >
//             {line}
//           </span>
//         ))}
//         // detailThree={item.set ? `${item.set} ${setPieces}/3` : null}
//         // detailFour={
//         //   item.setBonus
//         //     ? item.setBonus.map((line, index) => (
//         //         <span
//         //           key={index}
//         //           className={`list-none before:content-['-'] before:mr-1 ${
//         //             completeSet ? "" : "text-gray-500"
//         //           }`}
//         //         >
//         //           {line}
//         //         </span>
//         //       ))
//         //     : null
//         // }
//       />
//     </Tooltip>
//   );
// }
