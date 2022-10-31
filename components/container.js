export default function Container({ children, className, noPad }) {
  return(
    <div className={`mx-3 md:mx-4 lg:mx-5 border-x border-black ${noPad ? '' : 'py-5 px-5 md:px-6 lg:px-8'} ${className}`}>
      {children}
    </div>
  )
}