import { Facebook } from '../../shared/ui/icons/contacts/Facebook'
import { Telegram } from '../../shared/ui/icons/contacts/Telegram'
import { WhatsApp } from '../../shared/ui/icons/contacts/WhatsApp'
import { LogoHeader } from '../../shared/ui/icons/icons-tools/LogoHeader'
import { Pencil } from '../../shared/ui/icons/icons-tools/Pencil'
import './footer.scss'

export const Footer = () => {
    return (
        <footer>
            <div className="footer-wrapper">
                <div className="footer-top">
                    <LogoHeader />
                    <div className="feedback">
                        <Pencil color="#02C66E" />
                        <p>Пожелания по работе сайта</p>
                        <form>
                            <input type="text" placeholder="Введите текст" />
                            <input type="submit" />
                        </form>
                    </div>
                </div>
                <div className="hr">
                    <hr />
                </div>
                <div className="footer-bot">
                    <div className='contacts'>
                        <Telegram />
                        <WhatsApp />
                        <Facebook />
                    </div>
                    admin@gmail.com
                </div>
            </div>
        </footer>
    )
}
