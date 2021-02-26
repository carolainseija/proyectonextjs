import { useRouter } from "next/router";

const example = () => {
    const { query: {name},} = useRouter();

     return <div>Esta es la página del producto: {name}</div>;
   };

export default example;
/* 
//otra forma de usar la userRouter();
const name = () => {
 const router = useRouter();
  return <div>Esta es la página del producto: {router.query.name}</div>;
};

export default name;
*/