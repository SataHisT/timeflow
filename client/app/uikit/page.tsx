import React from 'react'
import Button from '@/components/Buttons/Button'

const Page = () => {
  return (
    <main className="bg-gray-100 flex justify-center min-h-screen">
      <div className="w-10/12 mt-9 relative">
        <div className="flex flex-row gap-6 items-stretch">
          <div className="relative w-2/12 flex flex-col">
            <span className="text-sm text-gray-400 absolute left-0 top-[-1.5rem]">Buttons</span>
            <div className="box-border border-dashed border-2 p-6 flex flex-col gap-4 justify-center h-full">
              <Button variant="primary">Button primary</Button>
              <Button variant="danger">Button danger</Button>
              <Button variant="secondary">Button secondary</Button>
              <Button variant="outline">Button outline</Button>
              <Button variant="ghost">Button ghost</Button>
              <Button variant="fancy">Button fancy</Button>
            </div>
          </div>
          <div className="relative w-2/12 flex flex-col">
            <span className="text-sm text-gray-400 absolute left-0 top-[-1.5rem]">Loading & Size</span>
            <div className="box-border border-dashed border-2 p-6 flex flex-col gap-5 justify-center h-full">
              <Button size="xl" variant="primary" loading={true}>
                Loading xl
              </Button>
              <Button size="lg" variant="danger" loading={true}>
                Loading lg
              </Button>
              <Button size="md" variant="secondary" loading={true}>
                Loading md
              </Button>
              <Button size="sm" variant="outline" loading={true}>
                Loading sm
              </Button>
              <Button size="xs" variant="ghost" loading={true}>
                Loading xs
              </Button>
              <Button size="xss" variant="fancy" loading={true}>
                Loading xss
              </Button>
            </div>
          </div>
          <div className="relative w-2/12 flex flex-col">
            <span className="text-sm text-gray-400 absolute left-0 top-[-1.5rem]">Button size</span>
            <div className="box-border border-dashed border-2 p-6 flex flex-col gap-5 justify-center h-full">
              <Button size="xl">Size xl</Button>
              <Button size="lg">Size lg</Button>
              <Button size="md">Size md</Button>
              <Button size="sm">Size sm</Button>
              <Button size="xs">Size xs</Button>
              <Button size="xss">Size xss</Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Page
