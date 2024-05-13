import { useEffect, useState } from "react";
import "./styles.css";

export default function LoadMoreData() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  const fetchProducts = async () => {
    try {
      const result = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const data = await result.json();

      // This condition prevents the setProduct to be called twice the first time the site is loaded, since the fetch call is async and REACT also batches updates the setProduct gets called twice and due to fact that we are appending the data over the previous value of products it might causes the issue of duplicate values after the first render (for the first call to the api only), by doing this we ensure that we first have all the things needed to call setProducts and by doing that we can make the update kind of synchronous
      // Other way to avoid this can be by storing the value in a set first then setting that values in the set to products using setProducts hence avoiding duplicate entries.
      if (data && data.products && data.products.length) {
        setProducts((prevData) => [...prevData, ...data.products]);
        setLoading(false);
      }

      console.log(result);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [count]);

  // This is to limit the total number of products you can show in a page
  useEffect(() => {
    if (products && products.length === 100) setDisableButton(true);
  }, [products]);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <div className="grid-container">
        {products && products.length
          ? products.map((el) => {
              console.log(products.length);
              return (
                <div className="product" key={el.id}>
                  <img src={el.thumbnail} />
                  <p>{el.title}</p>
                </div>
              );
            })
          : null}
      </div>
      {disableButton ? <h3>You have reached the end</h3> : null}
      <button disabled={disableButton} onClick={() => setCount(count + 1)}>
        Load More
      </button>
    </div>
  );
}
