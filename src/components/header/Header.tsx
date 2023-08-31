
interface HeaderProps {
  title: string | undefined
}
const Header = ({ title }: HeaderProps) => {
  return (
    <div className='sticky top-0 flex items-center justify-between h-20'>
      <h1 className="pl-5 text-4xl font-medium">{title}</h1>
    </div>
  )
}

export default Header