import s from './ProductSidebar.module.css'
import { useAddItem } from '@framework/cart'
import { FC, useEffect, useState } from 'react'
import { ProductOptions } from '@components/product'
import type { Product } from '@commerce/types/product'
import usePrice from '@framework/product/use-price'
import { Button, Text, Rating, Collapse, useUI } from '@components/ui'
import {
  getProductVariant,
  selectDefaultOptionFromProduct,
  SelectedOptions,
} from '../helpers'
import ErrorMessage from '@components/ui/ErrorMessage'

interface ProductSidebarProps {
  product: Product
  className?: string
}

const ProductSidebar: FC<ProductSidebarProps> = ({ product, className }) => {
  const addItem = useAddItem()
  const { openSidebar, setSidebarView } = useUI()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<null | Error>(null)
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({})

  useEffect(() => {
    selectDefaultOptionFromProduct(product, setSelectedOptions)
  }, [product])

  const variant = getProductVariant(product, selectedOptions)
  const addToCart = async () => {
    setLoading(true)
    setError(null)
    try {
      await addItem({
        productId: String(product.id),
        variantId: String(variant ? variant.id : product.variants[0]?.id),
      })
      setSidebarView('CART_VIEW')
      openSidebar()
      setLoading(false)
    } catch (err) {
      setLoading(false)
      if (err instanceof Error) {
        console.error(err)
        setError({
          ...err,
          message: 'Could not add item to cart. Please try again.',
        })
      }
    }
  }

  const { price } = usePrice({
    amount: product.price.value,
    baseAmount: product.price.retailPrice,
    currencyCode: product.price.currencyCode!,
  })

  return (
    <div className={className}>
      <div className="pt-10 pb-4 break-words w-full text-7xl tracking-widest">
        {product.name}
      </div>
      { 
        <div className="pb-4 break-words w-full max-w-xl text-6xl my-10">
          {product.sku && <span className="bg-black text-white px-6">{product.sku}</span>}
        </div>
      }
      {product.descriptionArray &&
        <div className='mt-[-10px] mb-10 text-4xl tracking-widest opacity-80'>{product.descriptionArray.map(item => (
          <div key={item} className='flex'>
            {product.descriptionIcon ? 
              <img src={product.descriptionIcon} className='w-[40px] h-[40px] mr-[6px]' alt="description Icon" /> : ''
            }
            {item}
          </div>
        ))}</div>
      }
      <div className="pb-4 break-words w-full max-w-xl text-2xl my-8">
        {product.description}
      </div>
      <ProductOptions
        options={product.options}
        selectedOptions={selectedOptions}
        setSelectedOptions={setSelectedOptions}
      />
      {/* <div className="opacity-10 pt-12 break-words w-full max-w-xl text-6xl tracking-wide">
        {price}
      </div> */}
      {/* star */}
      {/* <div className="flex flex-row justify-between items-center">
        <Rating value={4} />
        <div className="text-accent-6 pr-1 font-medium text-sm">36 reviews</div>
      </div> */}
      <div>
        {error && <ErrorMessage error={error} className="my-5" />}
        {process.env.COMMERCE_CART_ENABLED && (
          <Button
            aria-label="Add to Cart"
            type="button"
            className={s.button}
            onClick={addToCart}
            loading={loading}
            disabled={variant?.availableForSale === false}
          >
            {variant?.availableForSale === false
              ? 'Not Available'
              : 'Add To Cart'}
          </Button>
        )}
      </div>
      {/* <div className="mt-6">
        <Collapse title="Care">
          This is a limited edition production run. Printing starts when the
          drop ends.
        </Collapse>
        <Collapse title="Details">
          This is a limited edition production run. Printing starts when the
          drop ends. Reminder: Bad Boys For Life. Shipping may take 10+ days due
          to COVID-19.
        </Collapse>
      </div> */}
    </div>
  )
}

export default ProductSidebar
