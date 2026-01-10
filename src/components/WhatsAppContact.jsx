import { Link } from 'react-router-dom';
import WhatsappIcon from '/whatsapp.png'

export const WhatsAppContact = () => {
    return (
        <div className="fixed bottom-4 right-4">
            <Link to="https://wa.me/5434112345678" target="_blank" rel="noopener noreferrer">
                <img src={WhatsappIcon} className="w-32" alt="WhatsApp" />
            </Link>
        </div>
    );
};