import type { GetServerSideProps, NextPage } from "next";
import { Layout } from "../../components/layout";
import { Comment, Recipe } from "../../types";
import { database } from "../../lib/database";

type Props = {
  recipe: Recipe;
  comments: Comment[];
};

const Recipe: NextPage<Props> = ({ recipe, comments }) => {
  return <Layout>{}</Layout>;
};

export default Recipe;

export const getServerSideProps: GetServerSideProps = async (context) => {
  // keep this here to ensure typescript is happy
  if (typeof context.params?.id !== "string") {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  const id = context.params?.id;
  const recipe = await database.recipe(String(id));
  return {
    props: { recipe },
  };
};
