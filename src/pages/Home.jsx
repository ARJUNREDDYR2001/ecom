import { Navbar, Main, Product, Footer } from "../components";

function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Product />
      <Footer />
      <style>
        {`
          body {
            background-color: lightblue; 
          }
        `}
      </style>
    </>
  )
}

export default Home