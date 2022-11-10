import Link from "next/link"

export default function MobileMenuItem({ label, href, className, onClick }) {
  return (
    <Link href={href}>
      <a
        className={`block text-[10vw] lg:text-[5vw] leading-none relative py-3 md:py-4 px-5 md:px-6 ${ className ? className : null }`}
        onClick={onClick ? onClick : null}
      >
        { label }
      </a>
    </Link>
  )
}