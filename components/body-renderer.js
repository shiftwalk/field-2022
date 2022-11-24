import BlockContentWrapper from '@/components/block-content-wrapper'
import ModularImageBlock from '@/components/modular-image-block'
import ModularContentImageBlock from '@/components/modular-content-image-block'
import ModularTextBlock from '@/components/modular-text-block'
import ModularQuoteBlock from '@/components/modular-quote-block'

const notImplemented = ({ type }) => <h1>Not implemented {type}</h1>

const bodySerializers = {
  block: {
    component: BlockContentWrapper,
    wrapper: ({ children }) => 
      <div>
        {children}
      </div>
  },
  modularImageBlock: {
    component: ModularImageBlock,
    wrapper: ({ children }) => 
      <div>
        {children}
      </div>
  },
  modularContentImageBlock: {
    component: ModularContentImageBlock,
    wrapper: ({ children }) => 
      <div>
        {children}
      </div>
  },
  modularQuoteBlock: {
    component: ModularQuoteBlock,
    wrapper: ({ children }) => 
      <div>
        {children}
      </div>
  },
  textBlock: {
    component: ModularTextBlock,
    wrapper: ({ children }) => 
      <div>
        {children}
      </div>
  }
}

function getSerializers() {
  const res = {}
  for (const [key, value] of Object.entries(bodySerializers)) {
    if (key === 'block') continue
    const Component = value.component
    res[key] = (props) => <Component {...props.node} />
  }
  return res
}

export const blockSerializers = getSerializers()

const BodyRenderer = ({ body, caseStudy }) => {
  if (!body) return <></>
  return body.map((item) => {
    const type = item._type
    const serializer = bodySerializers[type]
    const Component = serializer?.component
    const args = serializer?.args
    const Wrapper = serializer?.wrapper

    if (!Component || !serializer) throw new Error(`No serializer implemented for body object: ${type}`)    
    
    return Wrapper ? <Wrapper key={item._key}><Component {...item} {...args} caseStudy={caseStudy} /></Wrapper> : <Component key={item._key} {...item} {...args} />
  })
}

export default BodyRenderer;