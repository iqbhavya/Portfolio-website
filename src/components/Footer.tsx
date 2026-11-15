import { ArrowUp } from 'lucide-react';
import { SocialLinks } from './SocialLinks';

export function Footer() {
  return (
    <footer className="site-footer container">
      <div className="footer-main">
        <div>
          <a className="wordmark" href="#home" aria-label="Bhavya, home">
            BHAVYA<span>.</span>
          </a>
          <p>Designed and built with curiosity.</p>
        </div>
        <SocialLinks />
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Bhavya Yadav</span>
        <span className="footer-built">A LITTLE CURIOSITY. A LOT OF POSSIBILITY.</span>
        <a href="#home">
          Back to top
          <ArrowUp size={13} />
        </a>
      </div>
    </footer>
  );
}
