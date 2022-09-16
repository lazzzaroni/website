import { Suspense } from "react";
import type { NextPage } from "next";

import Container from "@/components/Container";

const Home: NextPage = () => {
  return (
    <Suspense fallback={null}>
      <Container>
        {/* demo content */}
        <div className="flex items-center justify-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Hello, Home!
          </h1>
        </div>
      </Container>
    </Suspense>
  );
};

export default Home;
