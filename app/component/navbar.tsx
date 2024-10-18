import { NavbarProp } from '@/app/fonts/types';
import Link from 'next/link';
const Navbar:React.FC<NavbarProp> = ({name, href}) => {
  return (
    <li>
      <a href={href}>{name}</a>
    </li>
  )
}
export default Navbar;