// 'use client'
import WrapperMaxWidth from '@/components'
import PopupProduct from '@/components/PopupProduct'
import Banner from './(components)/Banner'
import BigBanner from './(components)/BigBanner'
import Card from './(components)/Card'
import Carousel from './(components)/Carousel'
import Gallery from './(components)/Gallery'
import News from './(components)/News'
import ProductGrid from './(components)/ProductGrid'
import ProductGridReverse from './(components)/ProductGridReverse'
import Section from './(components)/Section'
import Subscribe from './(components)/Subscribe'
import TopGroup from './(components)/TopGroup'

async function getProducts() {
  const res = await fetch('https://fakestoreapi.com/products')
  return res.json()
}


const FIRST_ITEM = 0

const Home = async () => {
  const result = await getProducts()

  return (
    <div className="container mx-auto w-full mt-3">
      <WrapperMaxWidth>
        <Gallery />
        <Card />
        {result?.length > 8 && <Section resultTop={result.slice(1, 5)} resultBottom={result.slice(6, 10)} bigItem={result[FIRST_ITEM]} />}
        <div>
          <span className="flex items-center justify-center text-3xl text-gray-900 mt-14 mb-10">Shop with Categorys</span>
          <Carousel />
        </div>
        <ProductGrid listProduct={result.slice(0, 8)}  />
        <Banner />
        <ProductGridReverse listProduct={result.slice(0, 8)} />
        <BigBanner />
        <TopGroup />
        <News />
        <Subscribe />
        <PopupProduct />
      </WrapperMaxWidth>
    </div>
  )
}

export default Home
