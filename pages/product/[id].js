import { useRouter } from "next/router";

const example = () => {
    const { query: {id},} = useRouter();

     return <div>Esta es la página del producto: {id}</div>;
   };

export default example;
/* 
//otra forma de usar la userRouter();
const name = () => {
 const router = useRouter();
  return <div>Esta es la página del producto: {router.query.id}</div>;
};

export default name;
*/