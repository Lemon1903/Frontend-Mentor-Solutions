export default function ProductDetails(product: IProduct) {
  const newPrice = product.price * product.discount;

  return (
    <>
      <div>
        <p className="mb-3 text-xs tracking-[2px] text-primary-dark uppercase">
          {product.company}
        </p>
        <h1 className="text-[1.7rem] lg:text-[2.5rem] lg:mb-4 leading-none">
          {product.name}
        </h1>
      </div>
      <p className="py-4 font-normal text-neutral-dark">
        {product.description}
      </p>
      <div className="flex flex-wrap items-center justify-between py-2">
        <p className="mr-4 text-[1.85rem]">${newPrice.toFixed(2)}</p>
        <p className="mr-auto rounded py-1 px-2 bg-primary-light text-primary-dark leading-tight">
          {product.discount * 100}%
        </p>
        <p className="w-full text-neutral">
          <s>${product.price.toFixed(2)}</s>
        </p>
      </div>
    </>
  );
}
