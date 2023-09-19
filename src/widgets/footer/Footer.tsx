import { FeedbackForm } from '../../features/footer'
import { Facebook } from '../../shared/ui/icons/contacts/Facebook'
import { Telegram } from '../../shared/ui/icons/contacts/Telegram'
import { WhatsApp } from '../../shared/ui/icons/contacts/WhatsApp'
import { LogoHeader } from '../../shared/ui/icons/icons-tools/LogoHeader'
import './footer.scss'

export const Footer = () => {
    return (
        <footer>
            <div className="footer-wrapper">
                <div className="footer-top">
                    <LogoHeader />
                    <FeedbackForm />
                </div>
                <div className="hr">
                    <hr />
                </div>
                <div className="footer-bot">
                    <div className="contacts">
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
