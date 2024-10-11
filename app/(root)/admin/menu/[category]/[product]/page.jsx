import ProductDetail from '@/components/pages/admin/productDetail'
import Container from '@/components/shared/container'
import React from 'react'

export default function Product() {
  return (
    <Container className={"mt-32 flex flex-col gap-4 justify-start items-start mb-4"}>
      <ProductDetail/>
    </Container>
  )
}
