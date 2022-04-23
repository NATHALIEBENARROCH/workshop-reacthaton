import { database } from "../lib/database";
import type { NextPage } from "next";
import { Layout } from "../components/layout";
import { RecipeList } from "../components/RecipeList";
import { Recipe } from "../types";

type Props = {
  recipes: Recipe[];
};

const Recipes: NextPage<Props> = ({ recipes }) => {
  return (
    <Layout>
      <main className="w-full flex justify-center">
        <RecipeList recipes={recipes} />
      </main>
    </Layout>
  );
};

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const cocktails = await database.recipes();
  // const posts = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      cocktails,
    },
  };
}
export default Recipes;
