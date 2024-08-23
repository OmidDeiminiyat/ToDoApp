import style from './Footer.module.scss';
import HomeIcon from '@mui/icons-material/Home';
const Footer = ({children}) => {
    return (
        <>
        <footer className={style.Footer}>
            {<HomeIcon />}
            {children}
        </footer>
        </>
    )
}
export default Footer;