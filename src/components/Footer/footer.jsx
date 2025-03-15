import { Link } from "react-router-dom";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.fbox}>
          <h6>Get to Know Us</h6>
          <Link className={styles.links}>About Amazon</Link>
          <Link className={styles.links}>Careers</Link>
          <Link className={styles.links}>Press Releases</Link>
          <Link className={styles.links}>Amazon Science</Link>
        </div>
        <div className={styles.fbox}>
          <h6>Connect with Us</h6>
          <Link className={styles.links}>Facebook</Link>
          <Link className={styles.links}>Twitter</Link>
          <Link className={styles.links}>Instagram</Link>
        </div>
        <div className={styles.fbox}>
          <h6>Make Money with Us</h6>
          <Link className={styles.links}>Sell on Amazon</Link>
          <Link className={styles.links}>Sell under Amazon Accelerator</Link>
          <Link className={styles.links}>Protect and Build Your Brand</Link>
          <Link className={styles.links}>Amazon Global Selling</Link>
          <Link className={styles.links}>Supply to Amazon</Link>
          <Link className={styles.links}>Become an Affiliate</Link>
          <Link className={styles.links}>Fulfillment by Amazon</Link>
          <Link className={styles.links}>Advertise Your Products</Link>
          <Link className={styles.links}>Amazon Pay on Merchants</Link>
        </div>
        <div className={styles.fbox}>
          <h6>Let Us Help You</h6>
          <Link className={styles.links}>Your Account</Link>
          <Link className={styles.links}>Returns Centre</Link>
          <Link className={styles.links}>
            Recalls and Product Safety Alerts
          </Link>
          <Link className={styles.links}>100% Purchase Protection</Link>
          <Link className={styles.links}>Amazon App Download</Link>
          <Link className={styles.links}>Help</Link>
        </div>
      </div>

      <div className={styles.logo}>
        <img src="../AmazonLogo.png" alt="Amazon Logo" />
      </div>

      <div className={styles.end}>
        Conditions of Use & Sale | Privacy Notice | Interest-Based Ads
        <p>© 1996-2025, Amazon.com, Inc. or its affiliates</p>
      </div>
    </>
  );
};

export default Footer;
