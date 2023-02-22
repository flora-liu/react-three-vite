import { forwardRef, useImperativeHandle, useRef } from 'react'
import Nav from '~/components/dom/nav'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = forwardRef<HTMLDivElement, LayoutProps>(({ children }, ref) => {
  const localRef = useRef(null)

  // @ts-ignore
  useImperativeHandle(ref, () => localRef?.current)

  return (
    <div
      ref={localRef}
      className='absolute top-0 left-0 z-10 w-screen h-screen overflow-hidden bg-zinc-900 text-gray-50'
    >
      {children}
      <Nav />
    </div>
  )
})

export default Layout
