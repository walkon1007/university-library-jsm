import Image from "next/image";
import { Button } from "@/components/ui/button";
import BookList from "@/components/BookList";
import BookOverview from "@/components/BookOverview";
import {sampleBooks} from "@/constants";
import { users } from "@/database/schema"
import {db} from "@/database/drizzle";


const Home = async () => {
      const result = await db.select().from(users);
      console.log(JSON.stringify(result, null, 2));
      return (

    <>
      <BookOverview {...sampleBooks[0]} />

      <BookList
            title="Latest Books"
            books={sampleBooks}
            containerClassName="mt-28"
      />
</>
);
};
export default Home;
