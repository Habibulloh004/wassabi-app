import ProductItem from '@/components/pages/admin/productitem'
import Container from '@/components/shared/container'
import SearchComponent from '@/components/shared/searchComponent'
import { ordersData } from '@/lib/iterationDetails'
import React from 'react'

export default function Categories({params}) {
  const { category } = params
  return (
    <Container className={"mt-32 flex flex-col gap-4 justify-start items-start mb-4"}>
    <section className="flex justify-between items-center gap-3 w-full">
        <h1 className="font-bold textNormal4">Товары</h1>
        <SearchComponent/>
      </section>
    <section className="w-full grid grid-cols-4 2xl:grid-cols-5 gap-4">
      {ordersData.map((item, idx) => (
        <ProductItem
          key={idx}
          href={`/admin/menu/${category}/${item.id}`}
          id={item.id}
          title={item.client}
          description={"Классические суши от WASSABI"}
        />
      ))}
    </section>
  </Container>
  )
}
