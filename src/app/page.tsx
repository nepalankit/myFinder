import Image from "next/image"
import Searchbar from "../../components/Searchbar"
import HeroCarousel from "../../components/HeroCarousel"

const Home = async () => {

  return (
    <>
      <section className="px-6 md:px-20  py-24 ">
      <div className="flex max-xl:flex-col gap-16">
          <div className="flex flex-col justify-center">

            <p className="small-text">
                Shopping Starts Here
                  <Image
                  src='/assets/icons/arrow-right.svg'
                  alt='arrow-right'
                  width={16}
                  height={16}
                  
                  />


                  
              </p>
              <h1 className="head-text">
                Track Your Products Using
                <span className="text-purple-500"> PriceProbe</span>
              </h1>
              <p className="mt-6">
                Powerful analytics to get you enagage to your products.
                </p> 

                <Searchbar /> 
          </div>
            <HeroCarousel />
        </div>
        

      </section>

      <section className="trending-section">
        <h2 className="section-text">Trending</h2>
        <div className="flex flex-wrap gap-x-6 gap-y-16">
          {['Apple Iphone','Book', 'Sneakers'].map((product)=>(
            <div> {product} </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Home