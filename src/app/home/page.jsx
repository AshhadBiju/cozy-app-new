export default function Hero() {
  return (
    <main>
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="./videos/lendIt-gif.gif"
            alt="Background GIF"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative z-10 flex h-full items-center justify-center">
          <h1 className="text-4xl font-bold text-white md:text-6xl">
            <span className="italic text-primary"> Cozy</span>, your one stop
            shop for your home
          </h1>
        </div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </section>
      <section className="py-16 px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Products</h2>
            <p className="mb-4">
              At Cozy, we offer a wide range of products to make your home
              comfortable and stylish. From furniture to home decor, our
              collection is curated to provide you with the best options for
              your home.
            </p>
            <p className="mb-4">
              Explore our selection of sofas, beds, dining tables, and more.
              Each piece is designed with quality and comfort in mind, ensuring
              that your home looks and feels just the way you want it.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
            <p className="mb-4">
              Our commitment to quality and customer satisfaction sets us apart.
              We believe that your home should be a reflection of your
              personality and style, and we strive to provide products that help
              you achieve that vision.
            </p>
            <p className="mb-4">
              With exceptional customer service, competitive prices, and a vast
              selection of products, Cozy is your go-to destination for all your
              home needs. Shop with us and experience the difference.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
