import type { V2_MetaFunction } from "@remix-run/node";
import Footer from "./layouts.footer";
import Navbar from "./layouts.navbar";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

// export default function Index() {
//   return (
//     <div className="container mx-auto mt-8">
//     <h1 className="text-3xl font-bold text-gray-700 underline">
//       Hello world!
//     </h1>
//    </div>
//   );
// }



export default function Index() {
 return (
  <>
   <header className="border-b">
    <Navbar />
   </header>
   {/* <main className="container flex justify-center flex-grow mx-auto">
     {children}
   </main> */}
   <Footer />
  </>
  );
}