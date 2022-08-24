import { useParams } from "react-router-dom";
import { getProductById } from "../fakeAPI";

export const ProductDetails = () => {
  const { id } = useParams();
  const product = getProductById(id);

  return (
    <main>
      <img src="https://via.placeholder.com/960x240" alt="" />
      <div>
        <h2>
          Product - {product.name} - {id}
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
          quisquam veritatis nisi quae culpa delectus explicabo ducimus dolores
          repellendus nulla a, ad doloribus aut? Consequuntur sequi ea iusto
          ducimus vel.
        </p>
      </div>
    </main>
  );
};
