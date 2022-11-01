export default function MetaText({ text, className }) {
  return (
    <span className={`block uppercase text-soft-black text-xs leading-none tracking-wider ${className}`}>{text}</span>
  )
}