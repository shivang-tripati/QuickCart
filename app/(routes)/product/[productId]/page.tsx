import getProducts from '@/actions/get-products'
import React from 'react'
import getProduct from '@/actions/get-product'
import Container from '@/components/ui/container'
import ProductList from '@/components/product-list'
import Gallery from '@/components/gallery'
import Info from '@/components/ui/info'


interface pageProps {
    params : {
        productId : string
    }
}
const page : React.FC<pageProps> = async({
    params
}) => {
    const product = await getProduct(params.productId)
    const suggestedProducts = await getProducts({
        categoryId : product?.category?.id
    })
  return (
    <div className='bg-white'>
        <Container>
            <div className='px-4 sm:px-6 lg:px-8'>
                <div className='lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8'>
                    <Gallery images={product.images}/>
                    <div className='mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0'>
                        {/* info */}
                        <Info data={product} />
                    </div> 
                </div>
                <hr className='my-10'/>
                <ProductList items={suggestedProducts} title="Related Products"/>
            </div>
        </Container>
    </div>
  )
}

export default page